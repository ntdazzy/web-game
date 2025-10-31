/**
 * Giúp Vite sinh manifest cho toàn bộ assets được sử dụng trong Blade
 * thông qua Vite::asset().
 *
 * Khi build, mọi file phù hợp với glob bên dưới sẽ được đưa vào manifest.
 * Không import các module này ở runtime (chỉ cần side-effect).
 */
const assetModules = import.meta.glob(
    [
        "../assets/images/**/*",
        "../assets/fonts/**/*",
        "../assets/files/**/*",
    ],
    {
        eager: true,
        query: "?url",
        import: "default",
    }
);

export default assetModules;
