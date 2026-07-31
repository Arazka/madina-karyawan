<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Api\WilayahController;
use App\Http\Requests\StoreKaryawanRequest;
use App\Http\Requests\UpdateKaryawanRequest;
use App\Models\Karyawan;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KaryawanController extends Controller
{
  protected WilayahController $wilayahController;

  public function __construct(WilayahController $wilayahController)
  {
    $this->wilayahController = $wilayahController;
  }

  /**
   * Display a listing of the resource.
   */
  public function index(Request $request)
  {
    $karyawans = Karyawan::latest()->paginate(7);

    return Inertia::render('karyawan/index', [
      'karyawans' => $karyawans,
      'filters' => $request->only('search'),
    ]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return Inertia::render('karyawan/create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreKaryawanRequest $request)
  {
    // dd($request);
    $data = $request->validated();

    $province = $this->wilayahController->getProvinceById($data['provinsi_id']);
    $regency = $this->wilayahController->getRegencyById($data['kabupaten_id']);
    $district = $this->wilayahController->getDistrictById($data['kecamatan_id']);
    $village = $this->wilayahController->getVillageById($data['desa_id']);

    $data['provinsi_nama'] = $province['name'];
    $data['kabupaten_nama'] = $regency['name'];
    $data['kecamatan_nama'] = $district['name'];
    $data['desa_nama'] = $village['name'];

    Karyawan::create($data);

    Inertia::flash('toast', ['type' => 'success', 'message' => __('Karyawan berhasil ditambahkan.')]);
    return to_route('karyawan.index');
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $karyawan = Karyawan::findOrFail($id);

    return Inertia::render('karyawan/show', [
      'karyawan' => $karyawan
    ]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    $karyawan = Karyawan::findOrFail($id);

    return Inertia::render('karyawan/edit', [
      'karyawan' => $karyawan
    ]);
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateKaryawanRequest $request, string $id)
  {
    $karyawan = Karyawan::findOrFail($id);
    $data = $request->validated();

    $province = $this->wilayahController->getProvinceById($data['provinsi_id']);
    $regency = $this->wilayahController->getRegencyById($data['kabupaten_id']);
    $district = $this->wilayahController->getDistrictById($data['kecamatan_id']);
    $village = $this->wilayahController->getVillageById($data['desa_id']);

    $data['provinsi_nama'] = $province['name'];
    $data['kabupaten_nama'] = $regency['name'];
    $data['kecamatan_nama'] = $district['name'];
    $data['desa_nama'] = $village['name'];

    $karyawan->update($data);

    Inertia::flash('toast', ['type' => 'success', 'message' => __('Karyawan berhasil diupdate.')]);
    return to_route('karyawan.index');
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $karyawan = Karyawan::findOrFail($id);
    $karyawan->delete();

    Inertia::flash('toast', ['type' => 'success', 'message' => __('Karyawan berhasil dihapus.')]);
    return back();
  }
}
