# Sistem Manajemen Data Karyawan

Aplikasi manajemen data karyawan berbasis web yang dibangun menggunakan **Laravel**, **Inertia.js**, **React**, dan **TypeScript**.

Aplikasi ini menyediakan fitur CRUD data karyawan dengan integrasi API wilayah Indonesia untuk pengisian alamat secara bertingkat mulai dari provinsi, kabupaten/kota, kecamatan, hingga desa/kelurahan.

## Tech Stack

### Backend

- PHP
- Laravel 13
- Laravel Form Request Validation
- Laravel HTTP Client
- MySQL

### Frontend

- React
- TypeScript
- Inertia.js
- Tailwind CSS
- shadcn/ui
- Lucide React

### External API

Data wilayah menggunakan:

- API Wilayah Indonesia — Emsifa

Endpoint API wilayah yang digunakan:

```text
https://emsifa.github.io/api-wilayah-indonesia/api
```

## Features

- Menampilkan daftar karyawan
- Menambahkan karyawan
- Mengubah data karyawan
- Menghapus data karyawan
- Validasi data menggunakan Laravel Form Request
- Validasi NIK unik
- Integrasi API wilayah Indonesia
- Cascading dropdown wilayah:

    - Provinsi
    - Kabupaten/Kota
    - Kecamatan
    - Desa/Kelurahan

## Data Karyawan

Data karyawan yang dikelola meliputi:

```text
NIK
Nama Lengkap
Jenis Kelamin
Tempat Lahir
Tanggal Lahir
No. Telepon
Email
Jabatan
Tanggal Masuk
Provinsi
Kabupaten/Kota
Kecamatan
Desa/Kelurahan
Alamat Detail
```

## Requirements

Pastikan environment sudah memiliki:

- PHP >= 8.2
- Composer
- Node.js >= 20
- NPM
- MySQL

## Installation

### 1. Clone Repository

```bash
git clone <repository-url>

cd <project-directory>
```

### 2. Install PHP Dependencies

```bash
composer install
```

### 3. Install Frontend Dependencies

```bash
npm install
```

### 4. Setup Environment

Copy file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Kemudian generate application key:

```bash
php artisan key:generate
```

### 5. Configure Database

Atur konfigurasi database pada `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=madina_karyawan
DB_USERNAME=root
DB_PASSWORD=
```

Sesuaikan konfigurasi dengan environment lokal.

### 6. Run Migration

```bash
php artisan migrate
```

Jika project menyediakan seeder:

```bash
php artisan migrate --seed
```

### 7. Run Development Server

Jalankan Laravel:

```bash
php artisan serve
```

Kemudian jalankan Vite pada terminal lain:

```bash
npm run dev
```

Aplikasi dapat diakses melalui:

```text
http://127.0.0.1:8000
```

## Development

Untuk menjalankan development environment:

```bash
php artisan serve
npm run dev
```

atau

```bash
composer run dev
```

Jika menggunakan Laravel Herd atau environment development lain, sesuaikan konfigurasi dengan environment yang digunakan.

## API Wilayah

Aplikasi menggunakan API eksternal untuk mendapatkan data wilayah Indonesia.

### Provinsi

```text
GET /api/wilayah/provinces
```

### Kabupaten/Kota

```text
GET /api/wilayah/regencies/{provinceId}
```

### Kecamatan

```text
GET /api/wilayah/districts/{regencyId}
```

### Desa/Kelurahan

```text
GET /api/wilayah/villages/{districtId}
```

Alur pemilihan wilayah:

```text
Provinsi
   ↓
Kabupaten/Kota
   ↓
Kecamatan
   ↓
Desa/Kelurahan
```

Ketika parent wilayah berubah, pilihan child wilayah akan diperbarui berdasarkan ID parent yang dipilih.

## Penyimpanan Data Wilayah

Frontend mengirimkan ID wilayah ke backend.

Contoh:

```json
{
    "provinsi_id": "35",
    "kabupaten_id": "3515",
    "kecamatan_id": "351501",
    "desa_id": "3515012001"
}
```

Backend kemudian mengambil data wilayah dari API dan menyimpan ID beserta nama wilayah ke database.

Contoh data yang disimpan:

```text
provinsi_id      = 35
provinsi_nama    = JAWA TIMUR

kabupaten_id     = 3515
kabupaten_nama   = SIDOARJO

kecamatan_id     = 351501
kecamatan_nama   = WARU

desa_id          = 3515012001
desa_nama        = KEPUH KIRIMAN
```

Pendekatan ini membuat data tetap memiliki referensi ID sekaligus nama wilayah yang digunakan ketika menampilkan data.

## Validation

Validasi request dilakukan menggunakan Laravel Form Request.

Contoh validasi NIK:

```php
'nik' => [
    'required',
    'string',
    'max:20',
    'unique:karyawans,nik',
],
```

Pada proses update, NIK milik karyawan yang sedang diedit dikecualikan dari validasi unique:

```php
Rule::unique('karyawans', 'nik')
    ->ignore($this->route('karyawan')),
```

Validasi juga diterapkan pada:

- Nama lengkap
- Jenis kelamin
- Tempat lahir
- Tanggal lahir
- Nomor telepon
- Email
- Jabatan
- Tanggal masuk
- Wilayah
- Alamat detail

## Struktur Project

Struktur utama project:

```text
app/
├── Http/
│   ├── Controllers/
│   │   ├── KaryawanController.php
│   │   └── Api/
│   │       └── WilayahController.php
│   │
│   └── Requests/
│       ├── StoreKaryawanRequest.php
│       └── UpdateKaryawanRequest.php
│
├── Models/
│   └── Karyawan.php
│
resources/
├── js/
│   ├── components/
│   ├── pages/
│   │   └── Karyawan/
│   ├── types/
│   └── app.tsx
│
routes/
├── web.php
└── api.php

database/
├── migrations/
└── seeders/
```

## Architecture

Aplikasi menggunakan Inertia.js sebagai penghubung antara Laravel dan React.

Secara umum alurnya:

```text
React + TypeScript
        ↓
     Inertia
        ↓
Laravel Controller
        ↓
 Form Request
        ↓
    Validation
        ↓
     Model
        ↓
    Database
```

Untuk kebutuhan wilayah:

```text
React
  ↓
Wilayah API Endpoint
  ↓
WilayahController
  ↓
External Wilayah API
  ↓
Response
  ↓
React
```

Sedangkan ketika menyimpan karyawan:

```text
React
  ↓
provinsi_id
kabupaten_id
kecamatan_id
desa_id
  ↓
KaryawanController
  ↓
External Wilayah API
  ↓
Ambil nama wilayah
  ↓
Karyawan::create()
  ↓
Database
```

## Useful Commands

### Laravel

```bash
php artisan serve
```

```bash
php artisan migrate
```

```bash
php artisan migrate:fresh --seed
```

```bash
php artisan route:list
```

### Frontend

```bash
npm run dev
```

Build production:

```bash
npm run build
```

## Production Build

Untuk melakukan build frontend:

```bash
npm run build
```

Kemudian pastikan konfigurasi `.env` production sudah benar dan jalankan migration:

```bash
php artisan migrate --force
```
