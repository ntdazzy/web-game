<?php

namespace App\Modules\Home\Services;

class HomeService
{
    public function landingPageContext(): array
    {
        return [
            'pageTitle' => 'Trang chủ | Hải Tặc Mạnh Nhất',
            'meta' => [
                'viewport' => 'width=device-width, initial-scale=1.0',
                'og:title' => 'Trang chủ | Hải Tặc Mạnh Nhất',
                'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
                'og:image' => '/assets/stms/imgs/600x315.jpg',
                'og:image:width' => '600',
                'og:image:height' => '315',
                'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
                'link:shortcut_icon' => '/assets/stms/imgs/32x32.png',
            ],
            'structuredData' => [
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'Organization',
                    'name' => 'Hải Tặc Mạnh Nhất',
                    'url' => app_origin() . '/',
                    'logo' => app_origin() . '/assets/stms/imgs/logo.png',
                    'sameAs' => [
                        'https://www.facebook.com/haitacmanhnhat',
                        'https://www.tiktok.com/@haitacmanhnhat',
                        'https://www.youtube.com/@haitacmanhnhat',
                        'https://discord.com/invite/pRQaVmUj78',
                        'https://zalo.me/g/snnzqo202',
                    ],
                ],
                [
                    '@context' => 'https://schema.org',
                    '@type' => 'WebSite',
                    'name' => 'Hải Tặc Mạnh Nhất',
                    'url' => app_origin() . '/',
                    'potentialAction' => [
                        '@type' => 'SearchAction',
                        'target' => app_origin() . '/tin-tuc?search={search_term_string}',
                        'query-input' => 'required name=search_term_string',
                    ],
                ],
            ],
            'bodyAttributes' => 'class="home-page"',
            'showLeftMenu' => true,
            'pageStyles' => ['/assets/css/modules/home.css'],
            'heroVideo' => [
                'src' => '/assets/stms/videos/mainsite/home-video-3.mp4',
                'type' => 'video/mp4',
                'poster' => '/assets/images/background.webp',
            ],
            'heroBackground' => [
                'src' => '/assets/images/background.webp',
                'fallback' => '/assets/images/background.png',
                'alt' => 'Hải Tặc Mạnh Nhất background',
            ],
        ];
    }
}
