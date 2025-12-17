@echo off
setlocal

echo [1/6] Kiem tra file .env...
if not exist ".env" (
    copy ".env.example" ".env"
    echo Da tao .env tu .env.example
)

echo [2/6] Cai dat composer dependencies...
call composer install
if %errorlevel% neq 0 (
    echo Composer install that bai.
    exit /b %errorlevel%
)

echo [3/6] Cai dat npm packages...
call npm install
if %errorlevel% neq 0 (
    echo npm install that bai.
    exit /b %errorlevel%
)

echo [4/6] Tao APP_KEY...
php artisan key:generate --force

echo [5/6] Chay migrate...
php artisan migrate --force

echo [6/6] Build assets...
npm run build

echo Hoan tat! Ban co the chay php artisan serve de khoi dong ung dung.
endlocal
