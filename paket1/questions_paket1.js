const questions = [
  {
    "type": "PG",
    "level": "C3",
    "material": "Bilangan",
    "question": "Sebuah mesin menghasilkan 2,4 × 10^5 produk setiap minggu. Produk tersebut dikemas secara merata ke dalam 6 × 10^2 kotak. Banyak produk dalam setiap kotak adalah ...",
    "options": [
      "2 × 10^2",
      "4 × 10^2",
      "4 × 10^3",
      "6 × 10^2",
      "6 × 10^3"
    ],
    "answer": 1,
    "explanation": "Banyak produk per kotak = (2,4 × 10^5) ÷ (6 × 10^2) = (2,4 ÷ 6) × 10^3 = 0,4 × 10^3 = 4 × 10^2."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Bilangan",
    "image": "images/q2_skala.png",
    "question": "Pada denah, jarak antara sekolah dan pusat olahraga adalah 7,2 cm. Skala denah adalah 1 : 250.000. Sebuah kendaraan harus menempuh rute baru yang 15% lebih panjang daripada jarak sebenarnya pada denah tersebut. Jarak yang ditempuh kendaraan adalah ...",
    "options": [
      "18,0 km",
      "19,8 km",
      "20,7 km",
      "21,6 km",
      "23,4 km"
    ],
    "answer": 2,
    "explanation": "Jarak sebenarnya = 7,2 × 250.000 cm = 1.800.000 cm = 18 km. Rute baru = 115% × 18 = 20,7 km."
  },
  {
    "type": "MCMA",
    "level": "C4",
    "material": "Bilangan",
    "image": "images/q3_promo.png",
    "question": "Sebuah produk berharga Rp400.000,00. Toko memberikan diskon pertama 20%, kemudian diskon kedua sebesar 10% dari harga setelah diskon pertama. Setelah itu dikenakan biaya layanan Rp10.000,00. Pilih semua pernyataan yang benar.",
    "options": [
      "Harga setelah diskon pertama adalah Rp320.000,00.",
      "Nilai diskon kedua adalah Rp32.000,00.",
      "Harga setelah kedua diskon adalah Rp288.000,00.",
      "Harga yang harus dibayar setelah biaya layanan adalah Rp298.000,00.",
      "Total persentase diskon terhadap harga awal adalah 30%."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Diskon pertama = 20% × Rp400.000 = Rp80.000 sehingga harga menjadi Rp320.000. Diskon kedua = 10% × Rp320.000 = Rp32.000 sehingga harga menjadi Rp288.000. Ditambah layanan Rp10.000 menjadi Rp298.000. Total diskon sebenarnya Rp112.000 atau 28%, bukan 30%."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Aljabar",
    "question": "Nilai x yang memenuhi 3(2x − 1) − 2(x + 4) = 17 adalah ...",
    "options": [
      "4",
      "5",
      "6",
      "8",
      "7"
    ],
    "answer": 4,
    "explanation": "6x − 3 − 2x − 8 = 17, sehingga 4x − 11 = 17, 4x = 28, dan x = 7."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Aljabar",
    "image": "images/q5_tiket.png",
    "question": "Sebuah pertunjukan menjual 120 tiket yang terdiri atas tiket dewasa seharga Rp50.000,00 dan tiket pelajar seharga Rp30.000,00. Total pendapatan adalah Rp4.600.000,00. Banyak tiket dewasa yang terjual adalah ...",
    "options": [
      "80",
      "70",
      "60",
      "50",
      "40"
    ],
    "answer": 3,
    "explanation": "Misalkan x tiket dewasa dan y tiket pelajar. x + y = 120 dan 50x + 30y = 4.600. Substitusi y = 120 − x: 50x + 30(120 − x) = 4.600, sehingga 20x = 1.000 dan x = 50. Jadi banyak tiket dewasa yang terjual adalah 50."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Aljabar",
    "question": "Biaya pengiriman paket mengikuti data berikut: 1 kg → Rp15.000,00; 2 kg → Rp20.000,00; 3 kg → Rp25.000,00; 4 kg → Rp30.000,00. Jika x menyatakan berat paket dalam kg, fungsi biaya pengiriman yang sesuai adalah ...",
    "options": [
      "C(x) = 5.000x + 10.000",
      "C(x) = 5.000x + 5.000",
      "C(x) = 10.000x + 5.000",
      "C(x) = 15.000x",
      "C(x) = 5.000x + 15.000"
    ],
    "answer": 0,
    "explanation": "Setiap kenaikan 1 kg menaikkan biaya Rp5.000, sehingga gradien 5.000. Untuk x = 1, 15.000 = 5.000(1) + b, maka b = 10.000. Jadi C(x) = 5.000x + 10.000."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Aljabar",
    "question": "Sebuah susunan kursi membentuk barisan aritmetika: 18, 22, 26, 30, dan seterusnya. Jika terdapat 15 baris, jumlah seluruh kursi adalah ...",
    "options": [
      "600",
      "660",
      "690",
      "720",
      "750"
    ],
    "answer": 2,
    "explanation": "a = 18, d = 4, n = 15. S15 = n/2 [2a + (n−1)d] = 15/2 [36 + 56] = 15/2 × 92 = 690."
  },
  {
    "type": "MCMA",
    "level": "C4",
    "material": "Aljabar",
    "image": "images/q8_pertumbuhan.png",
    "question": "Populasi mikroorganisme mula-mula 500 dan menjadi dua kali lipat setiap 3 jam. Modelnya N(t) = 500(2)^(t/3). Pilih semua pernyataan yang benar.",
    "options": [
      "Pada t = 3 jam, populasi 1.000.",
      "Pada t = 6 jam, populasi 2.000.",
      "Pada t = 9 jam, populasi 4.000.",
      "Pada t = 12 jam, populasi 8.000.",
      "Pada t = 15 jam, populasi 12.000."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Setiap 3 jam populasi dikali 2: 500 → 1.000 → 2.000 → 4.000 → 8.000 → 16.000. Jadi pernyataan A–D benar, sedangkan E salah karena pada 15 jam populasinya 16.000."
  },
  {
    "type": "PG",
    "level": "C5",
    "material": "Aljabar",
    "image": "images/q9_taman.png",
    "question": "Sebuah taman berbentuk persegi panjang memiliki panjang x meter dan lebar (20 − x) meter. Luas taman dinyatakan L(x) = x(20 − x). Luas maksimum taman tersebut adalah ...",
    "options": [
      "80 m²",
      "90 m²",
      "100 m²",
      "110 m²",
      "120 m²"
    ],
    "answer": 2,
    "explanation": "L(x) = 20x − x². Parabola terbuka ke bawah dan mencapai maksimum pada x = −b/(2a) = −20/(−2) = 10. Lebarnya juga 10, sehingga luas maksimum = 100 m²."
  },
  {
    "type": "PG",
    "level": "C5",
    "material": "Aljabar",
    "image": "images/q10_program_linear.png",
    "question": "Sebuah usaha membuat Paket A dan Paket B. Paket A membutuhkan 2 kg bahan X dan 1 kg bahan Y serta memberi keuntungan Rp40.000,00. Paket B membutuhkan 1 kg bahan X dan 3 kg bahan Y serta memberi keuntungan Rp50.000,00. Persediaan bahan X adalah 16 kg dan bahan Y adalah 18 kg. Kombinasi produksi yang memberikan keuntungan maksimum adalah ...",
    "options": [
      "(3, 5)",
      "(6, 4)",
      "(5, 3)",
      "(6, 2)",
      "(7, 1)"
    ],
    "answer": 1,
    "explanation": "Kendala: 2x + y ≤ 16 dan x + 3y ≤ 18. Titik potong kedua batas adalah (6,4). Keuntungan pada titik tersebut = 6(40.000) + 4(50.000) = Rp440.000,00. Nilai ini lebih besar daripada titik pilihan lain yang feasible."
  },
    {
    "type": "MCMA",
    "level": "C4",
    "material": "Aljabar",
    "question": "Sebuah usaha membuat Paket A dan Paket B. Paket A membutuhkan 2 kg bahan X dan 1 kg bahan Y dengan keuntungan Rp50.000,00. Paket B membutuhkan 1 kg bahan X dan 2 kg bahan Y dengan keuntungan Rp40.000,00. Persediaan bahan X adalah 20 kg dan bahan Y adalah 16 kg. Pilih semua pernyataan yang benar.",
    "options": [
      "Produksi 8 Paket A dan 4 Paket B masih memenuhi persediaan bahan.",
      "Produksi 8 Paket A dan 4 Paket B memberikan keuntungan Rp560.000,00.",
      "Produksi 10 Paket A dan tanpa Paket B memberikan keuntungan Rp500.000,00.",
      "Produksi 6 Paket A dan 5 Paket B memberikan keuntungan Rp520.000,00.",
      "Produksi 4 Paket A dan 6 Paket B memberikan keuntungan Rp480.000,00."
    ],
    "answer": [
      0,
      1,
      2
    ],
    "explanation": "Untuk (8,4), bahan X = 2(8)+4 = 20 kg dan Y = 8+2(4) = 16 kg, sehingga feasible. Keuntungannya = 8(50.000)+4(40.000) = Rp560.000,00. Untuk (10,0), keuntungan = Rp500.000,00. Untuk (6,5), keuntungan sebenarnya Rp500.000,00, bukan Rp520.000,00. Untuk (4,6), keuntungan sebenarnya Rp440.000,00."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Geometri dan Pengukuran",
    "question": "Seorang siswa dengan tinggi 1,8 m memiliki bayangan sepanjang 1,2 m. Pada saat yang sama, sebuah tiang memiliki bayangan sepanjang 8 m. Jika sinar matahari dianggap sejajar, tinggi tiang tersebut adalah ...",
    "options": [
      "10 m",
      "11 m",
      "12 m",
      "13 m",
      "14 m"
    ],
    "answer": 2,
    "explanation": "Karena sinar matahari sejajar, segitiga yang terbentuk sebangun. Tinggi tiang/8 = 1,8/1,2 = 1,5. Jadi tinggi tiang = 8 × 1,5 = 12 m."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Geometri dan Pengukuran",
    "image": "images/q13_diagonal.png",
    "question": "Sebuah persegi panjang memiliki panjang 5 m dan diagonal 13 m. Lebar persegi panjang tersebut adalah ...",
    "options": [
      "8 m",
      "10 m",
      "12 m",
      "14 m",
      "15 m"
    ],
    "answer": 2,
    "explanation": "Dengan Teorema Pythagoras, lebar² = 13² − 5² = 169 − 25 = 144. Jadi lebar = 12 m."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Geometri dan Pengukuran",
    "image": "images/q14_bangun_gabungan.png",
    "question": "Sebuah bangun gabungan terdiri atas persegi panjang berukuran 20 m × 14 m dan setengah lingkaran dengan diameter 14 m. Gunakan π = 22/7. Luas seluruh bangun adalah ...",
    "options": [
      "280 m²",
      "357 m²",
      "374 m²",
      "434 m²",
      "462 m²"
    ],
    "answer": 1,
    "explanation": "Luas persegi panjang = 20 × 14 = 280 m². Jari-jari setengah lingkaran = 7 m, sehingga luasnya = 1/2 × 22/7 × 7² = 77 m². Jadi luas total = 280 + 77 = 357 m²."
  },
  {
    "type": "MCMA",
    "level": "C4",
    "material": "Geometri dan Pengukuran",
    "image": "images/q15_akuarium.png",
    "question": "Sebuah akuarium berbentuk balok berukuran panjang 80 cm, lebar 50 cm, dan tinggi 40 cm. Akuarium diisi air hingga 75% dari kapasitasnya. Pilih semua pernyataan yang benar.",
    "options": [
      "Volume maksimum akuarium adalah 160.000 cm³.",
      "Volume air dalam akuarium adalah 120.000 cm³.",
      "Volume air dalam akuarium adalah 120 liter.",
      "Tinggi air dalam akuarium adalah 30 cm.",
      "Volume maksimum akuarium adalah 120 liter."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Volume maksimum = 80 × 50 × 40 = 160.000 cm³. Volume air = 75% × 160.000 = 120.000 cm³ = 120 liter. Karena penampang tetap, tinggi air = 75% × 40 = 30 cm. Jadi pernyataan A–D benar, sedangkan E salah."
  },
  {
    "type": "PG",
    "level": "C5",
    "material": "Geometri dan Pengukuran",
    "image": "images/q16_transformasi.png",
    "question": "Titik A(2, −1) direfleksikan terhadap sumbu-x, kemudian ditranslasikan dengan vektor (3, 4). Koordinat akhir titik A adalah ...",
    "options": [
      "(−5, 5)",
      "(5, −5)",
      "(5, 5)",
      "(−1, 3)",
      "(1, 5)"
    ],
    "answer": 2,
    "explanation": "Refleksi terhadap sumbu-x mengubah (2,−1) menjadi (2,1). Selanjutnya ditranslasikan dengan (3,4): (2+3, 1+4) = (5,5)."
  },
  {
    "type": "CATEGORY",
    "level": "C4",
    "material": "Geometri dan Pengukuran",
    "question": "Diketahui titik A(1, 2) dan B(7, 10). Tentukan apakah setiap pernyataan berikut Benar atau Salah.",
    "statements": [
      {
        "text": "Jarak antara titik A dan B adalah 10 satuan.",
        "answer": true
      },
      {
        "text": "Gradien garis AB adalah 4/3.",
        "answer": true
      },
      {
        "text": "Titik tengah AB adalah (4, 6).",
        "answer": true
      },
      {
        "text": "Gradien garis yang tegak lurus AB adalah 4/3.",
        "answer": false
      }
    ],
    "explanation": "Jarak AB = √[(7−1)²+(10−2)²] = √100 = 10. Gradien AB = 8/6 = 4/3. Titik tengah = ((1+7)/2,(2+10)/2) = (4,6). Gradien garis tegak lurus AB adalah −3/4, bukan 4/3."
  },
  {
    "type": "PG",
    "level": "C3",
    "material": "Trigonometri",
    "question": "Jika sin θ = 3/5 dan θ merupakan sudut lancip, nilai tan θ adalah ...",
    "options": [
      "2/3",
      "3/4",
      "4/3",
      "3/5",
      "4/5"
    ],
    "answer": 1,
    "explanation": "Jika sin θ = 3/5, maka sisi depan = 3 dan sisi miring = 5. Dengan Teorema Pythagoras, sisi samping = 4. Jadi tan θ = sisi depan/sisi samping = 3/4."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Trigonometri",
    "image": "images/q19_elevasi.png",
    "question": "Dari suatu titik pengamatan, sudut elevasi puncak sebuah menara adalah 37°. Jarak horizontal titik pengamatan ke kaki menara adalah 30 m. Jika tinggi mata pengamat 1,5 m dan tan 37° ≈ 3/4, tinggi menara adalah ...",
    "options": [
      "20 m",
      "21,5 m",
      "22,5 m",
      "24 m",
      "25,5 m"
    ],
    "answer": 3,
    "explanation": "Selisih tinggi puncak menara terhadap mata pengamat = 30 × tan 37° = 30 × 3/4 = 22,5 m. Tinggi menara = 22,5 + 1,5 = 24 m."
  },
  {
    "type": "MCMA",
    "level": "C4",
    "material": "Trigonometri",
    "image": "images/q20_dua_pengamatan.png",
    "question": "Dua pengamatan dilakukan terhadap puncak sebuah menara. Pada pengamatan A, jarak horizontal ke kaki menara 20 m dan sudut elevasi 45°. Pada pengamatan B, jarak horizontal 20√3 m dan sudut elevasi 30°. Pilih semua pernyataan yang benar.",
    "options": [
      "Pengamatan A menunjukkan tinggi menara 20 m.",
      "Pengamatan B menunjukkan tinggi menara 20 m.",
      "Jarak pada pengamatan B adalah √3 kali jarak pada pengamatan A.",
      "Sudut elevasi pada pengamatan A lebih besar daripada pengamatan B.",
      "Kedua pengamatan menunjukkan tinggi menara yang berbeda."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Pengamatan A: tinggi = 20 × tan 45° = 20 m. Pengamatan B: tinggi = 20√3 × tan 30° = 20√3 × 1/√3 = 20 m. Jarak B = √3 kali jarak A dan sudut A lebih besar. Jadi pernyataan A–D benar, sedangkan E salah."
  },
    {
    "type": "CATEGORY",
    "level": "C5",
    "material": "Trigonometri",
    "image": "images/q21_ramp.png",
    "question": "Sebuah ramp memiliki panjang 10 m dan tinggi 6 m. Jika sudut kemiringan ramp terhadap tanah adalah θ, tentukan apakah setiap pernyataan berikut Benar atau Salah.",
    "statements": [
      {
        "text": "sin θ = 3/5.",
        "answer": true
      },
      {
        "text": "cos θ = 4/5.",
        "answer": true
      },
      {
        "text": "tan θ = 4/3.",
        "answer": false
      },
      {
        "text": "Jika panjang ramp menjadi dua kali lipat dengan sudut kemiringan tetap, tinggi ramp menjadi 12 m.",
        "answer": true
      }
    ],
    "explanation": "Segitiga ramp memiliki sisi miring 10 m, tinggi 6 m, dan alas √(10²−6²) = 8 m. Jadi sin θ = 6/10 = 3/5, cos θ = 8/10 = 4/5, dan tan θ = 6/8 = 3/4. Jika panjang ramp menjadi 20 m dengan sudut tetap, tinggi juga menjadi dua kali lipat, yaitu 12 m."
  },
  {
    "type": "CATEGORY",
    "level": "C3",
    "material": "Data dan Peluang",
    "question": "Data kegiatan ekstrakurikuler yang dipilih siswa adalah sebagai berikut: Futsal 36 siswa, Basket 24 siswa, Musik 18 siswa, Pramuka 42 siswa, dan Karya Ilmiah 20 siswa. Tentukan apakah setiap pernyataan berikut Benar atau Salah.",
    "statements": [
      {
        "text": "Jumlah siswa yang memilih Pramuka merupakan yang terbanyak.",
        "answer": true
      },
      {
        "text": "Jumlah siswa yang memilih Futsal lebih banyak daripada Basket.",
        "answer": true
      },
      {
        "text": "Jumlah siswa yang memilih Musik dan Karya Ilmiah adalah 38 siswa.",
        "answer": true
      },
      {
        "text": "Selisih jumlah siswa yang memilih Pramuka dan Futsal adalah 8 siswa.",
        "answer": false
      }
    ],
    "explanation": "Pramuka memiliki 42 siswa dan merupakan jumlah terbanyak. Futsal 36 lebih banyak daripada Basket 24. Musik + Karya Ilmiah = 18 + 20 = 38. Selisih Pramuka dan Futsal = 42 − 36 = 6, bukan 8."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Data dan Peluang",
    "question": "Nilai lima siswa adalah 72, 80, 75, 88, dan 85. Jika setiap nilai dinaikkan 5 poin, pasangan nilai mean dan median yang baru adalah ...",
    "options": [
      "Mean 80 dan median 80",
      "Mean 80 dan median 85",
      "Mean 85 dan median 80",
      "Mean 85 dan median 85",
      "Mean 90 dan median 90"
    ],
    "answer": 3,
    "explanation": "Urutan data awal adalah 72, 75, 80, 85, 88. Mean = 400/5 = 80 dan median = 80. Jika setiap nilai ditambah 5, mean dan median masing-masing bertambah 5. Jadi mean baru = 85 dan median baru = 85."
  },
  {
    "type": "MCMA",
    "level": "C4",
    "material": "Data dan Peluang",
    "question": "Diberikan data 4, 5, 5, 6, 8, 8. Pilih semua pernyataan yang benar.",
    "options": [
      "Mean data adalah 6.",
      "Median data adalah 5,5.",
      "Modus data adalah 5 dan 8.",
      "Jangkauan data adalah 4.",
      "Jika nilai terakhir 8 diubah menjadi 10, mean menjadi 6,5."
    ],
    "answer": [
      0,
      1,
      2,
      3
    ],
    "explanation": "Jumlah data = 36 sehingga mean = 36/6 = 6. Median = (5+6)/2 = 5,5. Nilai 5 dan 8 masing-masing muncul dua kali sehingga keduanya merupakan modus. Jangkauan = 8−4 = 4. Jika 8 terakhir menjadi 10, jumlah menjadi 38 sehingga mean = 38/6 ≈ 6,33, bukan 6,5."
  },
  {
    "type": "PG",
    "level": "C4",
    "material": "Data dan Peluang",
    "question": "Dari 40 siswa, waktu belajar mandiri setiap hari tercatat: 6 siswa belajar 1–2 jam, 14 siswa belajar 3–4 jam, 12 siswa belajar 5–6 jam, dan 8 siswa belajar 7–8 jam. Sekolah ingin mengurangi jumlah siswa yang belajar minimal 5 jam menjadi paling banyak 15 siswa. Minimal berapa siswa dari kelompok 5–6 jam atau 7–8 jam yang perlu beralih ke kelompok 3–4 jam?",
    "options": [
      "3 siswa",
      "4 siswa",
      "5 siswa",
      "6 siswa",
      "7 siswa"
    ],
    "answer": 2,
    "explanation": "Saat ini jumlah siswa yang belajar minimal 5 jam = 12 + 8 = 20 siswa. Agar menjadi paling banyak 15 siswa, minimal harus berkurang 20 − 15 = 5 siswa."
  },
  {
    "type": "CATEGORY",
    "level": "C5",
    "material": "Data dan Peluang",
    "image": "images/q26_penjualan.png",
    "question": "Sebuah toko mencatat jumlah produk yang terjual selama lima bulan: Januari 120 unit, Februari 150 unit, Maret 135 unit, April 180 unit, dan Mei 165 unit. Tentukan apakah setiap pernyataan berikut Benar atau Salah.",
    "statements": [
      {
        "text": "Total penjualan selama lima bulan adalah 750 unit.",
        "answer": true
      },
      {
        "text": "Rata-rata penjualan per bulan adalah 150 unit.",
        "answer": true
      },
      {
        "text": "Penjualan bulan April 50% lebih tinggi daripada Januari.",
        "answer": true
      },
      {
        "text": "Agar rata-rata penjualan Januari–Juni minimal 155 unit, penjualan bulan Juni harus lebih dari 180 unit.",
        "answer": false
      }
    ],
    "explanation": "Total = 120 + 150 + 135 + 180 + 165 = 750, sehingga rata-rata = 150. April dibanding Januari meningkat 60/120 = 50%. Untuk rata-rata 155 selama enam bulan, total minimal = 930. Karena lima bulan pertama 750, Juni minimal 180 unit, bukan harus lebih dari 180 unit."
  },
  {
    "type": "PG",
    "level": "C5",
    "material": "Data dan Peluang",
    "question": "Sebuah kotak berisi 5 bola merah, 3 bola biru, dan 2 bola hijau. Dua bola diambil berturut-turut tanpa pengembalian. Peluang kedua bola memiliki warna yang sama adalah ...",
    "options": [
      "7/45",
      "12/45",
      "14/45",
      "16/45",
      "18/45"
    ],
    "answer": 2,
    "explanation": "Peluang dua merah = 5/10 × 4/9 = 20/90. Dua biru = 3/10 × 2/9 = 6/90. Dua hijau = 2/10 × 1/9 = 2/90. Total = 28/90 = 14/45."
  },
  {
    "type": "MCMA",
    "level": "C4",
    "material": "Data dan Peluang",
    "question": "Sebuah dadu bersisi enam dilempar satu kali. Pilih semua kejadian yang memiliki peluang 1/3.",
    "options": [
      "Muncul bilangan genap.",
      "Muncul bilangan prima.",
      "Muncul bilangan lebih dari 4.",
      "Muncul angka 1 atau 6.",
      "Muncul bilangan kurang dari 3."
    ],
    "answer": [
      2,
      3,
      4
    ],
    "explanation": "Peluang bilangan lebih dari 4 adalah 2/6 = 1/3. Peluang muncul 1 atau 6 adalah 2/6 = 1/3. Peluang bilangan kurang dari 3 adalah 2/6 = 1/3. Bilangan genap dan bilangan prima masing-masing memiliki peluang 3/6 = 1/2."
  },
  {
    "type": "PG",
    "level": "C5",
    "material": "Data dan Peluang",
    "question": "Dalam sebuah kelas terdapat 5 siswa laki-laki dan 4 siswa perempuan. Akan dibentuk tim beranggotakan 3 siswa dengan syarat minimal terdapat satu siswa perempuan. Setelah tim terbentuk, salah satu siswa perempuan dalam tim ditunjuk sebagai kapten. Banyak cara membentuk tim sekaligus menentukan kapten adalah ...",
    "options": [
      "80",
      "90",
      "100",
      "110",
      "120"
    ],
    "answer": 2,
    "explanation": "Pilih kapten perempuan terlebih dahulu: 4 cara. Dari 8 siswa yang tersisa, pilih 2 anggota lain dengan syarat minimal satu laki-laki. Banyak pasangan = C(8,2) − C(3,2) = 28 − 3 = 25. Jadi total cara = 4 × 25 = 100."
  },
  {
    "type": "CATEGORY",
    "level": "C5",
    "material": "Data dan Peluang",
    "image": "images/q30_survei.png",
    "question": "Dalam survei terhadap 200 siswa, diperoleh data: 80 siswa memilih Futsal, 50 memilih Basket, 40 memilih Bulu Tangkis, dan 30 memilih Renang. Tentukan apakah setiap pernyataan berikut Benar atau Salah.",
    "statements": [
      {
        "text": "Peluang seorang siswa yang dipilih secara acak memilih Futsal adalah 0,40.",
        "answer": true
      },
      {
        "text": "Peluang seorang siswa tidak memilih Futsal adalah 0,60.",
        "answer": true
      },
      {
        "text": "Jika dua siswa dipilih tanpa pengembalian, peluang keduanya memilih Futsal tepat 0,16.",
        "answer": false
      },
      {
        "text": "Jika dua siswa dipilih tanpa pengembalian, peluang minimal satu siswa memilih Futsal sekitar 0,641.",
        "answer": true
      }
    ],
    "explanation": "P(Futsal) = 80/200 = 0,40 dan P(tidak Futsal) = 120/200 = 0,60. Peluang dua siswa Futsal tanpa pengembalian = 80/200 × 79/199 = 158/995 ≈ 0,1588, bukan tepat 0,16. Peluang minimal satu Futsal = 1 − (120/200 × 119/199) ≈ 0,641."
  }
];
