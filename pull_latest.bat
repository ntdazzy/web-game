@echo off
REM Pull the latest changes from the current repository
cd /d "%~dp0"
echo Updating repository at %CD% ...
git pull
echo.
echo Done. Press any key to close.
pause >nul
