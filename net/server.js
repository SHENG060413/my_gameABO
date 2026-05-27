require("dotenv/config");

const express = require("express");
const path = require("node:path");
const crypto = require("node:crypto");
const { createStore } = require("./storage");

const app = express();
const ROOT_DIR = __dirname;
const PORT = Number(process.env.PORT || 3000);
const SESSION_COOKIE_NAME = "abo_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7;
const ADMIN_USERNAME = "sunhengliuxinyu";
const ADMIN_PASSWORD = "liuxinyusunheng";
const COOKIE_SECURE = process.env.COOKIE_SECURE === "true" || (process.env.NODE_ENV === "production" && process.env.COOKIE_SECURE !== "false");

let store = null;

function nowIso() {
  return new Date().toISOString();
}

function sanitizeText(value, maxLength = 160) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function normalizeUsername(value) {
  return sanitizeText(value, 24).toLowerCase();
}

function isValidUsername(username) {
  return /^[a-zA-Z0-9_-]{3,24}$/.test(username);
}

function isValidPassword(password) {
  return typeof password === "string" && password.length >= 8 && password.length <= 64;
}

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const digest = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${digest}`;
}

function verifyPassword(password, storedHash) {
  const [salt, digest] = String(storedHash || "").split(":");
  if (!salt || !digest) {
    return false;
  }
  const expected = Buffer.from(digest, "hex");
  const actual = crypto.scryptSync(password, salt, 64);
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

function serializeUser(row) {
  if (!row) {
    return null;
  }
  return {
    id: row.id,
    username: row.username,
    role: row.role,
    displayName: row.display_name,
    archiveName: row.archive_name,
    archiveNote: row.archive_note,
    createdAt: row.created_at
  };
}

function deriveSaveMeta(payload) {
  return {
    archiveId: sanitizeText(payload?.state?.archiveId, 80),
    age: Number(payload?.state?.age || 0),
    quarter: Number(payload?.state?.quarter || 1),
    deceased: Boolean(payload?.state?.deceased)
  };
}

function isValidSlot(slot) {
  return Number.isInteger(slot) && slot >= 1 && slot <= 3;
}

function sessionCookieOptions(expires) {
  const options = {
    httpOnly: true,
    sameSite: "lax",
    secure: COOKIE_SECURE
  };
  if (expires) {
    options.expires = expires;
  }
  return options;
}

async function createSession(res, userId) {
  const token = crypto.randomBytes(32).toString("base64url");
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
  await store.insertSession(userId, tokenHash, expiresAt, nowIso());
  res.cookie(SESSION_COOKIE_NAME, token, sessionCookieOptions(new Date(expiresAt)));
}

async function clearSession(res, token) {
  if (token) {
    await store.deleteSessionByHash(hashToken(token));
  }
  res.clearCookie(SESSION_COOKIE_NAME, sessionCookieOptions());
}

function parseCookies(req) {
  const header = req.headers.cookie || "";
  return header.split(";").reduce((cookies, pair) => {
    const [key, ...rest] = pair.trim().split("=");
    if (!key) {
      return cookies;
    }
    cookies[key] = decodeURIComponent(rest.join("="));
    return cookies;
  }, {});
}

function requireAuth(req, res, next) {
  if (!req.user) {
    res.status(401).json({ error: "请先登录账号。" });
    return;
  }
  next();
}

function requireAdmin(req, res, next) {
  if (!req.user || req.user.role !== "admin") {
    res.status(403).json({ error: "当前账号没有管理员权限。" });
    return;
  }
  next();
}

async function buildSlotSummaryResponse(userId) {
  const summaries = new Map();
  for (const row of await store.listSavesByUserId(userId)) {
    summaries.set(row.slot, {
      slot: row.slot,
      status: "valid",
      archiveId: row.archive_id,
      age: row.age,
      quarter: row.quarter,
      deceased: Boolean(row.deceased),
      savedAt: row.saved_at
    });
  }

  return [1, 2, 3].map((slot) => summaries.get(slot) || { slot, status: "empty" });
}

async function writeSaveRecord(userId, slot, payload) {
  const meta = deriveSaveMeta(payload);
  if (!meta.archiveId) {
    throw new Error("存档缺少有效档案编号。");
  }

  const savedAt = nowIso();
  await store.upsertSave(userId, slot, meta, savedAt, JSON.stringify(payload));
  return { savedAt, meta };
}

async function ensureAdminAccount() {
  const existingAdmin = await store.findAdminUser();
  const adminUsername = normalizeUsername(ADMIN_USERNAME);
  const adminUser = {
    username: adminUsername,
    passwordHash: hashPassword(ADMIN_PASSWORD),
    role: "admin",
    displayName: "联邦管理员",
    archiveName: "中央管理档案",
    archiveNote: "拥有管理员数值提示界面与玩家档案总览权限。",
    createdAt: nowIso()
  };

  if (existingAdmin) {
    await store.updateAdminUser(existingAdmin.id, adminUser);
    return;
  }

  await store.insertUser(adminUser);
  console.log(`[ABO Admin] seeded fixed admin account -> username: ${adminUsername}`);
}

function asyncHandler(handler) {
  return (req, res, next) => {
    Promise.resolve(handler(req, res, next)).catch(next);
  };
}

app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: false }));

app.use(asyncHandler(async (req, res, next) => {
  await store.deleteExpiredSessions(nowIso());
  const cookies = parseCookies(req);
  const token = cookies[SESSION_COOKIE_NAME];
  if (!token) {
    req.user = null;
    req.sessionToken = null;
    next();
    return;
  }

  const sessionUser = await store.findSessionUser(hashToken(token), nowIso());
  if (!sessionUser) {
    req.user = null;
    req.sessionToken = token;
    await clearSession(res, token);
    next();
    return;
  }

  req.user = serializeUser(sessionUser);
  req.sessionToken = token;
  next();
}));

app.get("/api/auth/session", (req, res) => {
  res.json({
    authenticated: Boolean(req.user),
    user: req.user,
    saveMode: req.user ? "cloud" : "local"
  });
});

app.post("/api/auth/register", asyncHandler(async (req, res) => {
  const username = normalizeUsername(req.body.username);
  const password = String(req.body.password || "");
  const displayName = sanitizeText(req.body.displayName || req.body.username, 30) || username;

  if (!isValidUsername(username)) {
    res.status(400).json({ error: "账号格式无效：请使用 3-24 位字母、数字、下划线或连字符。" });
    return;
  }
  if (!isValidPassword(password)) {
    res.status(400).json({ error: "密码格式无效：长度需为 8-64 位。" });
    return;
  }
  if (await store.findUserByUsername(username)) {
    res.status(409).json({ error: "该账号已存在，请更换账号名。" });
    return;
  }

  const userId = await store.insertUser({
    username,
    passwordHash: hashPassword(password),
    role: "player",
    displayName,
    archiveName: "",
    archiveNote: "",
    createdAt: nowIso()
  });
  await createSession(res, userId);
  const user = serializeUser(await store.findUserByUsername(username));
  res.status(201).json({ user });
}));

app.post("/api/auth/login", asyncHandler(async (req, res) => {
  const username = normalizeUsername(req.body.username);
  const password = String(req.body.password || "");
  const userRow = await store.findUserByUsername(username);

  if (!userRow || !verifyPassword(password, userRow.password_hash)) {
    res.status(401).json({ error: "账号或密码错误。" });
    return;
  }

  await createSession(res, userRow.id);
  res.json({ user: serializeUser(userRow) });
}));

app.post("/api/auth/logout", asyncHandler(async (req, res) => {
  await clearSession(res, req.sessionToken);
  res.json({ ok: true });
}));

app.get("/api/saves", requireAuth, asyncHandler(async (req, res) => {
  res.json({ slots: await buildSlotSummaryResponse(req.user.id) });
}));

app.get("/api/saves/:slot", requireAuth, asyncHandler(async (req, res) => {
  const slot = Number(req.params.slot);
  if (!isValidSlot(slot)) {
    res.status(400).json({ error: "存档槽位无效，请选择 1-3。" });
    return;
  }

  const row = await store.findSaveByUserAndSlot(req.user.id, slot);
  if (!row) {
    res.json({ slot, status: "empty" });
    return;
  }

  res.json({
    slot,
    status: "valid",
    savedAt: row.saved_at,
    meta: {
      archiveId: row.archive_id,
      age: row.age,
      quarter: row.quarter,
      deceased: Boolean(row.deceased)
    },
    payload: JSON.parse(row.payload_json)
  });
}));

app.put("/api/saves/:slot", requireAuth, asyncHandler(async (req, res) => {
  const slot = Number(req.params.slot);
  if (!isValidSlot(slot)) {
    res.status(400).json({ error: "存档槽位无效，请选择 1-3。" });
    return;
  }

  const payload = req.body.payload;
  if (!payload || typeof payload !== "object" || typeof payload.version !== "number" || typeof payload.state !== "object") {
    res.status(400).json({ error: "存档数据格式无效。" });
    return;
  }

  let result = null;
  try {
    result = await writeSaveRecord(req.user.id, slot, payload);
  } catch (error) {
    res.status(400).json({ error: error.message || "存档写入失败。" });
    return;
  }

  res.json({
    ok: true,
    slot,
    savedAt: result.savedAt,
    meta: result.meta
  });
}));

app.post("/api/saves/:slot/beacon", requireAuth, express.text({ type: "*/*", limit: "4mb" }), asyncHandler(async (req, res) => {
  const slot = Number(req.params.slot);
  if (!isValidSlot(slot)) {
    res.status(400).json({ error: "存档槽位无效，请选择 1-3。" });
    return;
  }

  let rawBody = req.body;
  let parsedBody = null;

  try {
    if (typeof rawBody === "string") {
      parsedBody = JSON.parse(rawBody);
    } else if (Buffer.isBuffer(rawBody)) {
      parsedBody = JSON.parse(rawBody.toString("utf8"));
    } else {
      parsedBody = rawBody;
    }
  } catch (error) {
    res.status(400).json({ error: "离开时提交的存档数据无法解析。" });
    return;
  }

  const payload = parsedBody?.payload;
  if (!payload || typeof payload !== "object" || typeof payload.version !== "number" || typeof payload.state !== "object") {
    res.status(400).json({ error: "离开时提交的存档数据格式无效。" });
    return;
  }

  try {
    const result = await writeSaveRecord(req.user.id, slot, payload);
    res.json({ ok: true, slot, savedAt: result.savedAt, meta: result.meta });
  } catch (error) {
    res.status(400).json({ error: error.message || "离开时写入云端存档失败。" });
  }
}));

app.get("/api/admin/dashboard", requireAuth, requireAdmin, asyncHandler(async (req, res) => {
  const rows = await store.listUsersWithSaves();
  const users = [];
  const byId = new Map();

  for (const row of rows) {
    if (!byId.has(row.id)) {
      const user = {
        id: row.id,
        username: row.username,
        role: row.role,
        displayName: row.display_name,
        archiveName: row.archive_name,
        archiveNote: row.archive_note,
        createdAt: row.created_at,
        saves: []
      };
      byId.set(row.id, user);
      users.push(user);
    }

    if (row.slot !== null && row.slot !== undefined) {
      byId.get(row.id).saves.push({
        slot: row.slot,
        archiveId: row.archive_id,
        age: row.age,
        quarter: row.quarter,
        deceased: Boolean(row.deceased),
        savedAt: row.saved_at
      });
    }
  }

  res.json({ users });
}));

app.get("/", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "index.html"));
});

app.get("/index.html", (req, res) => {
  res.sendFile(path.join(ROOT_DIR, "index.html"));
});

app.get("/app.js", (req, res) => {
  res.type("application/javascript").sendFile(path.join(ROOT_DIR, "app.js"));
});

app.get("/styles.css", (req, res) => {
  res.type("text/css").sendFile(path.join(ROOT_DIR, "styles.css"));
});

app.use("/assets", express.static(path.join(ROOT_DIR, "assets"), { fallthrough: true }));

app.use((error, req, res, next) => {
  console.error(error);
  if (res.headersSent) {
    next(error);
    return;
  }
  res.status(500).json({ error: "服务器处理请求失败，请稍后再试。" });
});

async function startServer() {
  store = await createStore();
  await ensureAdminAccount();
  app.listen(PORT, () => {
    const storageLabel = store.mode === "postgres" ? "Supabase/Postgres" : "local SQLite";
    console.log(`ABO simulator server running at http://localhost:${PORT}`);
    console.log(`[ABO Storage] using ${storageLabel}`);
  });
}

startServer().catch((error) => {
  console.error("ABO simulator server failed to start:", error);
  process.exit(1);
});
