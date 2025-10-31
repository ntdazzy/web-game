<?php

namespace Database\Seeders;

use App\Models\DevilFruit;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class DevilFruitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dataPath = database_path('data/devilfruits.json');

        if (! File::exists($dataPath)) {
            $this->command?->warn('devilfruits.json not found; skipping DevilFruitSeeder.');
            return;
        }

        $fruits = json_decode(File::get($dataPath), true, 512, JSON_THROW_ON_ERROR);

        foreach ($fruits as $index => $fruit) {
            $name = Arr::get($fruit, 'name');
            $slugSeed = $name.'-'.Arr::get($fruit, 'uid', Arr::get($fruit, 'id'));
            $slug = Str::slug($slugSeed);

            $properties = $this->decodeProperties(Arr::get($fruit, 'property'));
            $description = trim((string) Arr::get($fruit, 'info')) ?: null;

            $imagePath = Arr::get($fruit, 'itemSmall');

            DevilFruit::updateOrCreate(
                ['slug' => $slug],
                [
                    'legacy_id' => Arr::get($fruit, 'id'),
                    'uid' => Arr::get($fruit, 'uid'),
                    'name' => $name,
                    'category' => Arr::get($fruit, 'category', 'standard'),
                    'effect' => Arr::get($fruit, 'effect'),
                    'quality' => Arr::get($fruit, 'quality'),
                    'type' => Arr::get($fruit, 'type'),
                    'status' => Arr::get($fruit, 'status'),
                    'sort_order' => Arr::get($fruit, 'ord', $index + 1),
                    'image' => $imagePath ? urldecode($imagePath) : null,
                    'description' => $description,
                    'properties' => $properties,
                    'metadata' => [
                        'raw_property' => Arr::get($fruit, 'property'),
                    ],
                ],
            );
        }
    }

    private function decodeProperties(mixed $raw): ?array
    {
        if (! $raw) {
            return null;
        }

        if (is_array($raw)) {
            return $raw;
        }

        if (! is_string($raw)) {
            return null;
        }

        try {
            $decoded = json_decode($raw, true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException $exception) {
            $this->command?->warn(sprintf('Failed to decode fruit property: %s', $exception->getMessage()));
            return null;
        }

        return $decoded;
    }
}
