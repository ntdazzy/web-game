<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Character extends Model
{
    use HasFactory;

    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'slug',
        'description',
        'power',
        'thumbnail',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'power' => 'integer',
    ];

    public static function booted(): void
    {
        static::saving(function (Character $character): void {
            if (empty($character->slug)) {
                $character->slug = Str::slug($character->name);
            }
        });
    }
}
