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

    public function getHeroIdAttribute(): ?int
    {
        $value = data_get($this->metadata, 'hero_id');

        return is_numeric($value) ? (int) $value : null;
    }

    /**
     * @return array<string, mixed>|null
     */
    public function getDetailAttribute(): ?array
    {
        $detail = data_get($this->metadata, 'detail');

        return is_array($detail) ? $detail : null;
    }

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
