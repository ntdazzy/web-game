            <?php
            $meta = $meta ?? [];
            $defaults = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'og:title' => 'Trang chủ | Hải Tặc Mạnh Nhất',
    'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
    'og:image' => '/st-ms/imgs/600x315.jpg',
    'og:image:width' => '600',
    'og:image:height' => '315',
    'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
    'link:shortcut_icon' => '/st-ms/imgs/32x32.png'
];
            $meta = array_replace_recursive($defaults, $meta);
            $pageTitle = $pageTitle ?? 'Trang chủ | Hải Tặc Mạnh Nhất';
            ?>
            <meta charset="utf-8">
            <?php if (!empty($meta['viewport'] ?? null)): ?>
                <meta name="viewport" content="<?= htmlspecialchars($meta['viewport'], ENT_QUOTES) ?>">
            <?php else: ?>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <?php endif; ?>
            <title><?= htmlspecialchars($pageTitle, ENT_QUOTES) ?></title>
            <?php if (!empty($meta['description'] ?? null)): ?>
                <meta name="description" content="<?= htmlspecialchars($meta['description'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['og:title'] ?? null)): ?>
                <meta property="og:title" content="<?= htmlspecialchars($meta['og:title'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['og:image'] ?? null)): ?>
                <meta property="og:image" content="<?= htmlspecialchars($meta['og:image'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['og:image:width'] ?? null)): ?>
                <meta property="og:image:width" content="<?= htmlspecialchars($meta['og:image:width'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['og:image:height'] ?? null)): ?>
                <meta property="og:image:height" content="<?= htmlspecialchars($meta['og:image:height'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['facebook-domain-verification'] ?? null)): ?>
                <meta name="facebook-domain-verification" content="<?= htmlspecialchars($meta['facebook-domain-verification'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <?php if (!empty($meta['link:shortcut_icon'] ?? null)): ?>
                <link rel="shortcut icon" href="<?= htmlspecialchars($meta['link:shortcut_icon'], ENT_QUOTES) ?>">
            <?php endif; ?>
            <!-- /Added by HTTrack -->


<link href="/index.html" rel="dns-prefetch"/>
<link href="/cdn-ms.haitacmanhnhat.vn/index.html" rel="dns-prefetch"/>
<link href="/fonts.googleapis.com/index.html" rel="preconnect"/>






<link href="/st-ms/imgs/32x32.png" rel="shortcut icon"/>












<script>
    var DOMAIN = window.location.hostname;
    var jsonData = JSON.parse('{"script":"index.html\/\/haitacmanhnhat.vn\/st-ms\/js\/widget.login.js","redirect":"https:\/\/haitacmanhnhat.vn\/qua-nap-web"}');
    const cookieDomain = '.haitacmanhnhat.vn';
    var linkAjaxGiftcode = DOMAIN + '/giftcode/fetch-code-by-id';
    var historyGiftcode = DOMAIN + '/giftcode/fetch-history';
</script>


<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-16807771965');
</script>
<!-- Google Tag Manager 2025-07-21 -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P3Q6G85M');</script>
<!-- End Google Tag Manager -->

