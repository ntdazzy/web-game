<?php

use App\Http\Controllers\Account\AccountProfileController;
use App\Http\Controllers\Account\GiftcodeController;
use App\Http\Controllers\Account\WalletHistoryController;
use App\Http\Controllers\Account\WalletTopUpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\EventController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\PostController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');
Route::get('/landing', [HomeController::class, 'landing'])->name('landing');
Route::view('/danh-sach-tuong', 'pages.heroes.index')->name('heroes.index');
Route::view('/trai-ac-quy', 'pages.fruits.index')->name('fruits.index');
Route::view('/trai-dung-hop', 'pages.fruits.fusion')->name('fruits.fusion');

Route::prefix('tin-tuc')
    ->name('news.')
    ->group(function () {
        Route::get('/', [PostController::class, 'index'])->name('index');
        Route::get('/{post:slug}', [PostController::class, 'show'])->name('show');
    });

Route::prefix('su-kien')
    ->name('events.')
    ->group(function () {
        Route::get('/', [EventController::class, 'index'])->name('index');
        Route::get('/{event:slug}', [EventController::class, 'show'])->name('show');
    });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/tai-khoan', [AccountProfileController::class, 'index'])->name('account.profile');
    Route::get('/giftcode', [GiftcodeController::class, 'index'])->name('giftcode.index');
    Route::get('/nap-web', [WalletTopUpController::class, 'create'])->name('wallet.topup');
    Route::redirect('/qua-nap-web', '/nap-web')->name('wallet.topup.legacy');
    Route::get('/lich-su-giao-dich', [WalletHistoryController::class, 'index'])->name('wallet.history');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
