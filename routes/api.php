<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('login', [AuthController::class, 'login'])->name('login');
Route::post('register', [AuthController::class, 'register'])->name('register');

/**
 * Authenticated routes
 */
Route::group(['middleware' => ['auth:sanctum']], function () {
    /**
     * User
     */
    Route::get('user', [AuthController::class, 'user'])->name('user');
    Route::get('logout', [AuthController::class, 'logout'])->name('logout');
});
