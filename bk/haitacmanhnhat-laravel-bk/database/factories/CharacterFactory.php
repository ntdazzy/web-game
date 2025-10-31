<?php

namespace Database\Factories;

use App\Models\Character;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<Character>
 */
class CharacterFactory extends Factory
{
    protected $model = Character::class;

    public function definition(): array
    {
        $name = $this->faker->unique()->name();

        return [
            'name' => $name,
            'slug' => Str::slug($name) . '-' . $this->faker->numberBetween(1, 999),
            'description' => $this->faker->paragraph(3),
            'power' => $this->faker->numberBetween(1000, 9999),
            'thumbnail' => null,
        ];
    }
}
