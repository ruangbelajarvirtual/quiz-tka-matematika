const questions = [
  {
    type: "PG",
    level: "C4",
    material: "Bilangan",
    question: "Dalam sebuah simulasi TKA Matematika yang terdiri atas 30 soal, soal nomor 1–10 bernilai 2 poin untuk jawaban benar, nomor 11–20 bernilai 3 poin, dan nomor 21–30 bernilai 5 poin. Jawaban salah mendapat pengurangan 1 poin, sedangkan soal yang tidak dijawab bernilai 0. Dimas menjawab benar 7 soal, salah 2 soal, dan kosong 1 soal pada nomor 1–10; benar 6 soal, salah 3 soal, dan kosong 1 soal pada nomor 11–20; serta benar 5 soal, salah 3 soal, dan kosong 2 soal pada nomor 21–30. Seorang siswa menyatakan bahwa Dimas memperoleh nilai 60% karena menjawab benar 18 dari 30 soal. Pernyataan tersebut adalah...",
    options: [
      "Benar, karena 18 dari 30 soal berarti 60%.",
      "Benar, karena bobot soal tidak memengaruhi persentase skor.",
      "Salah, karena skor dipengaruhi bobot soal dan pengurangan akibat jawaban salah.",
      "Salah, karena skor maksimum hanya diperoleh jika seluruh soal dijawab benar tanpa memperhatikan bobot.",
      "Salah, karena jumlah jawaban salah lebih banyak daripada soal yang tidak dijawab."
    ],
    answer: 2,
    explanation: "Skor benar = 7(2)+6(3)+5(5)=57. Jumlah salah = 2+3+3=8, sehingga skor akhir = 57−8=49. Skor maksimum = 10(2)+10(3)+10(5)=100. Jadi skor Dimas adalah 49%, bukan 60%."
  },

  {
    type: "PG",
    level: "C4",
    material: "Aljabar",
    question: "Sebuah sekolah membeli buku dan pena. Harga 2 buku dan 3 pena adalah Rp23.000,00, sedangkan harga 3 buku dan 2 pena adalah Rp22.000,00. Sekolah kemudian membeli 5 buku dan 4 pena. Berapa total harga pembelian tersebut?",
    options: [
      "Rp36.000,00",
      "Rp38.000,00",
      "Rp40.000,00",
      "Rp42.000,00",
      "Rp44.000,00"
    ],
    answer: 2,
    explanation: "Misalkan harga buku = x dan harga pena = y. Dari 2x+3y=23.000 dan 3x+2y=22.000 diperoleh x=4.000 dan y=5.000. Maka 5x+4y=Rp40.000,00."
  },

  {
    type: "PG",
    level: "C4",
    material: "Data dan Peluang",
    image: "images/p3_q3_data.png",
    question: "Lima kelas mengikuti simulasi TKA. Data jumlah siswa dan persentase siswa yang mencapai minimal nilai 70 adalah: XI-A 30 siswa, 80%; XI-B 35 siswa, 60%; XI-C 40 siswa, 75%; XI-D 25 siswa, 80%; dan XI-E 50 siswa, 70%. Pernyataan yang benar adalah...",
    options: [
      "XI-E memiliki jumlah siswa dengan nilai minimal 70 paling banyak.",
      "XI-C memiliki jumlah siswa dengan nilai minimal 70 lebih banyak daripada XI-E.",
      "XI-A dan XI-D memiliki jumlah siswa dengan nilai minimal 70 yang sama.",
      "Jumlah seluruh siswa dengan nilai minimal 70 adalah 142 siswa.",
      "Lebih dari 75% seluruh peserta memperoleh nilai minimal 70."
    ],
    answer: 0,
    explanation: "Jumlah siswa minimal 70 berturut-turut adalah 24, 21, 30, 20, dan 35. Jadi XI-E paling banyak. Total 130 dari 180 siswa, sekitar 72,22%."
  },

  {
    type: "PG",
    level: "C3",
    material: "Geometri dan Pengukuran",
    question: "Sebuah sekolah membuat jalur evakuasi dari titik A menuju titik B. Jarak mendatar kedua titik adalah 24 m, sedangkan titik B berada 7 m lebih tinggi daripada titik A. Berapa panjang jalur evakuasi langsung dari A ke B?",
    options: [
      "23 m",
      "24 m",
      "25 m",
      "26 m",
      "31 m"
    ],
    answer: 2,
    explanation: "Dengan Teorema Pythagoras, AB=√(24²+7²)=√625=25 m."
  },

  {
    type: "PG",
    level: "C4",
    material: "Trigonometri",
    image: "images/p3_q5_trigonometri.png",
    question: "Seorang siswa berdiri di titik A dan mengamati puncak sebuah tiang dengan sudut elevasi 30°. Ia bergerak 20 m mendekati tiang ke titik B. Dari B, sudut elevasi menjadi 45°. Berapakah tinggi tiang?",
    options: [
      "10(√3−1) m",
      "10(√3+1) m",
      "20√3 m",
      "10√3 m",
      "20(√3+1) m"
    ],
    answer: 1,
    explanation: "Misalkan jarak B ke kaki tiang = x, maka h=x. Dari A, tan30°=x/(x+20), sehingga x=10(√3+1). Jadi tinggi tiang = 10(√3+1) m."
  },

  {
    type: "PG",
    level: "C3",
    material: "Aljabar",
    question: "Sebuah layanan transportasi menetapkan biaya awal tetap Rp8.000,00 dan biaya Rp3.500,00 untuk setiap kilometer perjalanan. Jika x menyatakan jarak perjalanan dalam kilometer, model fungsi biaya C(x) yang tepat adalah...",
    options: [
      "C(x) = 3.500x",
      "C(x) = 8.000x + 3.500",
      "C(x) = 3.500x + 8.000",
      "C(x) = 11.500x",
      "C(x) = 8.000(x + 3.500)"
    ],
    answer: 2,
    explanation: "Biaya terdiri atas biaya variabel 3.500x dan biaya tetap 8.000, sehingga C(x)=3.500x+8.000."
  },

  {
    type: "CATEGORY",
    level: "C4",
    material: "Bilangan",
    question: "Sebuah sekolah memiliki 800 siswa. Pada awal semester, 65% mengikuti program latihan TKA. Bulan berikutnya jumlah peserta meningkat 25% dari jumlah peserta awal. Setelah itu, 10% peserta berhenti. Tentukan benar atau salah setiap pernyataan berikut.",
    statements: [
      "Jumlah peserta awal adalah 520 siswa.",
      "Setelah meningkat 25%, jumlah peserta menjadi 650 siswa.",
      "Setelah 10% peserta berhenti, jumlah peserta menjadi 585 siswa.",
      "Secara keseluruhan, jumlah peserta akhir meningkat 12,5% dibandingkan jumlah awal."
    ],
    answer: [true, true, true, true],
    explanation: "Peserta awal 800(65%)=520. Setelah naik 25% menjadi 650. Setelah 10% berhenti menjadi 585. Kenaikan = 65/520=12,5%."
  },

  {
    type: "PG",
    level: "C4",
    material: "Data dan Peluang",
    question: "Nilai latihan TKA tujuh siswa adalah 60, 65, 70, 70, 75, 80, dan 90. Guru memberikan tambahan 5 poin kepada setiap siswa yang menyelesaikan remedial. Bagaimana perubahan rata-rata dan median data tersebut?",
    options: [
      "Rata-rata bertambah 5, tetapi median tetap.",
      "Rata-rata tetap, tetapi median bertambah 5.",
      "Rata-rata dan median sama-sama bertambah 5.",
      "Rata-rata bertambah 10, sedangkan median bertambah 5.",
      "Rata-rata dan median tidak berubah."
    ],
    answer: 2,
    explanation: "Jika setiap data ditambah bilangan yang sama, rata-rata dan median juga bertambah sebesar bilangan tersebut, yaitu 5."
  },

  {
    type: "PG",
    level: "C4",
    material: "Geometri dan Pengukuran",
    image: "images/p3_q9_luas_gabungan.png",
    question: "Sebuah taman sekolah berbentuk persegi panjang 20 m × 14 m. Pada salah satu ujung taman terdapat kolam berbentuk setengah lingkaran berdiameter 14 m. Jika π=22/7, berapakah luas area taman yang dapat ditanami?",
    options: [
      "154 m²",
      "175 m²",
      "189 m²",
      "203 m²",
      "217 m²"
    ],
    answer: 3,
    explanation: "Luas taman=20×14=280 m². Jari-jari kolam=7 m. Luas setengah lingkaran=1/2×22/7×7²=77 m². Jadi area tanaman=280−77=203 m²."
  },

  {
    type: "PG",
    level: "C5",
    material: "Data dan Peluang",
    question: "Dalam suatu kelas terdapat 12 siswa yang mengikuti klub Matematika, 10 mengikuti klub Sains, 5 mengikuti kedua klub, dan 8 tidak mengikuti kedua klub. Jika dua siswa dipilih secara acak, berapakah peluang bahwa tepat satu dari dua siswa yang terpilih merupakan siswa yang mengikuti tepat satu klub?",
    options: [
      "6/25",
      "12/25",
      "13/25",
      "14/25",
      "17/25"
    ],
    answer: 2,
    explanation: "Yang hanya mengikuti Matematika=12−5=7 dan hanya mengikuti Sains=10−5=5, sehingga 12 siswa mengikuti tepat satu klub. Siswa lainnya=25−12=13. Peluang tepat satu dari dua siswa berasal dari kelompok tersebut = 12×13/C(25,2)=156/300=13/25."
  },

  {
    type: "PG",
    level: "C4",
    material: "Aljabar",
    question: "Keuntungan suatu produk dimodelkan oleh P(x) = −2x² + 80x − 300, dengan x menyatakan jumlah produk yang terjual. Agar keuntungan maksimum, berapa banyak produk yang harus terjual?",
    options: [
      "10",
      "15",
      "20",
      "25",
      "30"
    ],
    answer: 2,
    explanation: "Untuk fungsi kuadrat P(x)=ax²+bx+c, absis titik puncak adalah x=−b/(2a). Jadi x=−80/[2(−2)]=20."
  },

  {
    type: "PG",
    level: "C4",
    material: "Trigonometri",
    image: "images/p3_q12_aturan_cosinus.png",
    question: "Pada segitiga ABC diketahui AC = 40m, BC = 30m, dan ∠C = 60°. Berapakah panjang AB?",
    options: [
      "10√10 m",
      "10√13 m",
      "20√3 m",
      "30√2 m",
      "50 m"
    ],
    answer: 1,
    explanation: "Dengan aturan kosinus, AB²=40²+30²−2(40)(30)cos60°=1600+900−1200=1300. Jadi AB=10√13 m."
  },

  {
    type: "PG",
    level: "C4",
    material: "Geometri dan Pengukuran",
    image: "images/p3_q13_transformasi.png",
    question: "Titik C(6,7) ditranslasikan 3 satuan ke kiri dan 2 satuan ke bawah. Hasilnya kemudian direfleksikan terhadap sumbu-x. Koordinat akhirnya adalah...",
    options: [
      "(3,−5)",
      "(3,5)",
      "(−3,5)",
      "(−3,−5)",
      "(5,−3)"
    ],
    answer: 0,
    explanation: "Setelah translasi, C menjadi (3,5). Refleksi terhadap sumbu-x mengubah (x,y) menjadi (x,−y), sehingga diperoleh (3,−5)."
  },

  {
    type: "CATEGORY",
    level: "C5",
    material: "Data dan Peluang",
    question: "Dua kelompok siswa memiliki data nilai sebagai berikut. Kelompok A: 60, 65, 70, 75, 80. Kelompok B: 50, 60, 70, 80, 90. Tentukan benar atau salah setiap pernyataan berikut.",
    statements: [
      "Rata-rata kedua kelompok sama.",
      "Median kedua kelompok sama.",
      "Jangkauan kelompok B dua kali jangkauan kelompok A.",
      "Kelompok A memiliki penyebaran data lebih besar daripada kelompok B."
    ],
    answer: [true, true, true, false],
    explanation: "Rata-rata A dan B sama-sama 70. Median keduanya 70. Jangkauan A=80−60=20, sedangkan B=90−50=40, sehingga jangkauan B dua kali A. Jadi pernyataan terakhir salah."
  },

  {
    type: "PG",
    level: "C4",
    material: "Aljabar",
    image: "images/p3_q15_program_linear.png",
    question: "Sebuah usaha membuat dua jenis paket. Paket A membutuhkan 2 lembar bahan dan 1 menit pengerjaan, sedangkan Paket B membutuhkan 1 lembar bahan dan 3 menit pengerjaan. Tersedia paling banyak 80 lembar bahan dan 90 menit pengerjaan. Jika x dan y masing-masing menyatakan banyak Paket A dan B, berapa jumlah maksimum paket yang dapat dibuat?",
    options: [
      "30",
      "35",
      "40",
      "45",
      "50"
    ],
    answer: 4,
    explanation: "Kendala: 2x+y≤80 dan x+3y≤90. Titik potong kedua garis diperoleh x=30 dan y=20. Jumlah paket=30+20=50."
  },

  {
    type: "PG",
    level: "C3",
    material: "Bilangan",
    question: "Sebuah pola jumlah peserta latihan TKA bertambah secara teratur: 12, 16, 20, 24, ... Jika pola tersebut berlanjut, berapa jumlah peserta pada hari ke-10?",
    options: [
      "40",
      "44",
      "48",
      "52",
      "56"
    ],
    answer: 2,
    explanation: "Barisan aritmetika dengan suku pertama 12 dan beda 4. Suku ke-10 = 12+(10−1)4=48."
  },

  {
    type: "PG",
    level: "C3",
    material: "Geometri dan Pengukuran",
    image: "images/p3_q17_volume.png",
    question: "Sebuah gudang berbentuk balok berukuran 40 m × 30 m × 20 m. Gudang akan diisi kubus-kubus kecil dengan panjang rusuk 5 m. Jika seluruh ruang diisi tanpa sisa, berapa banyak kubus kecil yang diperlukan?",
    options: [
      "96",
      "144",
      "160",
      "192",
      "240"
    ],
    answer: 3,
    explanation: "Volume balok = 40×30×20 = 24.000 m³. Volume satu kubus=5³=125 m³. Banyak kubus=24.000/125=192."
  },

  {
    type: "PG",
    level: "C4",
    material: "Data dan Peluang",
    question: "Hasil survei waktu belajar 40 siswa per hari ditampilkan dalam tabel berikut: kurang dari 1 jam = 6 siswa; 1–2 jam = 14 siswa; 2–3 jam = 12 siswa; lebih dari 3 jam = 8 siswa. Berapa persentase siswa yang belajar minimal 2 jam per hari?",
    options: [
      "40%",
      "45%",
      "48%",
      "50%",
      "55%"
    ],
    answer: 3,
    explanation: "Siswa yang belajar minimal 2 jam=12+8=20 siswa. Persentase=20/40×100%=50%."
  },

  {
    type: "CATEGORY",
    level: "C5",
    material: "Bilangan",
    question: "Rina menabung Rp2.000.000,00 dengan bunga majemuk 5% per tahun. Tentukan benar atau salah setiap pernyataan berikut.",
    statements: [
      "Setelah satu tahun, tabungan menjadi Rp2.100.000,00.",
      "Setelah dua tahun, tabungan menjadi Rp2.205.000,00.",
      "Total pertambahan tabungan selama dua tahun adalah Rp205.000,00.",
      "Pertambahan pada tahun kedua lebih besar daripada pertambahan pada tahun pertama."
    ],
    answer: [true, true, true, true],
    explanation: "Tahun pertama=2.000.000(1,05)=2.100.000. Tahun kedua=2.100.000(1,05)=2.205.000. Pertambahan total=205.000. Pertambahan tahun kedua=105.000, lebih besar daripada 100.000 pada tahun pertama."
  },

  {
    type: "PG",
    level: "C4",
    material: "Aljabar",
    question: "Diketahui f(x) = 2x + 5 dan g(x) = 3x − 4. Jika x = 10, berapakah nilai f(g(x))?",
    options: [
      "51",
      "55",
      "57",
      "61",
      "71"
    ],
    answer: 2,
    explanation: "g(10)=3(10)−4=26. Kemudian f(26)=2(26)+5=57. Jadi f(g(10))=57."
  },

  {
    type: "PG",
    level: "C4",
    material: "Data dan Peluang",
    question: "Dalam survei terhadap 200 siswa, 35% mengikuti kegiatan olahraga dan 20% mengikuti kegiatan musik. Dari siswa yang mengikuti olahraga, 40% juga mengikuti musik. Berapa persentase siswa yang mengikuti setidaknya salah satu dari kedua kegiatan tersebut?",
    options: [
      "38%",
      "41%",
      "45%",
      "49%",
      "55%"
    ],
    answer: 1,
    explanation: "Olahraga=35%, musik=20%. Yang mengikuti keduanya=40%×35%=14%. Dengan prinsip inklusi-eksklusi, persentase gabungan=35%+20%−14%=41%."
  },

  {
    type: "PG",
    level: "C4",
    material: "Geometri dan Pengukuran",
    image: "images/p3_q22_kesebangunan.png",
    question: "Sebuah tongkat setinggi 1,2 m memiliki bayangan sepanjang 1,6 m. Pada waktu yang sama, sebuah pohon memiliki bayangan sepanjang 12 m. Berapakah tinggi pohon tersebut?",
    options: [
      "7,2 m",
      "8 m",
      "9 m",
      "9,6 m",
      "10,4 m"
    ],
    answer: 2,
    explanation: "Karena sudut datang cahaya sama, segitiga sebangun. Tinggi pohon/12=1,2/1,6=3/4. Jadi tinggi pohon=12×3/4=9 m."
  },

  {
    type: "PG",
    level: "C5",
    material: "Trigonometri",
    image: "images/p3_q23_mercusuar.png",
    question: "Sebuah mercusuar berada di titik A dan sebuah perahu berada di titik P. Dari titik A, sudut elevasi terhadap perahu adalah 30°. Titik B berada 100 m dari A pada garis pantai, dan dari B sudut elevasi terhadap perahu adalah 45°. Jika P berada di sisi yang sama terhadap garis AB sehingga ∠APB=105°, tentukan jarak AP.",
    options: [
      "50(√3−1) m",
      "50(√3+1) m",
      "50√2 m",
      "100(√3−1) m",
      "100√3 m"
    ],
    answer: 3,
    explanation: "Dengan aturan sinus pada segitiga ABP: AP/sin45° = AB/sin105°. Maka AP = 100(sin45°/sin105°) = 100(√3−1) m. Jadi jawaban yang benar adalah opsi D."
  },

  {
    type: "CATEGORY",
    level: "C5",
    material: "Data dan Peluang",
    question: "Dua kelompok siswa memiliki data nilai sebagai berikut. Kelompok A: 65, 70, 70, 75, 80. Kelompok B: 55, 65, 70, 75, 85. Tentukan benar atau salah setiap pernyataan berikut.",
    statements: [
      "Rata-rata kelompok A dan B sama.",
      "Median kedua kelompok sama.",
      "Jangkauan kelompok B lebih besar daripada kelompok A.",
      "Kelompok A lebih konsisten daripada kelompok B jika konsistensi dibandingkan berdasarkan jangkauan."
    ],
    answer: [false, true, true, true],
    explanation: "Rata-rata A=72 dan rata-rata B=70, sehingga tidak sama. Median keduanya=70. Jangkauan A=15 dan B=30, sehingga B lebih besar. Berdasarkan jangkauan, A lebih konsisten."
  },

  {
    type: "PG",
    level: "C4",
    material: "Aljabar",
    question: "Suhu Celsius x dan Fahrenheit f(x) dihubungkan oleh f(x) = 9/5 x + 32. Jika suhu yang terbaca adalah 95°F, berapakah suhu tersebut dalam Celsius?",
    options: [
      "30°C",
      "32°C",
      "35°C",
      "37°C",
      "40°C"
    ],
    answer: 2,
    explanation: "Fungsi invers diperoleh dari x=5/9(y−32). Untuk 95°F, x=5/9(95−32)=5/9×63=35°C. Jadi f⁻¹(95)=35."
  },

  {
    type: "PG",
    level: "C4",
    material: "Aljabar",
    question: "Sebuah toko menghitung biaya awal suatu pesanan dengan fungsi f(x) = 4.000x + 8.000, dengan x menyatakan jumlah barang. Setelah itu dikenakan biaya tambahan melalui fungsi g(y) = 1,1y + 2.000. Jika x menyatakan jumlah barang, fungsi yang langsung memberikan biaya akhir adalah...",
    options: [
      "4400x+10000",
      "4400x+10800",
      "4400x+11000",
      "4800x+10000",
      "4800x+11000"
    ],
    answer: 1,
    explanation: "Biaya akhir adalah (g∘f)(x)=g(f(x))=1,1(4.000x+8.000)+2.000=4.400x+8.800+2.000=4.400x+10.800."
  },

  {
    type: "PG",
    level: "C4",
    material: "Geometri dan Pengukuran",
    question: "Sebuah balok berukuran panjang 12 m, lebar 9 m, dan tinggi 20 m. Berapakah panjang diagonal ruang balok tersebut?",
    options: [
      "21 m",
      "23 m",
      "25 m",
      "27 m",
      "29 m"
    ],
    answer: 2,
    explanation: "Diagonal ruang d=√(12²+9²+20²)=√(144+81+400)=√625=25 m."
  },

  {
    type: "PG",
    level: "C3",
    material: "Trigonometri",
    question: "Jika θ merupakan sudut lancip dan sin θ = 3/5, berapakah nilai cos θ + tan θ?",
    options: [
      "19/20",
      "23/20",
      "29/20",
      "31/20",
      "7/4"
    ],
    answer: 3,
    explanation: "Karena θ lancip dan sinθ = 3/5, maka cosθ = 4/5 dan tanθ = 3/4. Jadi cosθ + tanθ = 4/5+3/4 = 16/20 + 15/20 = 31/20."
  },

  {
    type: "CATEGORY",
    level: "C5",
    material: "Data dan Peluang",
    question: "Dalam survei terhadap 400 siswa, 45% menyukai Matematika, 35% menyukai Sains, dan 20% menyukai keduanya. Tentukan benar atau salah setiap pernyataan berikut.",
    statements: [
      "Jumlah siswa yang menyukai Matematika adalah 180 siswa.",
      "Jumlah siswa yang menyukai Sains adalah 140 siswa.",
      "Jumlah siswa yang menyukai kedua mata pelajaran adalah 80 siswa.",
      "Jumlah siswa yang menyukai setidaknya salah satu dari kedua mata pelajaran adalah 240 siswa."
    ],
    answer: [true, true, true, true],
    explanation: "Matematika=45%×400=180. Sains=35%×400=140. Keduanya=20%×400=80. Gabungan=180+140−80=240 siswa."
  },

  {
    type: "CATEGORY",
    level: "C5",
    material: "Aljabar",
    image: "images/p3_q30_fungsi_kuadrat.png",
    question: "Banyak permintaan suatu kegiatan sekolah dimodelkan dengan D(x) = 80x − x², dengan D(x) dalam satuan ratusan ribu rupiah dan x menyatakan banyaknya kegiatan. Tentukan benar atau salah setiap pernyataan berikut.",
    statements: [
      "Nilai D(x) maksimum terjadi saat x = 40.",
      "Nilai maksimum D(x) adalah 1.600 satuan ratusan ribu rupiah.",
      "Nilai D(20) adalah 1.200 satuan ratusan ribu rupiah.",
      "Nilai D(60) lebih besar daripada D(20)."
    ],
    answer: [true, true, true, false],
    explanation: "D(x)=80x−x² memiliki titik puncak pada x=−80/[2(−1)]=40. D(40)=3.200−1.600=1.600. D(20)=1.600−400=1.200 dan D(60)=4.800−3.600=1.200, sehingga D(60) tidak lebih besar daripada D(20)."
  }
];
