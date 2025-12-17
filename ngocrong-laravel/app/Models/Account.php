<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Account extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $table = 'account';

    public const CREATED_AT = 'create_time';
    public const UPDATED_AT = 'update_time';

    protected $fillable = [
        'username',
        'password',
        'email',
        'full_name',
        'gender',
        'birthday',
        'phone',
        'gmail',
        'ban',
        'active',
        'is_admin',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'create_time' => 'datetime',
        'update_time' => 'datetime',
        'is_admin' => 'boolean',
        'birthday' => 'date',
        'gender' => 'integer',
    ];

    public function getNameAttribute(): string
    {
        return $this->username ?? '';
    }

    public function setPasswordAttribute($value): void
    {
        // Giữ nguyên plain-text theo yêu cầu
        $this->attributes['password'] = (string) $value;
    }

    public function players(): HasMany
    {
        return $this->hasMany(Player::class, 'account_id');
    }

    public function walletTransactions(): HasMany
    {
        return $this->hasMany(WalletTransaction::class, 'account_id');
    }
}
