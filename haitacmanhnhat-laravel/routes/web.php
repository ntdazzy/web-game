<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\CharacterController;
use App\Http\Controllers\LegacyContentController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteMapController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'home'])->name('home');
Route::get('/tin-tuc', [PostController::class, 'indexTinTuc'])->name('tintuc.index');
Route::get('/su-kien', [PostController::class, 'indexSuKien'])->name('sukien.index');
Route::get('/update', [PostController::class, 'indexUpdate'])->name('update.index');
Route::get('/tin-tuc/{post}-{slug?}', [PostController::class, 'show'])
    ->whereNumber('post')
    ->name('post.show');
Route::get('/tin-tuc/{slug}', function (string $slug) {
    return redirect()->route('tintuc.index', ['q' => str_replace('-', ' ', $slug)]);
})->where('slug', '[A-Za-z0-9\\-]+')->name('tintuc.legacy');

Route::prefix('id')->name('account.')->group(function () {
    Route::get('/', [AccountController::class, 'overview'])->name('overview');
    Route::get('/doi-mat-khau', [AccountController::class, 'changePassword'])->name('change-password');
    Route::get('/doi-email', [AccountController::class, 'changeEmail'])->name('change-email');
    Route::get('/cap-nhat-tai-khoan', [AccountController::class, 'updateProfile'])->name('update-profile');
    Route::get('/cap-nhat-email', [AccountController::class, 'updateEmail'])->name('update-email');
    Route::get('/dang-nhap', [AccountController::class, 'login'])->name('login');
    Route::get('/dang-ky', [AccountController::class, 'register'])->name('register');
    Route::get('/quen-mat-khau', [AccountController::class, 'forgotPassword'])->name('forgot-password');
    Route::get('/dat-lai-mat-khau', [AccountController::class, 'resetPassword'])->name('reset-password');
});

Route::get('/danh-sach-tuong', [CharacterController::class, 'index'])->name('characters.index');
Route::get('/danh-sach-tuong/{slug}', [CharacterController::class, 'show'])->name('character.show');

Route::get('/nap-tien-vao-vi', [PaymentController::class, 'wallet'])->name('payments.wallet');
Route::get('/qua-nap-web', [PaymentController::class, 'packages'])->name('payments.packages');
Route::get('/nap-tu-vi-vao-game', [PaymentController::class, 'convert'])->name('payments.convert');
Route::get('/lich-su-nap', [PaymentController::class, 'history'])->name('payments.history');
Route::get('/giftcode', function () {
    return redirect()->route('tintuc.index', ['q' => 'giftcode']);
})->name('giftcode');

Route::get('/trai-ac-quy', [LegacyContentController::class, 'devilFruits'])->name('legacy.devil-fruits');
Route::get('/trai-dung-hop', [LegacyContentController::class, 'fusionFruits'])->name('legacy.fusion-fruits');

Route::get('/sitemap.xml', [SiteMapController::class, 'index'])->name('sitemap');
Route::get('/robots.txt', function () {
    return response()->view('robots')->header('Content-Type', 'text/plain');
})->name('robots');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::view('/dashboard', 'dashboard')->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::permanentRedirect('{any}.html', '/{any}')->where('any', '.*');

require __DIR__ . '/auth.php';
