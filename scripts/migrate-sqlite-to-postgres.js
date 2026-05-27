require("dotenv/config");

const fs = require("node:fs");
const { DatabaseSync } = require("node:sqlite");
const { createPostgresPool, POSTGRES_SCHEMA, SQLITE_DATABASE_PATH } = require("../storage");

const sourcePath = process.argv[2] || SQLITE_DATABASE_PATH;

function readSqliteRows(db, sql) {
  return db.prepare(sql).all();
}

async function main() {
  if (!process.env.DATABASE_URL) {
    console.error("请先在 .env 里配置 DATABASE_URL，再执行迁移。");
    process.exitCode = 1;
    return;
  }
  if (!fs.existsSync(sourcePath)) {
    console.error(`找不到本地 SQLite 数据库：${sourcePath}`);
    process.exitCode = 1;
    return;
  }

  const sqlite = new DatabaseSync(sourcePath);
  const users = readSqliteRows(sqlite, `
    SELECT id, username, password_hash, role, display_name, archive_name, archive_note, created_at
    FROM users
    ORDER BY id ASC
  `);
  const saves = readSqliteRows(sqlite, `
    SELECT user_id, slot, archive_id, age, quarter, deceased, saved_at, payload_json
    FROM saves
    ORDER BY user_id ASC, slot ASC
  `);

  const pool = createPostgresPool();
  const client = await pool.connect();
  const userIdByOldId = new Map();

  try {
    await client.query("BEGIN");
    await client.query(POSTGRES_SCHEMA);

    for (const user of users) {
      const { rows } = await client.query(`
        INSERT INTO users (username, password_hash, role, display_name, archive_name, archive_note, created_at)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (username) DO UPDATE SET
          password_hash = excluded.password_hash,
          role = excluded.role,
          display_name = excluded.display_name,
          archive_name = excluded.archive_name,
          archive_note = excluded.archive_note,
          created_at = excluded.created_at
        RETURNING id
      `, [
        user.username,
        user.password_hash,
        user.role,
        user.display_name,
        user.archive_name,
        user.archive_note,
        user.created_at
      ]);
      userIdByOldId.set(user.id, rows[0].id);
    }

    for (const save of saves) {
      const userId = userIdByOldId.get(save.user_id);
      if (!userId) {
        continue;
      }

      await client.query(`
        INSERT INTO saves (user_id, slot, archive_id, age, quarter, deceased, saved_at, payload_json)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        ON CONFLICT(user_id, slot) DO UPDATE SET
          archive_id = excluded.archive_id,
          age = excluded.age,
          quarter = excluded.quarter,
          deceased = excluded.deceased,
          saved_at = excluded.saved_at,
          payload_json = excluded.payload_json
      `, [
        userId,
        save.slot,
        save.archive_id,
        save.age,
        save.quarter,
        Boolean(save.deceased),
        save.saved_at,
        save.payload_json
      ]);
    }

    await client.query("COMMIT");
    console.log(`迁移完成：${users.length} 个账号，${saves.length} 个存档。sessions 不迁移，玩家需要重新登录。`);
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    client.release();
    await pool.end();
    sqlite.close();
  }
}

main().catch((error) => {
  console.error("迁移失败：", error);
  process.exitCode = 1;
});
