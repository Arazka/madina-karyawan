<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;

#[Fillable([
  'nik',
  'nama_lengkap',
  'jenis_kelamin',
  'tempat_lahir',
  'tanggal_lahir',
  'no_telepon',
  'email',
  'jabatan',
  'tanggal_masuk',
  'provinsi_id',
  'provinsi_nama',
  'kabupaten_id',
  'kabupaten_nama',
  'kecamatan_id',
  'kecamatan_nama',
  'desa_id',
  'desa_nama',
  'alamat_detail',
])]

class Karyawan extends Model
{
  //
}
