@echo off
setlocal enabledelayedexpansion

rem Move to the directory of this script (project root)
pushd "%~dp0"

for /f %%i in ('powershell -NoProfile -Command "(Get-Date).ToString('yyyyMMdd')"') do set YYYYMMDD=%%i
set LOGFILE=storage\logs\setup-%YYYYMMDD%.log

echo [%date% %time%] === run_dev_build started ===>> "%LOGFILE%"

echo [1/4] Clearing Laravel caches...
php artisan optimize:clear >> "%LOGFILE%" 2>&1 || goto :error

echo [2/4] Building frontend assets...
npm run build >> "%LOGFILE%" 2>&1 || goto :error

echo [3/4] Starting php artisan serve in a new window...
echo [%date% %time%] launching php artisan serve >> "%LOGFILE%"
start "Laravel Server" cmd /c "php artisan serve"

echo [4/4] Opening site in InPrivate browser tab...
start "" msedge --inprivate http://127.0.0.1:8000/

echo All tasks launched. Logs: %LOGFILE%
echo Press any key to exit this window.
pause >nul
goto :eof

:error
echo [%date% %time%] ERROR encountered. See %LOGFILE% for details.>> "%LOGFILE%"
echo.
echo An error occurred. Check %LOGFILE% for details.
pause
