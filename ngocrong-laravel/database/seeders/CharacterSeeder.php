<?php

namespace Database\Seeders;

use App\Models\Character;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dataPath = database_path('data/characters.json');

        if (! File::exists($dataPath)) {
            $this->command?->warn('characters.json not found; skipping CharacterSeeder.');
            return;
        }

        $characters = json_decode(File::get($dataPath), true, 512, JSON_THROW_ON_ERROR);

        $damageTypeMap = [
            's0' => 'all',
            's1' => 'physical',
            's2' => 'ultimate',
            's3' => 'magic',
        ];

        foreach ($characters as $character) {
            $rawType = Arr::get($character, 'damage_type');
            $imagePath = Arr::get($character, 'image');
            $decodedImagePath = $imagePath ? urldecode($imagePath) : null;

            Character::updateOrCreate(
                ['slug' => Arr::get($character, 'slug')],
                [
                    'name' => Arr::get($character, 'name'),
                    'image' => $decodedImagePath,
                    'image_alt' => Arr::get($character, 'name'),
                    'damage_type' => Arr::get($damageTypeMap, $rawType, $rawType),
                    'sort_order' => Arr::get($character, 'sort_order', 0),
                    'metadata' => [
                        'raw_damage_type' => $rawType,
                    ],
                ],
            );
        }
    }
}
