<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Player extends Model
{
    use HasFactory;

    protected $table = 'player';

    public $timestamps = false;

    protected $fillable = [
        'account_id',
        'name',
        'power',
        'gender',
        'head',
        'have_tennis_space_ship',
        'clan_id',
        'server',
    ];

    protected $casts = [
        'power' => 'integer',
        'have_tennis_space_ship' => 'boolean',
    ];

    public function account(): BelongsTo
    {
        return $this->belongsTo(Account::class);
    }
}
