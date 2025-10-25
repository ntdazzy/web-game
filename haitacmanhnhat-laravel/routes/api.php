<?php

use App\Http\Controllers\Api\CharacterApiController;
use App\Http\Controllers\Api\PostApiController;
use Illuminate\Support\Facades\Route;

Route::get('/posts', [PostApiController::class, 'index'])->name('api.posts.index');
Route::get('/characters', [CharacterApiController::class, 'index'])->name('api.characters.index');
