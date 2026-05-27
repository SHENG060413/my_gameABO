# Supabase 云端账号保存配置

这个项目现在支持两种保存方式：

- 没有配置 `DATABASE_URL`：继续使用本机 `game-data/abo-life.sqlite`。
- 配置了 `DATABASE_URL`：账号、登录会话、游戏存档会写入 Supabase Postgres。

## 1. 创建 Supabase 数据库

1. 登录 Supabase，创建一个 Project。
2. 进入 Project Settings -> Database -> Connection string。
3. 选择 Session pooler 的 URI 连接串。
4. 把连接串里的 `[YOUR-PASSWORD]` 换成你的数据库密码。

## 2. 配置本地环境

复制 `.env.example` 为 `.env`，然后填写：

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/postgres?sslmode=require
```

保存后启动游戏：

```bash
npm start
```

服务启动时如果看到 `[ABO Storage] using Supabase/Postgres`，就代表已经接到云端数据库。

## 3. 迁移已有本地账号和存档

如果你已经有本机注册账号，先确认 `.env` 里有 Supabase 的 `DATABASE_URL`，再执行：

```bash
npm run migrate:supabase
```

迁移会复制 `users` 和 `saves`，不会复制 `sessions`，所以玩家迁移后需要重新登录。

## 4. 检查是否成功

1. 打开游戏注册一个测试账号。
2. 去 Supabase Table Editor 查看 `users` 表。
3. 进入游戏保存一次，再查看 `saves` 表。

如果要临时回到本地 SQLite，删除或注释 `.env` 里的 `DATABASE_URL` 后重启即可。
