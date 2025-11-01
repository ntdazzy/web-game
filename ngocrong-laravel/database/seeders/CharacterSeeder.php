<?php

namespace Database\Seeders;

use App\Models\Character;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class CharacterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $dataPath = database_path('data/characters.json');
        $detailMap = $this->loadCharacterDetails();

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
            $slug = Arr::get($character, 'slug');
            $detailMeta = Arr::get($detailMap, $slug);

            $metadata = [
                'raw_damage_type' => $rawType,
            ];

            if ($detailMeta !== null) {
                $metadata['hero_id'] = Arr::get($detailMeta, 'hero_id');
                $metadata['detail'] = $detailMeta;
            }

            Character::updateOrCreate(
                ['slug' => $slug],
                [
                    'name' => Arr::get($character, 'name'),
                    'image' => $decodedImagePath,
                    'image_alt' => Arr::get($character, 'name'),
                    'damage_type' => Arr::get($damageTypeMap, $rawType, $rawType),
                    'sort_order' => Arr::get($character, 'sort_order', 0),
                    'metadata' => $metadata,
                ],
            );
        }
    }

    /**
     * @return array<string, array<string, mixed>>
     */
    protected function loadCharacterDetails(): array
    {
        $detailsPath = database_path('data/character_details.json');

        if (! File::exists($detailsPath)) {
            $this->command?->warn('character_details.json not found; skipping detail enrichment.');
            return [];
        }

        $raw = json_decode(File::get($detailsPath), true, 512, JSON_THROW_ON_ERROR);

        return collect($raw)
            ->mapWithKeys(function (array $detail): array {
                $slug = Arr::get($detail, 'slug');

                if (! $slug) {
                    return [];
                }

                return [$slug => $this->transformDetail($detail)];
            })
            ->filter()
            ->all();
    }

    /**
     * @param  array<string, mixed>  $detail
     * @return array<string, mixed>
     */
    protected function transformDetail(array $detail): array
    {
        $heroId = $this->toInt(Arr::get($detail, 'heroId', Arr::get($detail, 'htid')));

        $talentLevels = collect($detail)
            ->filter(function ($value, $key) {
                return is_string($key)
                    && Str::startsWith($key, 'talentDesc')
                    && $value !== null
                    && $value !== '';
            })
            ->map(function ($value, $key) {
                $level = $this->toInt(Str::after($key, 'talentDesc'));

                return [
                    'level' => $level,
                    'description' => $value,
                ];
            })
            ->filter(fn (array $item) => ($item['level'] ?? 0) > 0 && ! empty($item['description']))
            ->sortBy('level')
            ->values()
            ->all();

        return [
            'hero_id' => $heroId,
            'name' => Arr::get($detail, 'name'),
            'slug' => Arr::get($detail, 'slug'),
            'background' => Arr::get($detail, 'backgroundImg'),
            'sprites' => [
                'stand' => $this->buildSprite($detail, 'stand'),
                'normal' => $this->buildSprite($detail, 'normalAtk'),
                'rage' => $this->buildSprite($detail, 'rageAtk'),
            ],
            'skills' => [
                'normal' => [
                    'name' => Arr::get($detail, 'normalAtkName'),
                    'description' => Arr::get($detail, 'normalAtkDesc'),
                ],
                'rage' => [
                    'name' => Arr::get($detail, 'rageAtkName'),
                    'description' => Arr::get($detail, 'rageAtkDesc'),
                ],
            ],
            'devil_fruit' => [
                'name' => Arr::get($detail, 'devilAppleName'),
                'description' => Arr::get($detail, 'devilAppleDesc'),
            ],
            'talent' => [
                'name' => Arr::get($detail, 'talentName'),
                'levels' => $talentLevels,
            ],
            'margins' => [
                'stand' => $this->buildMargin($detail, 'stand'),
                'normal' => $this->buildMargin($detail, 'normal'),
                'rage' => $this->buildMargin($detail, 'rage'),
            ],
        ];
    }

    /**
     * @param  array<string, mixed>  $detail
     * @return array<string, mixed>
     */
    protected function buildSprite(array $detail, string $prefix): array
    {
        $imageKey = $prefix.'Img';

        return [
            'image' => Arr::get($detail, $imageKey),
            'width' => $this->toInt(Arr::get($detail, $imageKey.'Width')),
            'height' => $this->toInt(Arr::get($detail, $imageKey.'Height')),
        ];
    }

    /**
     * @param  array<string, mixed>  $detail
     * @return array<string, mixed>
     */
    protected function buildMargin(array $detail, string $prefix): array
    {
        return [
            'top' => $this->toFloat(Arr::get($detail, "{$prefix}MarginTop")),
            'left' => $this->toFloat(Arr::get($detail, "{$prefix}MarginLeft")),
        ];
    }

    protected function toInt(mixed $value): ?int
    {
        return is_numeric($value) ? (int) $value : null;
    }

    protected function toFloat(mixed $value): ?float
    {
        return is_numeric($value) ? (float) $value : null;
    }
}
