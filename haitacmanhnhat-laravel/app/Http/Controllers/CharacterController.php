<?php

namespace App\Http\Controllers;

use App\Models\Character;
use Illuminate\Contracts\View\View;

class CharacterController extends Controller
{
    public function index(): View
    {
        $characters = Character::query()
            ->orderBy('name')
            ->paginate(12);

        return view('tuong.index', [
            'characters' => $characters,
        ]);
    }

    public function show(string $slug): View
    {
        $character = Character::query()
            ->where('slug', $slug)
            ->firstOrFail();

        return view('tuong.show', [
            'character' => $character,
        ]);
    }
}
