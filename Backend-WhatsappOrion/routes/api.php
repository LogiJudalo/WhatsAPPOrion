<?php

use App\Http\Controllers\ApiIp6Controller;
use App\Http\Controllers\ConfigController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\ClientController;
use Illuminate\Support\Facades\Route;


Route::get('/clients', [ApiIp6Controller::class, 'getClientData']);

Route::prefix('config')->group(function () {
    Route::post('/create', [ConfigController::class, 'store']);
    Route::put('/update/{id}', [ConfigController::class, 'update']);
    Route::get('/delete/{id}', [ConfigController::class, 'delete']);
    Route::get('/list', [ConfigController::class, 'index']);
    Route::get('/search/{id}', [ConfigController::class, 'consultById']);
});

Route::prefix('message')->group(function () {
    Route::post('/create', [MessageController::class, 'store']);
    Route::put('/update/{id}', [MessageController::class, 'update']);
    Route::get('/delete/{id}', [MessageController::class, 'delete']);
    Route::get('/list/{id}', [MessageController::class, 'index']);
    Route::get('/search/{id}', [MessageController::class, 'consultById']);
});

Route::prefix('client')->group(function () {
    Route::post('/create', [ClientController::class, 'store']);
    Route::put('/update/{id}', [ClientController::class, 'update']);
    Route::get('/delete/{id}', [ClientController::class, 'delete']);
    Route::get('/list', [ClientController::class, 'index']);
    Route::get('/search/{id}', [ClientController::class, 'consultById']);
});
