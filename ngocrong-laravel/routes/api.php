<?php

use App\Http\Controllers\Api\EventController;
use App\Http\Controllers\Api\GiftcodeController;
use App\Http\Controllers\Api\PostController;
use App\Http\Controllers\Api\WalletTransactionController;
use App\Http\Controllers\Api\CharacterController;
use App\Http\Controllers\Api\DevilFruitController;
use App\Http\Controllers\Api\TopupBonusController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function (): void {
    Route::apiResource('posts', PostController::class)->only(['index', 'show']);
    Route::apiResource('events', EventController::class)->only(['index', 'show']);
    Route::apiResource('characters', CharacterController::class)->only(['index', 'show']);
    Route::apiResource('devil-fruits', DevilFruitController::class)->only(['index', 'show']);
    Route::apiResource('topup-bonuses', TopupBonusController::class)->only(['index', 'show']);

    Route::middleware('auth:sanctum')->group(function (): void {
        Route::apiResource('wallet-transactions', WalletTransactionController::class)->only(['index', 'show']);
        Route::post('giftcodes/redeem', [GiftcodeController::class, 'redeem'])->name('giftcodes.redeem');
    });
});
