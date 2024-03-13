<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/register', [RegisteredUserController::class, 'store'])
    ->name('register');
Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->name('login');
Route::prefix('/')->group(function () {
    Route::get('/dashboard', [HomeController::class, 'home'])
        ->name('home.index');
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();

});

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
    Route::post('/logout', [AuthController::class, 'destroy'])
        ->name('logout');
});
