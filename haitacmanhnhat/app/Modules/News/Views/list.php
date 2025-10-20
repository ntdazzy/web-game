<?php
$datasetKey = $dataset ?? 'news';
$views = [
    'news' => __DIR__ . '/../../../Views/pages/tin-tuc.php',
    'event' => __DIR__ . '/../../../Views/pages/su-kien.php',
    'update' => __DIR__ . '/../../../Views/pages/update.php',
];
$targetView = $views[$datasetKey] ?? $views['news'];
require $targetView;
