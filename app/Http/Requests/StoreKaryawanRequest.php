<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Override;

class StoreKaryawanRequest extends FormRequest
{
  /**
   * Determine if the user is authorized to make this request.
   */
  public function authorize(): bool
  {
    return true;
  }

  /**
   * Get the validation rules that apply to the request.
   *
   * @return array<string, ValidationRule|array<mixed>|string>
   */
  public function rules(): array
  {
    return [
      'nik' => ['required', 'string', 'max:20', 'unique:karyawans,nik'],
      'nama_lengkap' => ['required', 'string', 'max:100'],
      'jenis_kelamin' => ['required', 'in:L,P'],
      'tempat_lahir' => ['required', 'string', 'max:100'],
      'tanggal_lahir' => ['required', 'date'],
      'no_telepon' => ['required', 'string', 'max:20'],
      'email' => ['required', 'email', 'max:100'],
      'jabatan' => ['required', 'string', 'max:100'],
      'tanggal_masuk' => ['required', 'date'],

      'provinsi_id' => ['required', 'string', 'max:10'],
      'kabupaten_id' => ['required', 'string', 'max:10'],
      'kecamatan_id' => ['required', 'string', 'max:10'],
      'desa_id' => ['required', 'string', 'max:15'],
      'alamat_detail' => ['required', 'string'],
    ];
  }

  #[Override]
  public function messages()
  {
    return [
      'nik.required' => 'NIK wajib diisi.',
      'nik.unique' => 'NIK ini sudah terdaftar untuk karyawan lain. Gunakan NIK yang berbeda.',
      'nama_lengkap.required' => 'Nama lengkap wajib diisi.',
      'jenis_kelamin.required' => 'Jenis kelamin wajib dipilih.',
      'tempat_lahir.required' => 'Tempat lahir wajib diisi.',
      'tanggal_lahir.required' => 'Tanggal lahir wajib diisi.',
      'no_telepon.required' => 'No telepon wajib diisi.',
      'email.email' => 'Format email tidak valid.',
      'jabatan.required' => 'Jabatan wajib diisi.',
      'tanggal_masuk.required' => 'Tanggal masuk wajib diisi.',

      'provinsi_id.required' => 'Provinsi wajib dipilih.',
      'kabupaten_id.required' => 'Kabupaten/Kota wajib dipilih.',
      'kecamatan_id.required' => 'Kecamatan wajib dipilih.',
      'desa_id.required' => 'Desa/Kelurahan wajib dipilih.',
      'alamat_detail.required' => 'Alamat detail wajib dipilih.',
    ];
  }
}
