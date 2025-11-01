<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Character;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
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

    public function detail(Request $request): JsonResponse
    {
        $heroId = $request->input('heroId');
        $heroSlug = (string) $request->input('heroSlug', '');

        $query = Character::query();

        if (is_numeric($heroId)) {
            $query->where('metadata->hero_id', (int) $heroId);
        }

        if ($heroSlug !== '') {
            $query->where('slug', $heroSlug);
        }

        $character = $query->first();

        if (! $character?->detail) {
            return response()->json([], 404);
        }

        $detail = $character->detail;
        $payload = [
            'name' => Arr::get($detail, 'name', $character->name),
            'htid' => (string) ($character->hero_id ?? Arr::get($detail, 'hero_id')),
            'slug' => $character->slug,
            'backgroundImg' => Arr::get($detail, 'background'),
            'standImg' => Arr::get($detail, 'sprites.stand.image'),
            'standImgWidth' => Arr::get($detail, 'sprites.stand.width'),
            'standImgHeight' => Arr::get($detail, 'sprites.stand.height'),
            'normalAtkImg' => Arr::get($detail, 'sprites.normal.image'),
            'normalAtkImgWidth' => Arr::get($detail, 'sprites.normal.width'),
            'normalAtkImgHeight' => Arr::get($detail, 'sprites.normal.height'),
            'normalAtkName' => Arr::get($detail, 'skills.normal.name'),
            'normalAtkDesc' => Arr::get($detail, 'skills.normal.description'),
            'rageAtkImg' => Arr::get($detail, 'sprites.rage.image'),
            'rageAtkImgWidth' => Arr::get($detail, 'sprites.rage.width'),
            'rageAtkImgHeight' => Arr::get($detail, 'sprites.rage.height'),
            'rageAtkName' => Arr::get($detail, 'skills.rage.name'),
            'rageAtkDesc' => Arr::get($detail, 'skills.rage.description'),
            'talentName' => Arr::get($detail, 'talent.name'),
            'devilAppleName' => Arr::get($detail, 'devil_fruit.name'),
            'devilAppleDesc' => Arr::get($detail, 'devil_fruit.description'),
            'standMarginTop' => Arr::get($detail, 'margins.stand.top'),
            'standMarginLeft' => Arr::get($detail, 'margins.stand.left'),
            'normalMarginTop' => Arr::get($detail, 'margins.normal.top'),
            'normalMarginLeft' => Arr::get($detail, 'margins.normal.left'),
            'rageMarginTop' => Arr::get($detail, 'margins.rage.top'),
            'rageMarginLeft' => Arr::get($detail, 'margins.rage.left'),
            'status' => 1,
        ];

        foreach (Arr::get($detail, 'talent.levels', []) as $talentLevel) {
            $level = Arr::get($talentLevel, 'level');
            $description = Arr::get($talentLevel, 'description');

            if (is_numeric($level) && $description) {
                $payload['talentDesc'.(int) $level] = $description;
            }
        }

        return response()->json($payload);
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
            'hero_id' => $character->hero_id,
        ];
    }
}
