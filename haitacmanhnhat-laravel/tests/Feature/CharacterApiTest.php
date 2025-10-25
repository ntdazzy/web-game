<?php

namespace Tests\Feature;

use App\Models\Character;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CharacterApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_returns_paginated_characters(): void
    {
        Character::factory()->count(2)->create();

        $response = $this->getJson(route('api.characters.index'));

        $response->assertOk()
            ->assertJsonStructure([
                'data',
                'links',
                'meta',
            ])
            ->assertJsonCount(2, 'data');
    }
}
