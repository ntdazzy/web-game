<?php
declare(strict_types=1);

return [
    [
        'key' => 'home',
        'label' => 'Trang chủ',
        'url' => '',
        'class' => 'homepage',
    ],
    [
        'key' => 'news',
        'label' => 'Tin tức',
        'url' => 'tin-tuc',
        'class' => 'news',
    ],
    [
        'key' => 'hero',
        'label' => 'Tướng',
        'url' => 'danh-sach-tuong',
        'class' => 'hero-item',
    ],
    [
        'key' => 'fruit',
        'label' => 'Trái Ác Quỷ',
        'class' => 'fruit',
        'children' => [
            [
                'label' => 'Trái Ác Quỷ',
                'url' => 'trai-ac-quy',
            ],
            [
                'label' => 'Trái Dung Hợp',
                'url' => 'trai-dung-hop',
            ],
        ],
    ],
    [
        'key' => 'support',
        'label' => 'Hỗ trợ',
        'class' => 'support',
        'children' => [
            [
                'label' => 'Facebook',
                'url' => 'https://www.facebook.com/haitacmanhnhat',
                'external' => true,
                'class' => '',
            ],
            [
                'label' => 'Discord',
                'url' => 'https://discord.com/invite/pRQaVmUj78',
                'external' => true,
                'class' => '',
            ],
            [
                'label' => 'Zalo',
                'url' => 'https://zalo.me/g/snnzqo202',
                'external' => true,
                'class' => '',
            ],
        ],
    ],
    [
        'key' => 'community',
        'label' => 'Cộng Đồng',
        'class' => 'community',
        'children' => [
            [
                'label' => 'Youtube',
                'url' => 'https://www.youtube.com/@haitacmanhnhat',
                'external' => true,
                'class' => 'youtube',
            ],
            [
                'label' => 'Group cộng đồng',
                'url' => 'https://www.facebook.com/groups/dechehaitac',
                'external' => true,
                'class' => 'group',
            ],
            [
                'label' => 'Tiktok',
                'url' => 'https://www.tiktok.com/@haitacmanhnhat',
                'external' => true,
                'class' => 'tiktok',
            ],
            [
                'label' => 'Discord',
                'url' => 'https://discord.com/invite/pRQaVmUj78',
                'external' => true,
                'class' => 'discord',
            ],
        ],
    ],
];

