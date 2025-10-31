<?php

namespace App\Http\Controllers;

use App\Models\Character;
use App\Models\Post;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class SiteMapController extends Controller
{
    public function index(): Response
    {
        $urls = [
            [
                'loc' => URL::to('/'),
                'changefreq' => 'daily',
            ],
            [
                'loc' => URL::to('/tin-tuc'),
                'changefreq' => 'daily',
            ],
            [
                'loc' => URL::to('/su-kien'),
                'changefreq' => 'daily',
            ],
            [
                'loc' => URL::to('/update'),
                'changefreq' => 'daily',
            ],
            [
                'loc' => URL::to('/danh-sach-tuong'),
                'changefreq' => 'weekly',
            ],
        ];

        $posts = Post::query()->orderByDesc('created_at')->get(['id', 'tieude', 'created_at']);
        foreach ($posts as $post) {
            $urls[] = [
                'loc' => route('post.show', ['post' => $post->getKey(), 'slug' => Str::slug($post->tieude)], absolute: true),
                'lastmod' => optional($post->created_at)->toAtomString(),
                'changefreq' => 'weekly',
            ];
        }

        $characters = Character::query()->orderByDesc('updated_at')->get(['slug', 'updated_at']);
        foreach ($characters as $character) {
            $urls[] = [
                'loc' => URL::to('/danh-sach-tuong/' . $character->slug),
                'lastmod' => optional($character->updated_at)->toAtomString(),
                'changefreq' => 'weekly',
            ];
        }

        $content = view('sitemap.xml', ['urls' => $urls])->render();

        return response($content, 200, [
            'Content-Type' => 'application/xml',
        ]);
    }
}
