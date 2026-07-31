<?php

use App\Http\Controllers\Api\WilayahController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');


Route::get('/provinces', [WilayahController::class, 'getProvinces']);
Route::get('/regencies/{provinceId}', [WilayahController::class, 'getRegencies']);
Route::get('/districts/{regencyId}', [WilayahController::class, 'getDistricts']);
Route::get('/villages/{districtId}', [WilayahController::class, 'getVillages']);

Route::get('/province/{provinceId}', [WilayahController::class, 'getProvinceById']);
Route::get('/regency/{regencyId}', [WilayahController::class, 'getRegencyById']);
Route::get('/district/{districtId}', [WilayahController::class, 'getDistrictById']);
Route::get('/village/{villageId}', [WilayahController::class, 'geVillageById']);
