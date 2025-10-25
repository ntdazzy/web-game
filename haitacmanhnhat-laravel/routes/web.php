<?php

use App\Http\Controllers\CharacterController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SiteMapController;
use App\Http\Controllers\VnPayController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PostController::class, 'home'])->name('home');
Route::get('/tin-tuc', [PostController::class, 'indexTinTuc'])->name('tintuc.index');
Route::get('/su-kien', [PostController::class, 'indexSuKien'])->name('sukien.index');
Route::get('/update', [PostController::class, 'indexUpdate'])->name('update.index');
Route::get('/tin-tuc/{slug}', [PostController::class, 'show'])->name('post.show');

Route::get('/danh-sach-tuong', [CharacterController::class, 'index'])->name('characters.index');
Route::get('/danh-sach-tuong/{slug}', [CharacterController::class, 'show'])->name('character.show');

Route::view('/payments', 'payments.index')->name('payment.index');
Route::get('/payments/stripe/checkout', [PaymentController::class, 'checkout'])->name('payment.stripe.checkout');
Route::get('/payments/stripe/success', [PaymentController::class, 'success'])->name('payment.success');
Route::get('/payments/stripe/cancel', [PaymentController::class, 'cancel'])->name('payment.cancel');

Route::post('/payments/vnpay', [VnPayController::class, 'purchase'])->name('payment.vnpay');
Route::get('/payments/vnpay/return', [VnPayController::class, 'return'])->name('payment.vnpayReturn');

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
