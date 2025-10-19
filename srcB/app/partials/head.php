<?php
declare(strict_types=1);

$defaultDescription = 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?';
$pageDescription = $description ?: $defaultDescription;
$slugPath = trim($page['slug'] ?? '', '/');
if ($slugPath === '') {
    $fallbackCanonical = CANONICAL_BASE . '/';
} else {
    $fallbackCanonical = CANONICAL_BASE . '/' . $slugPath;
}
$canonicalUrl = $canonical ?: $fallbackCanonical;

$ogDefaults = [
    'title' => $title,
    'description' => $pageDescription,
    'image' => asset_url('assets/img/og-default.jpg'),
    'type' => 'website',
];
$ogData = array_merge($ogDefaults, is_array($og) ? $og : []);

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<?php if ($pageDescription): ?>
    <meta name="description" content="<?= ht_attr($pageDescription); ?>">
<?php endif; ?>
<?php if ($canonicalUrl): ?>
    <link rel="canonical" href="<?= ht_attr($canonicalUrl); ?>">
<?php endif; ?>
    <meta property="og:locale" content="vi_VN">
    <meta property="og:title" content="<?= ht_attr($ogData['title'] ?? $title); ?>">
<?php if (!empty($ogData['description'])): ?>
    <meta property="og:description" content="<?= ht_attr($ogData['description']); ?>">
<?php endif; ?>
    <meta property="og:type" content="<?= ht_attr($ogData['type'] ?? 'website'); ?>">
    <meta property="og:url" content="<?= ht_attr($canonicalUrl); ?>">
<?php if (!empty($ogData['image'])): ?>
    <meta property="og:image" content="<?= ht_attr($ogData['image']); ?>">
<?php endif; ?>
<?php if (!empty($ogData['image:width'])): ?>
    <meta property="og:image:width" content="<?= ht_attr((string) $ogData['image:width']); ?>">
<?php endif; ?>
<?php if (!empty($ogData['image:height'])): ?>
    <meta property="og:image:height" content="<?= ht_attr((string) $ogData['image:height']); ?>">
<?php endif; ?>
    <meta name="facebook-domain-verification" content="6bko4jl76it4vql0pwhs6bmeudp8bo">
    <link rel="shortcut icon" href="<?= ht_attr(asset_url('assets/img/favicon.png')); ?>">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="<?= ht_attr(asset_url('assets/css/base.css?v=1')); ?>">
    <link rel="stylesheet" href="<?= ht_attr(asset_url('assets/css/components.css?v=1')); ?>">
    <link rel="stylesheet" href="<?= ht_attr(asset_url('assets/css/pages.css?v=1')); ?>">
    <link rel="stylesheet" href="<?= ht_attr(asset_url('assets/css/responsive.css?v=1')); ?>">
<?php foreach ($styles as $style): ?>
    <link rel="stylesheet" href="<?= ht_attr(asset_url($style)); ?>">
<?php endforeach; ?>
<?php foreach ($scriptsHead as $script): ?>
    <script src="<?= ht_attr(asset_url($script)); ?>" defer></script>
<?php endforeach; ?>
    <title><?= ht_attr($title); ?></title>
</head>
