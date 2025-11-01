<?php

use App\Http\Controllers\Account\AccountProfileController;
use App\Http\Controllers\Account\GiftcodeController;
use App\Http\Controllers\Account\WalletHistoryController;
use App\Http\Controllers\Account\WalletTopUpController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Web\EventController;
use App\Http\Controllers\Web\HomeController;
use App\Http\Controllers\Web\PostController;
use App\Http\Controllers\Web\CharacterController;
use App\Http\Controllers\Web\DevilFruitController;
use Illuminate\Support\Facades\Route;

Route::redirect('/id/dang-nhap', '/dang-nhap')->name('legacy.id.login');
Route::redirect('/id/dang-ky', '/dang-ky')->name('legacy.id.register');
Route::redirect('/id/quen-mat-khau', '/quen-mat-khau')->name('legacy.id.password.request');
Route::get('/id/dat-lai-mat-khau/{token}', function (string $token) {
    return redirect()->to('/dat-lai-mat-khau/'.$token);
})->name('legacy.id.password.reset');

Route::get('/', HomeController::class)->name('home');
Route::get('/landing', [HomeController::class, 'landing'])->name('landing');
Route::get('/danh-sach-tuong', [CharacterController::class, 'index'])->name('characters.index');
Route::get('/danh-sach-tuong/{character:slug}', [CharacterController::class, 'show'])->name('characters.show');
Route::get('/trai-ac-quy', [DevilFruitController::class, 'index'])->name('devilfruits.index');
Route::get('/trai-dung-hop', [DevilFruitController::class, 'fusion'])->name('devilfruits.fusion');

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
