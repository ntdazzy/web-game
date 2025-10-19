<?php
namespace App\Modules\Characters\Services;

use App\Modules\Characters\Repositories\CharacterRepository;

class CharacterService
{
    public function all(): array
    {
        return CharacterRepository::all();
    }

    public function listPageContext(): array
    {
        return [
            'pageTitle' => 'Danh sách tướng | Hải Tặc Mạnh Nhất',
            'meta' => [
                'viewport' => 'width=device-width, initial-scale=1.0',
                'og:title' => 'Danh sách tướng | Hải Tặc Mạnh Nhất',
                'description' => 'Hải Tặc Mạnh Nhất – Game nhập vai chiến thuật chủ đề One Piece. Hóa thân biến hình - Mega Mall – đấu liên server cực gắt. Sẵn sàng chinh phục?',
                'og:image' => '/assets/stms/imgs/600x315.jpg',
                'og:image:width' => '600',
                'og:image:height' => '315',
                'facebook-domain-verification' => '6bko4jl76it4vql0pwhs6bmeudp8bo',
                'link:shortcut_icon' => '/assets/stms/imgs/32x32.png',
            ],
            'bodyAttributes' => 'class="wrapper-subpage overflow-y-auto subpage-hero"',
            'activeNav' => 'characters',
            'loginScriptPage' => 'danh-sach-tuong',
            'pageScripts' => ['/assets/js/pages/characters.js'],
            'characters' => $this->all(),
        ];
    }

    public function paginate(int $page, int $limit, ?string $rank = null): array
    {
        return CharacterRepository::paginate($page, $limit, $rank);
    }

    public function findBySlug(string $slug): ?array
    {
        return CharacterRepository::findBySlug($slug);
    }
}
