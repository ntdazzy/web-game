<?php

namespace Database\Seeders;

use App\Models\Character;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class CharactersSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/characters.json');

        if (! File::exists($path)) {
            $this->command?->warn('characters.json not found, skipping CharactersSeeder.');

            return;
        }

        $characters = json_decode(File::get($path), true, flags: JSON_THROW_ON_ERROR);

        foreach ($characters as $characterData) {
            $payload = [
                'name' => Arr::get($characterData, 'name', 'Nhân vật chưa đặt tên'),
                'slug' => Arr::get($characterData, 'slug'),
                'description' => Arr::get($characterData, 'description'),
                'power' => Arr::get($characterData, 'power'),
                'thumbnail' => Arr::get($characterData, 'thumbnail'),
            ];

            if (empty($payload['slug'])) {
                $payload['slug'] = Str::slug($payload['name']);
            }

            Character::updateOrCreate(['slug' => $payload['slug']], $payload);
        }
    }
}
