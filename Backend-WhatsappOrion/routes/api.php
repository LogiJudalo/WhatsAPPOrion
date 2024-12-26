<?php

use App\Http\Controllers\ApiIp6Controller;
use App\Http\Controllers\ConfigController;
use Illuminate\Support\Facades\Route;


Route::get('/clients', [ApiIp6Controller::class, 'getClientData']);

Route::post('/create-config', [ConfigController::class, 'store']);

// Route::get('/config/aes', [ConfigController::class, 'getENV']);

// Route::get('/ordenes/{id}', [OrdenController::class, 'show']);

// Route::post('/ordenes', [OrdenController::class, 'store']);

// Route::put('/ordenes/{id}', [OrdenController::class, 'update']);

// Route::patch('/ordenes/{id}', [OrdenController::class, 'updatePartial']);

// Route::delete('/ordenes/{id}', [OrdenController::class, 'destroy']);

// Route::get('/ordenes/pdf/{id}', [pdfController::class, 'generarPdf']);