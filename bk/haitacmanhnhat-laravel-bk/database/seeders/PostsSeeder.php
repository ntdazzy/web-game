<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\File;

class PostsSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/posts.json');

        if (! File::exists($path)) {
            $this->command?->warn('posts.json not found, skipping PostsSeeder.');

            return;
        }

        $posts = json_decode(File::get($path), true, flags: JSON_THROW_ON_ERROR);

        foreach ($posts as $postData) {
            $title = Arr::get($postData, 'title', 'Bài viết chưa đặt tên');
            $createdAt = $this->castDate(Arr::get($postData, 'published_at')) ?? now();

            $payload = [
                'tieude' => $title,
                'noidung' => Arr::get($postData, 'content', ''),
                'username' => Arr::get($postData, 'username', 'admin'),
                'created_at' => $createdAt,
                'theloai' => $this->resolveCategory(Arr::get($postData, 'category', 'tin-tuc')),
                'ghimbai' => (int) Arr::get($postData, 'pinned', 0),
                'image' => Arr::get($postData, 'thumbnail'),
                'trangthai' => 0,
                'tinhtrang' => 0,
            ];

            Post::updateOrCreate([
                'tieude' => $payload['tieude'],
                'created_at' => $payload['created_at'],
            ], $payload);
        }
    }

    private function castDate(?string $value): ?Carbon
    {
        return $value ? Carbon::parse($value) : null;
    }

    private function resolveCategory(string $slug): int
    {
        $map = config('posts.categories', [
            'tin-tuc' => 0,
            'su-kien' => 1,
            'update' => 2,
        ]);

        return $map[$slug] ?? ($map['tin-tuc'] ?? 0);
    }
}
