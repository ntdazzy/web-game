@echo off
setlocal enabledelayedexpansion

rem Move to the directory of this script (project root)
pushd "%~dp0"

for /f %%i in ('powershell -NoProfile -Command "(Get-Date).ToString('yyyyMMdd')"') do set YYYYMMDD=%%i
set LOGFILE=storage\logs\setup-%YYYYMMDD%.log

echo [%date% %time%] === run_dev_build started ===>> "%LOGFILE%"

echo.
echo =============================
echo  Chon kieu chay:
echo    [1] Build production (npm run build)
echo    [2] Chay dev (npm run dev)
echo =============================
set /p RUNMODE=Nhap lua chon (1/2) [mac dinh:1]:
if "%RUNMODE%"=="" set RUNMODE=1

if "%RUNMODE%"=="1" (
    echo [1/4] Clearing Laravel caches...
    php artisan optimize:clear >> "%LOGFILE%" 2>&1 || goto :error

    echo [2/4] Building frontend assets...
    call npm run build >> "%LOGFILE%" 2>&1 || goto :error

    echo [3/4] Starting php artisan serve in a new window...
    echo [%date% %time%] launching php artisan serve >> "%LOGFILE%"
    start "Laravel Server" cmd /c "php artisan serve"

    echo [4/4] Opening site in InPrivate browser tab...
    start "" msedge --inprivate http://127.0.0.1:8000/

    echo All tasks launched. Logs: %LOGFILE%
    echo Press any key to exit this window.
    pause >nul
    goto :eof
) else if "%RUNMODE%"=="2" (
    echo [1/2] Clearing Laravel caches...
    php artisan optimize:clear >> "%LOGFILE%" 2>&1 || goto :error

    echo [2/2] Starting dev servers...
    echo [%date% %time%] launching npm run dev >> "%LOGFILE%"
    start "Vite Dev" cmd /c "call npm run dev"
    echo [%date% %time%] launching php artisan serve >> "%LOGFILE%"
    start "Laravel Server" cmd /c "php artisan serve"

    echo Opening site in InPrivate browser tab...
    start "" msedge --inprivate http://127.0.0.1:8000/

    echo Dev mode launched. Logs: %LOGFILE%
    echo Press any key to exit this window.
    pause >nul
    goto :eof
) else (
    echo Lua chon khong hop le. Thoat.
    pause
    goto :eof
)

:error
echo [%date% %time%] ERROR encountered. See %LOGFILE% for details.>> "%LOGFILE%"
echo.
echo An error occurred. Check %LOGFILE% for details.
pause
