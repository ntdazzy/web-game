<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

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
            $payload = [
                'title' => Arr::get($postData, 'title', 'Bài viết chưa đặt tên'),
                'slug' => Arr::get($postData, 'slug'),
                'content' => Arr::get($postData, 'content', ''),
                'category' => Arr::get($postData, 'category', 'tin-tuc'),
                'thumbnail' => Arr::get($postData, 'thumbnail'),
                'published_at' => $this->castDate(Arr::get($postData, 'published_at')),
            ];

            if (empty($payload['slug'])) {
                $payload['slug'] = Str::slug($payload['title']);
            }

            Post::updateOrCreate(['slug' => $payload['slug']], $payload);
        }
    }

    private function castDate(?string $value): ?Carbon
    {
        return $value ? Carbon::parse($value) : null;
    }
}
