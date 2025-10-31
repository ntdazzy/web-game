<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class TopupBonus extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'code',
        'category',
        'description',
        'rewards',
        'metadata',
        'sort_order',
        'status',
    ];

    protected $casts = [
        'rewards' => 'array',
        'metadata' => 'array',
    ];

    protected static function booted(): void
    {
        static::creating(function (TopupBonus $bonus): void {
            if (blank($bonus->slug) && filled($bonus->name)) {
                $bonus->slug = Str::slug($bonus->name);
            }
        });
    }
}
