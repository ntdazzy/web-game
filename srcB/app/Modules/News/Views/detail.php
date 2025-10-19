<?php
$datasetKey = $dataset ?? 'news';
$views = [
    'news' => __DIR__ . '/../../../Views/pages/news/detail.php',
    'event' => __DIR__ . '/../../../Views/pages/events/detail.php',
    'update' => __DIR__ . '/../../../Views/pages/updates/detail.php',
];
$targetView = $views[$datasetKey] ?? $views['news'];
require $targetView;
