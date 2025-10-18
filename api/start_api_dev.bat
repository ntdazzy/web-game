@echo off
REM Run `npm run dev` inside the API directory
cd /d "%~dp0\api"

IF NOT EXIST package.json (
    echo Could not find package.json in %CD%
    echo Make sure you are running this script from the project root.
    pause
    exit /b 1
)

IF NOT EXIST node_modules (
    echo Installing dependencies...
    call npm install
    IF ERRORLEVEL 1 (
        echo npm install failed.
        pause
        exit /b 1
    )
)

echo Starting API in dev mode...
call npm run dev

echo.
echo Dev server stopped. Press any key to close.
pause >nul
