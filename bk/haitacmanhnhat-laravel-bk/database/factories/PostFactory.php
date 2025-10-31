<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Post>
 */
class PostFactory extends Factory
{
    protected $model = Post::class;

    public function definition(): array
    {
        $title = $this->faker->sentence(6);

        return [
            'tieude' => $title,
            'noidung' => '<p>' . implode('</p><p>', $this->faker->paragraphs(3)) . '</p>',
            'username' => $this->faker->userName(),
            'created_at' => now()->subDays($this->faker->numberBetween(0, 10)),
            'theloai' => $this->faker->randomElement(array_values(config('posts.categories', [0, 1, 2]))),
            'ghimbai' => (int) $this->faker->boolean(10),
            'image' => null,
            'trangthai' => 0,
            'tinhtrang' => 0,
        ];
    }
}
