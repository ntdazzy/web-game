# Hướng dẫn setup (Windows & XAMPP)

Tài liệu này mô tả chi tiết cách chuẩn bị và chạy `srcB` trên máy Windows, bao gồm cả kịch bản dùng XAMPP. Làm tuần tự từng bước dưới đây bạn sẽ bật được website thành công.

## 1. Công cụ cần có

| Công cụ                                                                                                                                                                                                                        | Mục đích                                                                 | Gợi ý cài đặt                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------- |
| Git                                                                                                                                                                                                                            | Tải/đồng bộ mã nguồn                                                     | https://git-scm.com/download/win            |
| PHP >= 8.1                                                                                                                                                                                                                     | Chạy dự án (yêu cầu extension `mbstring`, `openssl`, `fileinfo`, `json`) |
| - Nếu dùng XAMPP: PHP đã có sẵn trong `C:\xampp\php` <br>- Nếu không dùng XAMPP: tải bản zip từ https://windows.php.net/download/, giải nén (ví dụ `C:\Tools\php-8.2`) rồi thêm đường dẫn vào **Environment Variables → Path** |
| Composer                                                                                                                                                                                                                       | Quản lý thư viện PHP                                                     | https://getcomposer.org/Composer-Setup.exe  |
| Trình soạn thảo                                                                                                                                                                                                                | VS Code/PhpStorm/...                                                     | https://code.visualstudio.com/              |
| XAMPP (tùy chọn)                                                                                                                                                                                                               | Apache + MySQL + PHP tích hợp                                            | https://www.apachefriends.org/download.html |

> **Kiểm tra nhanh**
> Mở **PowerShell** mới và chạy:
>
> ```powershell
> php -v
> composer --version
> git --version
> ```
>
> Nếu lệnh trả về phiên bản, bạn đã setup công cụ đúng. Khi dùng XAMPP, hãy mở `C:\xampp\php` và chắc chắn `php.exe` hoạt động (có thể chạy `C:\xampp\php\php.exe -v`).

## 2. Bố trí thư mục dự án

1. Tạo thư mục gốc, ví dụ:
   ```
   C:\Projects
   ```
2. Đặt toàn bộ repository (chứa `srcA`, `srcB`, `srcC`…) vào:
   ```
   C:\Projects\haitacmanhnhat
   ```
3. Sau khi đặt đúng, cấu trúc sẽ giống:
   ```
   C:\Projects\haitacmanhnhat
     ├─ srcA
     ├─ srcB  ← dự án web chúng ta chạy
     ├─ srcC
     └─ ...
   ```

> Nếu clone bằng Git:
>
> ```powershell
> cd C:\Projects
> git clone <url-repo> haitacmanhnhat
> ```

## 3. Khởi tạo file `.env`

`srcB` đã tự đọc file `.env` (không cần tự export biến trong PowerShell nữa). Làm theo:

```powershell
cd C:\Projects\haitacmanhnhat\srcB
copy .env.example .env
```

Mở file `C:\Projects\haitacmanhnhat\srcB\.env` và điều chỉnh thông số cho môi trường phát triển:

```ini
APP_ENV=local
APP_DEBUG=true
APP_ORIGIN=http://localhost        ; đổi lại nếu dùng domain ảo (vd: http://haitacmanhnhat.local)

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nro
DB_USERNAME=root
DB_PASSWORD=                       ; để trống nếu dùng MySQL mặc định của XAMPP
```

Các khóa này được sử dụng trong `config/config.php`, vì vậy hãy điền đầy đủ để tránh lỗi cấu hình.

## 4. Cài đặt dependency PHP

Trong thư mục `srcB`, chạy:

```powershell
composer install
```

Lệnh này dựng thư mục `vendor/` và tạo `vendor/autoload.php`, giúp autoload hoạt động chính xác.

## 5. Chạy nhanh bằng PHP built-in server (tuỳ chọn)

Nếu cần test nhanh mà không dùng XAMPP:

```powershell
php -S localhost:8000 -t public
```

Sau đó mở trình duyệt: `http://localhost:8000`. Tất cả tuyến như `/tin-tuc`, `/su-kien`, `/danh-sach-tuong` sẽ hoạt động. Dữ liệu lấy từ `app/data/*.json`, không cần database khi chạy local.

## 6. Triển khai với XAMPP

Dự án **không bắt buộc** phải chép vào `C:\xampp\htdocs`. Có hai cách:

### 6.1. Cách nhanh (chạy trực tiếp trong `htdocs`)

1. Dừng Apache nếu đang chạy.
2. Sao chép toàn bộ thư mục `srcB` vào `C:\xampp\htdocs\haitacmanhnhat`.
3. Đảm bảo document root trỏ đến thư mục `public`. Cách đơn giản nhất: truy cập bằng đường dẫn con
   `http://localhost/haitacmanhnhat/public`.
4. Nếu muốn gọn URL (không `/public`), chỉnh `httpd.conf`:
   ```
   DocumentRoot "C:/xampp/htdocs/haitacmanhnhat/public"
   <Directory "C:/xampp/htdocs/haitacmanhnhat/public">
       AllowOverride All
       Require all granted
   </Directory>
   ```
   hoặc tạo file `.htaccess` tại `C:\xampp\htdocs\haitacmanhnhat\public` với rule rewrite phù hợp (nếu cần).
5. Khởi động Apache trong XAMPP Control Panel, truy cập `http://localhost`.

### 6.2. Cách sạch (VirtualHost, giữ dự án ở ngoài `htdocs`)

1. Giữ dự án ở `C:\Projects\haitacmanhnhat\srcB` (không phải chép vào `htdocs`).
2. Mở `C:\xampp\apache\conf\extra\httpd-vhosts.conf` và thêm:
   ```apacheconf
   <VirtualHost *:80>
       ServerName haitacmanhnhat.local
       DocumentRoot "C:/Projects/haitacmanhnhat/srcB/public"
       <Directory "C:/Projects/haitacmanhnhat/srcB/public">
           AllowOverride All
           Require all granted
       </Directory>
   </VirtualHost>
   ```
3. Thêm dòng vào hosts file (`C:\Windows\System32\drivers\etc\hosts`):
   ```
   127.0.0.1  haitacmanhnhat.local
   ```
4. Khởi động lại Apache từ XAMPP Control Panel.
5. Truy cập `http://haitacmanhnhat.local`. Giá trị `APP_ORIGIN` trong `.env` nên khớp domain này để meta tag và link tuyệt đối đúng.

## 7. Quy trình làm việc gợi ý

1. Mở PowerShell/terminal.
2. `cd C:\Projects\haitacmanhnhat\srcB`.
3. Đảm bảo `.env` đã cấu hình đúng.
4. `composer install` (chạy lại khi composer.json thay đổi).
5. Chạy server: dùng Apache của XAMPP hoặc `php -S ...`.
6. Chỉnh sửa code trong thư mục `app/` hoặc dữ liệu JSON, rồi refresh trình duyệt.

## 8. Khắc phục sự cố

- **Trang trắng / lỗi 500**: xem log hiển thị trong cửa sổ terminal (PHP built-in) hoặc `C:\xampp\apache\logs\error.log` (Apache).
- **Autoload lỗi "Class not found"**: chạy lại `composer install` hoặc `composer dump-autoload`.
- **Sai domain tuyệt đối**: cập nhật `APP_ORIGIN` trong `.env` cho đúng base URL đang dùng.
- **Đổi port Apache**: nếu cổng 80 bị chiếm, mở `httpd.conf`, chỉnh `Listen 8080`, sau đó truy cập `http://localhost:8080` và cập nhật `APP_ORIGIN`.
- **CSP chặn script/style tự thêm**: chỉnh hàm `send_security_headers()` trong `app/helpers.php` để whitelist nguồn bạn cần.

---

Chúc bạn thiết lập thành công! Sau khi chạy ổn định trên máy cá nhân, có thể triển khai lên server thật bằng cách trỏ document root của web server tới `srcB/public` và copy `.env` (sau khi điền giá trị sản xuất).
