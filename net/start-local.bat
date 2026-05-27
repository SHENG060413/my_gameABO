@echo off
setlocal

cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo [ABO] 未检测到 Node.js，请先安装 Node.js 18+。
  pause
  exit /b 1
)

if not exist "node_modules\express" (
  echo [ABO] 首次启动，正在安装依赖...
  call npm install
  if errorlevel 1 (
    echo [ABO] 依赖安装失败，请检查网络或 npm 环境。
    pause
    exit /b 1
  )
)

start "ABO Local Server" cmd /k "cd /d "%~dp0" && node server.js"
start "" "http://localhost:3000"

exit /b 0