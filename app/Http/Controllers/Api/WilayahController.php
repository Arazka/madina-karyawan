<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Http;

class WilayahController extends Controller
{
  public function getProvinces()
  {
    try {
      $provinces = Http::get("https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json");

      return response()->json([
        'status' => true,
        'message' => 'Data provinsi berhasil didapatkan',
        'data' => $provinces->json()
      ], 200);
    } catch (\Throwable $th) {
      return response()->json([
        'status' => false,
        'message' => 'Gagal memuat data provinsi'
      ], 500);
    }
  }

  public function getProvinceById(string $provinceId)
  {
    try {
      $province = Http::get("https://emsifa.github.io/api-wilayah-indonesia/api/province/$provinceId.json");

      return $province->json();
    } catch (\Throwable $th) {
      return response()->json([
        'status' => false,
        'message' => 'Gagal memuat data provinsi'
      ], 500);
    }
  }

  public function getRegencies(string $provinceId)
  {
    try {
      $regencies = Http::get("https://emsifa.github.io/api-wilayah-indonesia/api/regencies/$provinceId.json");

      return response()->json([
        'status' => true,
        'message' => 'Data kabupaten/kota berhasil didapatkan',
        'data' => $regencies->json()
      ], 200);
    } catch (\Throwable $th) {
      return response()->json([
        'status' => false,
        'message' => 'Gagal memuat data kabupaten/kota'
      ], 500);
    }
  }

  public function getRegencyById(string $regencyId)
  {
    try {
      $regency = Http::get("https://emsifa.github.io/api-wilayah-indonesia/api/regency/$regencyId.json");

      return $regency->json();
    } catch (\Throwable $th) {
      return response()->json([
        'status' => false,
        'message' => 'Gagal memuat data kabupaten/kota'
      ], 500);
    }
  }

  public function getDistricts(string $regencyId)
  {
    try {
      $districts = Http::get("https://emsifa.github.io/api-wilayah-indonesia/api/districts/$regencyId.json");

      return response()->json([
        'status' => true,
        'message' => 'Data kecamatan berhasil didapatkan',
        'data' => $districts->json()
      ], 200);
    } catch (\Throwable $th) {
      return response()->json([
        'status' => false,
        'message' => 'Gagal memuat data kecamatan'
      ], 500);
    }
  }

  public function getDistrictById(string $districtId)
  {
    try {
      $district = Http::get("https://emsifa.github.io/api-wilayah-indonesia/api/district/$districtId.json");

      return $district->json();
    } catch (\Throwable $th) {
      return response()->json([
        'status' => false,
        'message' => 'Gagal memuat data kecamatan'
      ], 500);
    }
  }

  public function getVillages(string $districtId)
  {
    try {
      $villages = Http::get("https://emsifa.github.io/api-wilayah-indonesia/api/villages/$districtId.json");

      return response()->json([
        'status' => true,
        'message' => 'Data kelurahan/desa berhasil didapatkan',
        'data' => $villages->json()
      ], 200);
    } catch (\Throwable $th) {
      return response()->json([
        'status' => false,
        'message' => 'Gagal memuat data kelurahan/desa'
      ], 500);
    }
  }

  public function getVillageById(string $villageId)
  {
    try {
      $village = Http::get("https://emsifa.github.io/api-wilayah-indonesia/api/village/$villageId.json");

      return $village->json();
    } catch (\Throwable $th) {
      return response()->json([
        'status' => false,
        'message' => 'Gagal memuat data kelurahan/desa'
      ], 500);
    }
  }
}
