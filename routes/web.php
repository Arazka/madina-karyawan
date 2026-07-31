<?php

use App\Http\Controllers\KaryawanController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
  Route::inertia('dashboard', 'dashboard')->name('dashboard');
  Route::resource('karyawan', KaryawanController::class);
});

require __DIR__ . '/settings.php';
