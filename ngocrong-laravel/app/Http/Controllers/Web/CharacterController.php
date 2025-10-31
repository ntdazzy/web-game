<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Character;
use Illuminate\Support\Facades\Vite;
use Illuminate\View\View;

class CharacterController extends Controller
{
    public function index(): View
    {
        $characters = Character::query()
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (Character $character) => [
                'name' => $character->name,
                'slug' => $character->slug,
                'image' => $character->image_url ?? Vite::asset('resources/assets/images/bg-preview-hero.png'),
                'damage_type' => data_get($character->metadata, 'raw_damage_type', $character->damage_type ?? 's0'),
            ]);

        return view('pages.characters.index', [
            'characters' => $characters,
        ]);
    }
}
