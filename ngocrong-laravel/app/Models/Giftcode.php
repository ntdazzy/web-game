<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Giftcode extends Model
{
    use HasFactory;

    protected $fillable = [
        'code',
        'type',
        'payload',
        'expired_at',
        'max_uses',
        'used_count',
        'status',
    ];

    protected $casts = [
        'payload' => 'array',
        'expired_at' => 'datetime',
    ];

    public function isExpired(): bool
    {
        return optional($this->expired_at)->isPast() ?? false;
    }

    public function hasAvailability(): bool
    {
        return $this->used_count < $this->max_uses;
    }
}
