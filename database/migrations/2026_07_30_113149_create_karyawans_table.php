<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema::create('karyawans', function (Blueprint $table) {
      $table->id();
      $table->string('nik', 20)->unique();
      $table->string('nama_lengkap', 100);
      $table->enum('jenis_kelamin', ['L', 'P']);
      $table->string('tempat_lahir', 100);
      $table->date('tanggal_lahir');
      $table->string('no_telepon', 20);
      $table->string('email', 100);
      $table->string('jabatan', 100);
      $table->date('tanggal_masuk');
      $table->string('provinsi_id', 10);
      $table->string('provinsi_nama', 100);
      $table->string('kabupaten_id', 10);
      $table->string('kabupaten_nama', 100);
      $table->string('kecamatan_id', 10);
      $table->string('kecamatan_nama', 100);
      $table->string('desa_id', 15);
      $table->string('desa_nama', 100);
      $table->text('alamat_detail');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema::dropIfExists('karyawans');
  }
};
