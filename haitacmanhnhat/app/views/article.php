<?php
$posts = include PATHS['data'] . '/posts.php';

$category = $category ?? ($data['category'] ?? null) ?? '';
$post = $post ?? ($data['post'] ?? null) ?? '';
$category = trim((string) $category, '/');
$post = trim((string) $post, '/');
$key = ltrim($category . '/' . $post, '/');

if ($key === '' || !isset($posts[$key])) {
    throw new RuntimeException('Post not found for slug: ' . $key);
}

$meta = $posts[$key];
$page = [
    'title' => $meta['title'] ?? '',
    'body_class' => $meta['body_class'] ?? 'wrapper-subpage overflow-y-auto',
    'nav_active' => $meta['nav_active'] ?: 'news',
    'slug' => '/' . $key,
    'view' => 'article',
    'login_widget_script' => $meta['login_widget_script'] ?? $post,
];

if (!empty($meta['description'])) {
    $page['description'] = $meta['description'];
}

$content = 'posts/' . $key . '.html';
