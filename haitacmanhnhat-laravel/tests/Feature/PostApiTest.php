<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PostApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_it_returns_paginated_posts(): void
    {
        Post::factory()->count(3)->create();

        $response = $this->getJson(route('api.posts.index'));

        $response->assertOk()
            ->assertJsonStructure([
                'data',
                'links',
                'meta',
            ])
            ->assertJsonCount(3, 'data');
    }
}
