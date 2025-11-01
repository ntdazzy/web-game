# Legacy Asset Mapping

Bảng dưới đây ghi lại việc quy đổi các tệp CSS/JS từ thư mục `src_gốc` sang cấu trúc Vite.

| Loại | Nguồn cũ | Tệp mới |
|------|----------|---------|
| CSS chính | `st-ms/css/style*.css` | `resources/css/site-base.css`
| CSS responsive | `st-ms/css/responsive*.css` | `resources/css/site-responsive.css`
| Bootstrap | `st-ms/css/bootstrap.min.css` | `resources/css/vendor/bootstrap.min.css`
| FontAwesome | `st-ms/css/all.min.css` | `resources/css/vendor/fontawesome-all.min.css`
| Slick core/theme | `st-ms/css/slick*.css` | `resources/css/vendor/slick.css`, `resources/css/vendor/slick-theme.css`
| Date range picker | `st-ms/css/daterangepicker.css` | `resources/css/vendor/daterangepicker.css`
| Custom scrollbar | `st-ms/css/jquery.mCustomScrollbar.min.css` | `resources/css/vendor/jquery.mCustomScrollbar.min.css`
| Select2 | `st-ms/css/select2.min.css` | `resources/css/vendor/select2.min.css`
| AOS | `st-ms/css/aos.css` | `resources/css/vendor/aos.css`
| LetMeScroll | `st-ms/css/letmescroll.css` | `resources/css/vendor/letmescroll.css`
| JS global | `st-ms/js/global.script*.js` | `resources/js/site-global.js`
| JS custom | `st-ms/js/custom*.js` | `resources/js/site-custom.js`
| Giftcode | `st-ms/js/giftcode.script*.js` | `resources/js/modules/giftcode.js`
| Devil fruit list | `st-ms/js/fruits.js` | `resources/js/modules/devilfruits.js`
| Scroll menu | `st-ms/js/scroll.js` | `resources/js/modules/scroll.js`
| Login modal | `st-ms/js/widget.login*.js` | `resources/js/modules/auth-modal.js`
| Runtime loader | `index.html` script stack | `resources/js/site.js`
| Vendor JS | `st-ms/js/*.js` (jquery, bootstrap, slick, select2, sweetalert2, aos, moment, daterangepicker, letmescroll, loadingoverlay, mCustomScrollbar) | `resources/js/vendor/*.js`

Tất cả các đường dẫn `url(...)` trong CSS đã được cập nhật lại sang thư mục `resources/assets` và được đưa vào manifest Vite thông qua `resources/js/assets-manifest.js`.

> Ghi chú:
>
> - Các nhóm file `style*.css` và `responsive*.css` được gộp lại thành `site-base.css` và `site-responsive.css`, chỉ thay đổi đường dẫn `url(...)` và thêm chú thích, toàn bộ rule giữ nguyên.
> - Các nhóm JS `global.script*.js`, `custom*.js`, `widget.login*.js`, `scroll.js`, `fruits.js` được hợp nhất và tái cấu trúc nhẹ để hỗ trợ routing/Vite nhưng logic vẫn tương đương 1-1 với bản gốc.
