<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Vite;

class Character extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'title',
        'image',
        'image_alt',
        'damage_type',
        'rarity',
        'sort_order',
        'metadata',
    ];

    protected $casts = [
        'metadata' => 'array',
    ];

    public function getImageUrlAttribute(): ?string
    {
        if (! $this->image) {
            return null;
        }

        if (preg_match('#^https?://#i', $this->image)) {
            return $this->image;
        }

        return Vite::asset($this->image);
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}
