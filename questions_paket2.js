const questions = [
  {
    "type": "PG",
    "level": "C3",
    "material": "Bilangan",
    "question": "Sebuah data center memproses 2,4 × 10^6 data per detik selama 2,5 × 10^3 detik. Banyak data yang diproses selama waktu tersebut adalah ...",
    "options": [
      "6 × 10^8",
      "6 × 10^9",
      "6 × 10^10",
      "9 × 10^9",
      "9 × 10^10"
    ],
    "answer": 1,
    "explanation": "Banyak data = (2,4 × 10^6)(2,5 × 10^3) = 6 × 10^9 data."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Aljabar",
    "question": "Sebuah layanan antar mengenakan biaya awal Rp5.000,00 dan biaya Rp2.000,00 untuk setiap kilometer. Jika jarak yang ditempuh 10 km, biaya yang harus dibayar adalah ...",
    "options": [
      "Rp15.000,00",
      "Rp20.000,00",
      "Rp22.000,00",
      "Rp24.000,00",
      "Rp25.000,00"
    ],
    "answer": 4,
    "explanation": "Biaya = 5.000 + 2.000(10) = Rp25.000,00."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Aljabar",
    "image": "images/p2_q3_fungsi_kuadrat.png",
    "question": "Keuntungan suatu usaha dinyatakan oleh P(x) = −x^2 + 20x − 75, dengan x banyak produk yang dibuat. Agar keuntungan positif, nilai x harus memenuhi ...",
    "options": [
      "x < 5 atau x > 15",
      "5 < x < 15",
      "5 ≤ x ≤ 15",
      "x > 15",
      "0 < x < 5"
    ],
    "answer": 1,
    "explanation": "P(x) = −(x−5)(x−15). Karena parabola terbuka ke bawah, P(x) > 0 terjadi di antara kedua akar, yaitu 5 < x < 15."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Bilangan",
    "question": "Rina menyimpan Rp10.000.000,00 selama 4 tahun. Bank A memberi bunga tunggal 6% per tahun, sedangkan Bank B memberi bunga majemuk 5% per tahun. Pernyataan yang benar adalah ...",
    "options": [
      "Bank A menghasilkan tepat Rp100.000,00 lebih besar.",
      "Bank B menghasilkan lebih besar sekitar Rp244.937,50.",
      "Kedua bank menghasilkan jumlah akhir yang sama.",
      "Bank B menghasilkan lebih besar sekitar Rp100.000,00.",
      "Bank A menghasilkan lebih besar sekitar Rp244.937,50."
    ],
    "answer": 4,
    "explanation": "Bank A: 10.000.000(1 + 0,06×4) = Rp12.400.000,00. Bank B: 10.000.000(1,05)^4 = Rp12.155.062,50. Selisih = Rp244.937,50, sehingga Bank A lebih besar."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Geometri dan Pengukuran",
    "image": "images/p2_q5_koordinat.png",
    "question": "Diketahui A(2,4) dan B(8,0). Titik P(x,0) terletak pada sumbu-X dan berjarak sama dari A dan B. Nilai x adalah ...",
    "options": [
      "2",
      "3",
      "11/3",
      "4",
      "5"
    ],
    "answer": 2,
    "explanation": "PA² = (x−2)² + 16 dan PB² = (x−8)². Karena PA = PB, (x−2)² + 16 = (x−8)². Diperoleh x = 11/3."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Aljabar",
    "question": "Harga tiga buku tulis dan dua pulpen adalah Rp64.000,00. Harga dua buku tulis dan tiga pulpen adalah Rp61.000,00. Jika harga sebuah buku tulis adalah x dan sebuah pulpen adalah y, nilai 4x + 2y adalah ...",
    "options": [
      "Rp68.000,00",
      "Rp70.000,00",
      "Rp72.000,00",
      "Rp78.000,00",
      "Rp80.000,00"
    ],
    "answer": 3,
    "explanation": "3x + 2y = 64.000 dan 2x + 3y = 61.000. Diperoleh x = 14.000 dan y = 11.000. Jadi 4x + 2y = Rp78.000,00."
  },
  {
    "type": "CATEGORY",
    "level": "C4",
    "material": "Data dan Peluang",
    "question": "Nilai lima siswa adalah 60, 65, 70, 75, dan 80. Kemudian nilai 60 berubah menjadi 90, sedangkan nilai lainnya tetap. Tentukan Benar atau Salah setiap pernyataan berikut.",
    "statements": [
      {"text": "Rata-rata data meningkat dari 70 menjadi 76.", "answer": true},
      {"text": "Median data meningkat dari 70 menjadi 75.", "answer": true},
      {"text": "Jangkauan data meningkat dari 20 menjadi 30.", "answer": false},
      {"text": "Data awal dan data baru sama-sama tidak memiliki modus.", "answer": true}
    ],
    "explanation": "Data baru adalah 65, 70, 75, 80, 90. Rata-rata baru 76 dan median baru 75. Jangkauan baru 90−65 = 25, bukan 30. Kedua data tidak memiliki modus."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Trigonometri",
    "image": "images/p2_q8_tangga.png",
    "question": "Sebuah tangga panjangnya 10 m disandarkan pada dinding dan membentuk sudut 60° dengan tanah. Jarak kaki tangga dari dinding adalah ...",
    "options": [
      "4 m",
      "5 m",
      "5√2 m",
      "5√3 m",
      "10√3 m"
    ],
    "answer": 1,
    "explanation": "Jarak kaki tangga = 10 cos 60° = 10(1/2) = 5 m."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Data dan Peluang",
    "image": "images/p2_q9_kelulusan.png",
    "question": "Lima kelas memiliki data jumlah siswa dan persentase kelulusan: A = 40 siswa, 85%; B = 32 siswa, 75%; C = 36 siswa, 75%; D = 30 siswa, 90%; E = 40 siswa, 70%. Kelas dengan jumlah siswa tidak lulus paling banyak adalah ...",
    "options": [
      "Kelas A",
      "Kelas B",
      "Kelas C",
      "Kelas D",
      "Kelas E"
    ],
    "answer": 4,
    "explanation": "Tidak lulus: A 15%×40=6; B 25%×32=8; C 25%×36=9; D 10%×30=3; E 30%×40=12. Jadi terbanyak adalah kelas E."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Data dan Peluang",
    "question": "Peluang penerbangan pertama mengalami keterlambatan adalah 0,2 dan penerbangan kedua 0,3. Jika kedua kejadian dianggap independen, peluang setidaknya satu penerbangan mengalami keterlambatan adalah ...",
    "options": [
      "0,06",
      "0,24",
      "0,36",
      "0,44",
      "0,50"
    ],
    "answer": 3,
    "explanation": "P(setidaknya satu) = 1 − P(keduanya tidak terlambat) = 1 − (0,8)(0,7) = 0,44."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Aljabar",
    "question": "Hubungan suhu Celsius dan Fahrenheit adalah F(x) = 9/5 x + 32. Jika suhu terbaca 95°F, suhu tersebut dalam Celsius adalah ...",
    "options": [
      "30°C",
      "32°C",
      "35°C",
      "37°C",
      "40°C"
    ],
    "answer": 2,
    "explanation": "95 = 9/5 x + 32, sehingga 63 = 9/5 x dan x = 35°C."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Geometri dan Pengukuran",
    "image": "images/p2_q12_kesebangunan.png",
    "question": "Sebuah tongkat setinggi 1,5 m memiliki bayangan 2 m. Pada saat yang sama, sebuah gedung memiliki bayangan 18 m. Jika sinar matahari dianggap sejajar, tinggi gedung adalah ...",
    "options": [
      "10,5 m",
      "12 m",
      "13,5 m",
      "15 m",
      "18 m"
    ],
    "answer": 2,
    "explanation": "Dengan kesebangunan, tinggi gedung/18 = 1,5/2. Jadi tinggi gedung = 18×1,5/2 = 13,5 m."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Aljabar",
    "image": "images/p2_q13_pertidaksamaan.png",
    "question": "Daerah solusi memenuhi 2x + y ≤ 40, x + 2y ≤ 50, x ≥ 10, dan y ≥ 10. Dari titik berikut, titik yang berada dalam daerah solusi adalah ...",
    "options": [
      "(15,20)",
      "(10,20)",
      "(20,15)",
      "(12,25)",
      "(18,18)"
    ],
    "answer": 1,
    "explanation": "Untuk (10,20): 2(10)+20=40 dan 10+2(20)=50, serta x,y ≥ 10. Titik lain melanggar setidaknya satu kendala."
  },
  {
    "type": "CATEGORY",
    "level": "C5",
    "material": "Data dan Peluang",
    "question": "Data nilai lima siswa adalah 60, 70, 70, 80, dan 90. Kemudian setiap nilai ditambah 10. Tentukan Benar atau Salah setiap pernyataan berikut.",
    "statements": [
      {"text": "Rata-rata meningkat 10 poin.", "answer": true},
      {"text": "Median meningkat 10 poin.", "answer": true},
      {"text": "Modus meningkat 10 poin.", "answer": true},
      {"text": "Jangkauan meningkat 10 poin.", "answer": false}
    ],
    "explanation": "Penambahan konstanta 10 pada semua data menaikkan mean, median, dan modus masing-masing 10, sedangkan jangkauan tetap karena nilai maksimum dan minimum sama-sama bertambah 10."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Trigonometri",
    "image": "images/p2_q15_perbandingan_tinggi.png",
    "question": "Dua jalur pendakian memiliki panjang dan sudut kemiringan berbeda. Jalur A panjangnya 100 m dengan sudut 30°, sedangkan jalur B panjangnya 80 m dengan sudut 45°. Pernyataan yang benar adalah ...",
    "options": [
      "Kenaikan vertikal A lebih besar daripada B.",
      "Kenaikan vertikal A dan B sama.",
      "Kenaikan vertikal A adalah 50 m dan B adalah 40 m.",
      "Kenaikan vertikal B lebih besar daripada A.",
      "Kenaikan vertikal B tepat 10 m lebih besar daripada A."
    ],
    "answer": 3,
    "explanation": "Kenaikan A = 100 sin30° = 50 m. Kenaikan B = 80 sin45° = 40√2 ≈ 56,57 m. Jadi B lebih tinggi."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Aljabar",
    "question": "Suatu polinom kubik memiliki akar 1 dan 2. Jika suku konstantanya −6, polinom tersebut dapat ditulis x^3 − ax^2 + bx − 6. Nilai a + b adalah ...",
    "options": [
      "11",
      "13",
      "15",
      "16",
      "17"
    ],
    "answer": 4,
    "explanation": "Karena hasil kali akar = 6, akar ketiga adalah 3. Maka polinom = (x−1)(x−2)(x−3) = x^3−6x^2+11x−6. Jadi a+b=6+11=17."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Geometri dan Pengukuran",
    "image": "images/p2_q17_volume_balok.png",
    "question": "Sebuah balok berukuran panjang 4 m, lebar 3 m, dan tinggi 2 m. Panjang dan lebar masing-masing dinaikkan 20%, sedangkan tinggi tetap. Persentase kenaikan volumenya adalah ...",
    "options": [
      "20%",
      "40%",
      "44%",
      "48%",
      "52%"
    ],
    "answer": 2,
    "explanation": "Volume awal = 4×3×2 = 24 m³. Ukuran baru 4,8×3,6×2 = 34,56 m³. Kenaikan = 10,56/24 ×100% = 44%."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Data dan Peluang",
    "image": "images/p2_q18_data_kelompok.png",
    "question": "Distribusi waktu belajar 40 siswa adalah: 1–2 jam: 6 siswa; 3–4 jam: 10 siswa; 5–6 jam: 14 siswa; 7–8 jam: 7 siswa; 9–10 jam: 3 siswa. Persentase siswa yang belajar kurang dari 5 jam adalah ...",
    "options": [
      "40%",
      "42,5%",
      "45%",
      "50%",
      "55%"
    ],
    "answer": 0,
    "explanation": "Kurang dari 5 jam berarti kelompok 1–2 dan 3–4 jam: 6+10=16 siswa. Persentase = 16/40×100%=40%."
  },
  {
    "type": "CATEGORY",
    "level": "C5",
    "material": "Bilangan",
    "question": "Seseorang menabung Rp10.000.000,00 selama 2 tahun. Bank A memberi bunga tunggal 8% per tahun, sedangkan Bank B memberi bunga majemuk 7% per tahun. Tentukan Benar atau Salah setiap pernyataan berikut.",
    "statements": [
      {"text": "Jumlah akhir pada Bank A adalah Rp11.600.000,00.", "answer": true},
      {"text": "Jumlah akhir pada Bank B sekitar Rp11.449.000,00.", "answer": true},
      {"text": "Bank A memberikan hasil lebih besar daripada Bank B.", "answer": true},
      {"text": "Selisih hasil kedua bank lebih dari Rp200.000,00.", "answer": false}
    ],
    "explanation": "Bank A = 10.000.000(1+0,08×2)=Rp11.600.000,00. Bank B = 10.000.000(1,07)^2=Rp11.449.000,00. Selisih Rp151.000,00, sehingga kurang dari Rp200.000,00."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Aljabar",
    "question": "Sebuah kode terdiri atas 2 huruf berbeda yang dipilih dari 5 huruf dan diikuti 3 digit berbeda yang dipilih dari 6 digit. Banyak kode yang dapat dibuat adalah ...",
    "options": [
      "1.200",
      "2.400",
      "3.000",
      "3.600",
      "7.200"
    ],
    "answer": 1,
    "explanation": "Dua huruf berbeda: 5×4=20. Tiga digit berbeda: 6×5×4=120. Total = 20×120 = 2.400 kode."
  },
  {
    "type": "CATEGORY",
    "level": "C4",
    "material": "Aljabar",
    "image": "images/p2_q21_grafik_kuadrat.png",
    "question": "Sebuah fungsi kuadrat memiliki grafik dengan titik puncak (2,−9) dan memotong sumbu-X di x=−1 dan x=5. Tentukan Benar atau Salah setiap pernyataan berikut.",
    "statements": [
      {"text": "Nilai minimum fungsi adalah −9.", "answer": true},
      {"text": "Sumbu simetri grafik adalah x=2.", "answer": true},
      {"text": "Titik potong dengan sumbu-Y adalah (0,−5).", "answer": true},
      {"text": "Persamaan fungsi dapat ditulis f(x)=x^2−4x−5.", "answer": true}
    ],
    "explanation": "Akar −1 dan 5 memberi f(x)=(x+1)(x−5)=x^2−4x−5. Titik puncaknya (2,−9), sehingga semua pernyataan benar."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Geometri dan Pengukuran",
    "image": "images/p2_q22_transformasi.png",
    "question": "Titik C(2,5) ditranslasikan 3 satuan ke kiri dan 2 satuan ke bawah, kemudian dicerminkan terhadap sumbu-Y. Koordinat bayangan akhir C adalah ...",
    "options": [
      "(-1,3)",
      "(-1,-3)",
      "(1,3)",
      "(1,-3)",
      "(3,1)"
    ],
    "answer": 2,
    "explanation": "Setelah translasi: C menjadi (−1,3). Pencerminan terhadap sumbu-Y mengubah (x,y) menjadi (−x,y), sehingga diperoleh (1,3)."
  },
  {
    "type": "PG",
    "level": "C5",
    "material": "Trigonometri",
    "image": "images/p2_q23_menara.png",
    "question": "Dari titik A, sudut elevasi puncak menara adalah 30°. Dari titik B yang berada 20 m lebih dekat ke menara, sudut elevasinya 45°. Jika tinggi menara h dan jarak B ke kaki menara x, maka nilai h adalah ...",
    "options": [
      "10(√3−1) m",
      "10(√3+1) m",
      "20√3 m",
      "20(√3+1) m",
      "30 m"
    ],
    "answer": 1,
    "explanation": "Dari B: tan45°=h/x sehingga h=x. Dari A: tan30°=h/(x+20). Maka x/(x+20)=1/√3. Diperoleh x=10(√3+1), sehingga h=10(√3+1) m."
  },
  {
    "type": "CATEGORY",
    "level": "C5",
    "material": "Data dan Peluang",
    "question": "Dua kelompok memiliki data berikut. Kelompok A: 60, 70, 70, 80, 80. Kelompok B: 50, 65, 70, 85, 90. Tentukan Benar atau Salah setiap pernyataan berikut.",
    "statements": [
      {"text": "Rata-rata kedua kelompok sama, yaitu 72.", "answer": true},
      {"text": "Median kelompok A adalah 70.", "answer": true},
      {"text": "Jangkauan kelompok B lebih besar daripada kelompok A.", "answer": true},
      {"text": "Kelompok B memiliki penyebaran data yang lebih kecil berdasarkan jangkauan.", "answer": false}
    ],
    "explanation": "Kedua kelompok berjumlah 360 sehingga mean 72. Median A=70. Jangkauan A=20 dan B=40. Jadi B memiliki jangkauan lebih besar, bukan lebih kecil."
  },
  {
    "type": "PG",
    "level": "C5",
    "material": "Aljabar",
    "question": "Sebuah model keuntungan dinyatakan P(n)=n^2+10n+100. Seorang analis menyatakan bahwa P(10)=2P(5). Evaluasi pernyataan tersebut.",
    "options": [
      "P(10)>2P(5)",
      "P(10)=2P(5)",
      "P(10)<2P(5)",
      "P(10)=P(5)",
      "Tidak dapat ditentukan"
    ],
    "answer": 2,
    "explanation": "P(5)=25+50+100=175 sehingga 2P(5)=350. P(10)=100+100+100=300. Jadi P(10)<2P(5), sehingga klaim analis salah."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Aljabar",
    "image": "images/p2_q26_program_linear.png",
    "question": "Sebuah usaha memproduksi produk A sebanyak x dan produk B sebanyak y. Kendalanya 2x+y≤40 dan x+2y≤50, dengan x,y≥0. Keuntungan A Rp40.000,00 dan B Rp30.000,00. Kombinasi yang memberikan keuntungan maksimum adalah ...",
    "options": [
      "(0,25)",
      "(10,20)",
      "(15,10)",
      "(20,0)",
      "(0,20)"
    ],
    "answer": 1,
    "explanation": "Titik potong 2x+y=40 dan x+2y=50 adalah (10,20). Keuntungan = 10(40.000)+20(30.000)=Rp1.000.000,00, lebih besar daripada titik sudut lain."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Geometri dan Pengukuran",
    "image": "images/p2_q27_balok.png",
    "question": "Kotak A berukuran 20 cm × 15 cm × 10 cm, sedangkan kotak B berukuran 24 cm × 15 cm × 8 cm. Pernyataan yang benar adalah ...",
    "options": [
      "Volume A dan B sama.",
      "Volume B lebih besar 120 cm³.",
      "Volume B lebih besar 240 cm³.",
      "Volume A lebih besar 120 cm³.",
      "Volume A lebih besar 240 cm³."
    ],
    "answer": 3,
    "explanation": "Volume A=20×15×10=3.000 cm³. Volume B=24×15×8=2.880 cm³. Jadi volume A lebih besar 120 cm³."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Trigonometri",
    "image": "images/p2_q28_law_sines.png",
    "question": "Dalam segitiga ABC diketahui sudut A=30°, sudut B=45°, dan sisi a=10 cm. Panjang sisi b adalah ...",
    "options": [
      "5√2 cm",
      "10√2 cm",
      "10√3 cm",
      "15 cm",
      "20 cm"
    ],
    "answer": 1,
    "explanation": "Aturan sinus: a/sinA=b/sinB. Jadi b=10(sin45°/sin30°)=10((√2/2)/(1/2))=10√2 cm."
  },
  {
    "type": "CATEGORY",
    "level": "C5",
    "material": "Data dan Peluang",
    "image": "images/p2_q29_infografis.png",
    "question": "Dalam survei terhadap 200 siswa, pilihan kegiatan adalah olahraga 35%, seni 25%, sains 20%, dan bahasa 15%; sisanya memilih kegiatan lain. Sebanyak 40 siswa dipilih untuk program khusus. Tentukan Benar atau Salah setiap pernyataan berikut.",
    "statements": [
      {"text": "Jika sampel mengikuti proporsi survei, peserta olahraga berjumlah 14 siswa.", "answer": true},
      {"text": "Peserta seni berjumlah 10 siswa.", "answer": true},
      {"text": "Gabungan peserta sains dan bahasa berjumlah 14 siswa.", "answer": true},
      {"text": "Peserta olahraga lebih banyak daripada gabungan peserta seni dan sains.", "answer": false}
    ],
    "explanation": "Dari 40 siswa: olahraga 35%=14, seni 25%=10, sains 20%=8, bahasa 15%=6. Gabungan sains+bahasa=14. Olahraga 14, sedangkan seni+sains=18, sehingga pernyataan terakhir salah."
  },
  {
    "type": "CATEGORY",
    "level": "C5",
    "material": "Aljabar",
    "question": "Sebuah model pendapatan dinyatakan T(x)=50.000x−2.000x^2 untuk 0<x≤20, dengan x jumlah produk yang terjual. Tentukan Benar atau Salah setiap pernyataan berikut.",
    "statements": [
      {"text": "Pendapatan bertambah ketika x bertambah selama 1≤x<12.", "answer": true},
      {"text": "Pendapatan maksimum untuk bilangan bulat x dicapai saat x=12 atau x=13.", "answer": true},
      {"text": "T(10)=Rp300.000,00.", "answer": true},
      {"text": "T(20) lebih besar daripada T(10).", "answer": false}
    ],
    "explanation": "T(x)=−2.000x^2+50.000x memiliki titik puncak x=12,5. Untuk x bilangan bulat, nilai maksimum dicapai pada x=12 dan x=13. T(10)=500.000−200.000=300.000. T(20)=1.000.000−800.000=200.000, sehingga lebih kecil."
  }
];
