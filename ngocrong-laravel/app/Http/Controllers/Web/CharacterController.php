<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Character;
use Illuminate\Support\Facades\Vite;
use Illuminate\View\View;

class CharacterController extends Controller
{
    /**
     * @var array<string, string>
     */
    protected array $damageTypeLabels = [
        'all' => 'Tất cả',
        'physical' => 'Vật công',
        'ultimate' => 'Tuyệt chiêu',
        'magic' => 'Ma công',
    ];

    public function index(): View
    {
        $characters = Character::query()
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (Character $character) => $this->formatCharacter($character));

        return view('pages.characters.index', [
            'characters' => $characters,
        ]);
    }

    public function show(Character $character): View
    {
        $characters = Character::query()
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (Character $item) => $this->formatCharacter($item, $character->id));

        $damageType = $character->damage_type ? ($this->damageTypeLabels[$character->damage_type] ?? null) : null;

        return view('pages.characters.show', [
            'character' => $character,
            'damageTypeLabel' => $damageType,
            'characters' => $characters,
        ]);
    }

    /**
     * @return array<string, mixed>
     */
    protected function formatCharacter(Character $character, ?int $activeId = null): array
    {
        $rawType = data_get($character->metadata, 'raw_damage_type', $character->damage_type ?? 's0');

        return [
            'id' => $character->id,
            'name' => $character->name,
            'slug' => $character->slug,
            'image' => $character->image_url ?? Vite::asset('resources/assets/images/bg-preview-hero.png'),
            'damage_type' => $rawType,
            'is_active' => $activeId !== null && $activeId === $character->id,
        ];
    }
}
