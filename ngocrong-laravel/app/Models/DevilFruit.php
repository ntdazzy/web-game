<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Vite;

class DevilFruit extends Model
{
    use HasFactory;

    protected $fillable = [
        'legacy_id',
        'uid',
        'name',
        'slug',
        'category',
        'effect',
        'quality',
        'type',
        'status',
        'sort_order',
        'image',
        'description',
        'properties',
        'metadata',
    ];

    protected $casts = [
        'properties' => 'array',
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

        if (str_starts_with($this->image, 'resources/')) {
            return Vite::asset($this->image);
        }

        $base = rtrim(config('app.download_base_url', 'https://dl.haitacmanhnhat.vn/tdt'), '/');

        return $base . '/' . ltrim($this->image, '/');
    }

    public function getRouteKeyName(): string
    {
        return 'slug';
    }
}

