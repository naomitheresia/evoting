# Admin Dashboard - E-Voting Himatro

## Deskripsi
Dashboard admin untuk sistem e-voting Himatro yang memungkinkan administrator untuk mengelola seluruh aspek pemilihan secara real-time.

## Fitur Utama

### 1. Dashboard Overview
- **Statistik Real-time**: Total pemilih, jumlah yang sudah memilih, tingkat partisipasi
- **Progress Voting**: Grafik real-time hasil sementara setiap kandidat
- **Aktivitas Terbaru**: Log aktivitas voting terkini
- **Status Sistem**: Monitoring waktu voting dan status sistem

### 2. Kelola Kandidat
- **Tambah Kandidat**: Form untuk menambah kandidat baru
- **Edit Kandidat**: Modifikasi data kandidat yang sudah ada
- **Hapus Kandidat**: Menghapus kandidat (dengan konfirmasi)
- **Lihat Detail**: Informasi lengkap setiap kandidat dan perolehan suara

### 3. Monitor Voting
- **Kontrol Voting**: Start, pause, dan stop sesi voting
- **Aktivitas Live**: Tabel real-time aktivitas voting
- **Export Hasil**: Download hasil dalam berbagai format
- **Monitoring Keamanan**: Deteksi aktivitas mencurigakan

### 4. Kelola User
- **Daftar Pemilih**: Tabel lengkap semua user terdaftar
- **Status Voting**: Melihat siapa yang sudah/belum memilih
- **Tambah User**: Registrasi user baru
- **Edit/Hapus User**: Manajemen data user

### 5. Hasil Voting
- **Hasil Akhir**: Ranking kandidat dengan persentase
- **Statistik Detail**: Analisis mendalam hasil voting
- **Export Laporan**: PDF, Excel, CSV format
- **Visualisasi Data**: Grafik dan chart hasil

### 6. Pengaturan Sistem
- **Waktu Voting**: Set jadwal mulai dan berakhir voting
- **Konfigurasi**: Pengaturan nama organisasi, tahun, dll
- **Keamanan**: Pengaturan keamanan sistem
- **Backup**: Backup dan restore data

## Teknologi yang Digunakan

### Frontend
- **HTML5**: Struktur halaman
- **Tailwind CSS**: Framework CSS untuk styling responsif
- **JavaScript (Vanilla)**: Interaktivitas dan logika frontend
- **Font Awesome**: Icon library
- **Chart.js**: Visualisasi data (opsional untuk pengembangan lanjut)

### Fitur JavaScript
- **Real-time Updates**: Auto-refresh data setiap 10-30 detik
- **Modal Management**: Pop-up untuk konfirmasi dan form
- **Responsive Sidebar**: Navigation yang adaptif
- **Form Validation**: Validasi input real-time
- **Notification System**: Toast notifications untuk feedback
- **Keyboard Shortcuts**: Ctrl+1-6 untuk navigasi cepat
- **Auto-save**: Draft otomatis untuk form panjang

## Struktur File

```
dashboard/admin/
├── dashboard.html      # Halaman utama admin
├── dashboard.js        # JavaScript untuk interaktivitas
├── admin-style.css     # CSS tambahan khusus admin
└── README.md          # Dokumentasi ini
```

## Cara Menggunakan

### Login sebagai Admin
1. Buka halaman login (`../../login.html`)
2. Pilih "Administrator" di dropdown "Masuk Sebagai"
3. Gunakan kredensial admin:
   - **Email**: `admin@himatro.ac.id`
   - **Password**: `admin123`

### Navigasi Dashboard
- **Sidebar**: Menu utama di sebelah kiri
- **Header**: Informasi user dan notifikasi
- **Content Area**: Konten utama yang berubah sesuai menu

### Fitur Real-time
- Data statistik update otomatis setiap 30 detik
- Aktivitas voting update setiap 10 detik
- Progress bar kandidat update setiap 15 detik
- Countdown timer update setiap detik

## Keyboard Shortcuts
- `Ctrl + 1`: Dashboard Overview
- `Ctrl + 2`: Kelola Kandidat
- `Ctrl + 3`: Monitor Voting
- `Ctrl + 4`: Kelola User
- `Ctrl + 5`: Hasil Voting
- `Ctrl + 6`: Pengaturan
- `Esc`: Tutup modal yang terbuka

## Responsive Design
Dashboard fully responsive dan dapat diakses dari:
- **Desktop**: Layout penuh dengan sidebar
- **Tablet**: Sidebar collapsible
- **Mobile**: Sidebar overlay dengan hamburger menu

## Keamanan
- **Session Management**: Validasi login status
- **Role-based Access**: Hanya admin yang dapat mengakses
- **CSRF Protection**: Token untuk form submission (implementasi backend)
- **Input Validation**: Sanitasi input di frontend dan backend
- **Audit Log**: Pencatatan semua aktivitas admin

## Pengembangan Lanjutan

### Backend Integration
Untuk implementasi penuh, integrasikan dengan:
- **Database**: MySQL/PostgreSQL untuk data persistence
- **API**: RESTful API untuk komunikasi frontend-backend
- **WebSocket**: Real-time updates yang lebih efisien
- **Authentication**: JWT atau session-based auth

### Fitur Tambahan
- **Multi-language**: Dukungan bahasa Indonesia dan Inggris
- **Dark Mode**: Theme gelap untuk kenyamanan mata
- **Advanced Analytics**: Grafik dan analisis yang lebih detail
- **Email Notifications**: Notifikasi otomatis via email
- **Mobile App**: Aplikasi mobile untuk admin

## Troubleshooting

### Masalah Umum
1. **Data tidak update**: Refresh browser atau check koneksi internet
2. **Modal tidak muncul**: Pastikan JavaScript enabled
3. **Responsive issue**: Clear browser cache
4. **Login gagal**: Pastikan menggunakan kredensial yang benar

### Browser Support
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Kontribusi
Untuk berkontribusi pada pengembangan:
1. Fork repository
2. Buat branch fitur baru
3. Commit perubahan
4. Push ke branch
5. Buat Pull Request

## Lisensi
© 2026 Himatro - E-Voting System. All rights reserved.

---

**Catatan**: Ini adalah versi demo dengan data simulasi. Untuk implementasi production, diperlukan integrasi dengan backend dan database yang sesuai.