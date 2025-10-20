<?php
$pageTitle = $character['name'] ?? ($pageTitle ?? 'Thông tin tướng');
$meta = array_merge([
    'description' => $character['remote']['description'] ?? ($meta['description'] ?? null),
], $meta ?? []);
$bodyAttributes = $bodyAttributes ?? ($character['body_attributes'] ?? '');
?>
<?= $character['content_html'] ?? '' ?>
