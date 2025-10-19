<?php
$defaultMeta = [
    'viewport' => 'width=device-width, initial-scale=1.0',
    'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
    'og:title' => 'Hải Tặc Mạnh Nhất',
    'og:image' => '/assets/stms/imgs/600x315.jpg',
    'og:image:width' => '600',
    'og:image:height' => '315',
    'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
    'link:shortcut_icon' => '/assets/stms/imgs/32x32.png',
];
$meta = array_replace($defaultMeta, $meta ?? []);
$pageTitle = $pageTitle ?? ($meta['og:title'] ?? 'Hải Tặc Mạnh Nhất');
?>
<meta charset="utf-8">
<meta name="viewport" content="<?= htmlspecialchars($meta['viewport'], ENT_QUOTES) ?>">
<title><?= htmlspecialchars($pageTitle, ENT_QUOTES) ?></title>
<?php if (!empty($meta['description'])): ?>
    <meta name="description" content="<?= htmlspecialchars($meta['description'], ENT_QUOTES) ?>">
<?php endif; ?>
<?php foreach ($meta as $key => $value): ?>
    <?php if (str_starts_with($key, 'og:') && $value !== null): ?>
        <meta property="<?= htmlspecialchars($key, ENT_QUOTES) ?>" content="<?= htmlspecialchars((string) $value, ENT_QUOTES) ?>">
    <?php endif; ?>
<?php endforeach; ?>
<?php if (!empty($meta['facebook-domain-verification'])): ?>
    <meta name="facebook-domain-verification" content="<?= htmlspecialchars($meta['facebook-domain-verification'], ENT_QUOTES) ?>">
<?php endif; ?>
<?php if (!empty($meta['link:shortcut_icon'])): ?>
    <link rel="shortcut icon" href="<?= htmlspecialchars($meta['link:shortcut_icon'], ENT_QUOTES) ?>">
<?php endif; ?>
<?php include __DIR__ . '/analytics-head.php'; ?>
