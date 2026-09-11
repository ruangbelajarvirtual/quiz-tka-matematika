const questions = [
  {
    type: "PG",
    level: "C4",
    material: "Bilangan",
    question: "Dalam sebuah simulasi TKA Matematika yang terdiri atas 30 soal, soal nomor 1–10 bernilai 2 poin untuk jawaban benar, nomor 11–20 bernilai 3 poin, dan nomor 21–30 bernilai 5 poin. Jawaban salah bernilai −1 poin, sedangkan soal yang tidak dijawab bernilai 0. Hasil Dimas: soal 1–10 = 7 benar, 2 salah, 1 tidak dijawab; soal 11–20 = 6 benar, 3 salah, 1 tidak dijawab; soal 21–30 = 5 benar, 3 salah, 2 tidak dijawab. Dimas mengatakan, \"Karena saya menjawab benar 18 soal dari 30 soal, berarti skor saya pasti 60% dari skor maksimum.\" Manakah penilaian yang paling tepat?",
    options: [
      "Benar, karena 18 dari 30 soal berarti 60%.",
      "Benar, karena bobot soal tidak memengaruhi persentase skor.",
      "Salah, karena skor dipengaruhi bobot soal dan pengurangan akibat jawaban salah.",
      "Salah, karena skor maksimum hanya diperoleh jika seluruh soal dijawab benar tanpa memperhatikan bobot.",
      "Salah, karena jumlah jawaban salah lebih banyak daripada soal yang tidak dijawab."
    ],
    answer: 2,
    explanation: "Skor benar = 7(2)+6(3)+5(5)=57. Jumlah salah = 8, sehingga skor akhir = 49. Skor maksimum = 10(2)+10(3)+10(5)=100. Jadi skor Dimas adalah 49%, bukan 60%."
  },
  {
    type: "PG",
    level: "C4",
    material: "Aljabar",
    question: "Sebuah sekolah membeli buku dan pena. Harga 2 buku dan 3 pena adalah Rp23.000,00, sedangkan harga 3 buku dan 2 pena adalah Rp22.000,00. Sekolah kemudian membutuhkan 5 buku dan 4 pena. Biaya yang harus dibayar adalah ...",
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
    question: "Lima kelas mengikuti simulasi TKA. XI-A: 30 siswa, 80% mencapai minimal 70; XI-B: 35 siswa, 60%; XI-C: 40 siswa, 75%; XI-D: 25 siswa, 80%; XI-E: 50 siswa, 70%. Pernyataan yang paling tepat adalah ...",
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
    question: "Sebuah sekolah membuat jalur evakuasi dari titik A menuju titik B. Jarak mendatar kedua titik adalah 24 m, sedangkan titik B berada 7 m lebih tinggi daripada titik A. Panjang jalur lurus minimum dari A ke B adalah ...",
    options: [
      "23 m",
      "24 m",
      "25 m",
      "26 m",
      "31 m"
    ],
    answer: 2,
    explanation: "AB=√(24²+7²)=√625=25 m."
  },
  {
    type: "PG",
    level: "C4",
    material: "Trigonometri",
    question: "Seorang siswa berdiri di titik A dan mengamati puncak sebuah tiang dengan sudut elevasi 30°. Ia bergerak 20 m mendekati tiang ke titik B. Dari B, sudut elevasi menjadi 45°. Tinggi mata diabaikan. Tinggi tiang adalah ...",
    options: [
      "10(√3−1) m",
      "10(√3+1) m",
      "20√3 m",
      "10√3 m",
      "20(√3+1) m"
    ],
    answer: 1,
    explanation: "Misalkan jarak B ke kaki tiang = x. Dari B, h=x. Dari A, 1/√3=x/(x+20), sehingga x=10(√3+1). Jadi tinggi tiang = 10(√3+1) m."
  },
  {
    type: "PG",
    level: "C3",
    material: "Aljabar",
    question: "Sebuah layanan transportasi menetapkan biaya awal tetap Rp8.000,00 dan biaya Rp3.500,00 untuk setiap kilometer perjalanan. Jika x menyatakan jarak perjalanan dalam kilometer dan C(x) biaya perjalanan, model fungsi yang tepat adalah ...",
    options: [
      "C(x)=3.500x",
      "C(x)=8.000x+3.500",
      "C(x)=3.500x+8.000",
      "C(x)=11.500x",
      "C(x)=8.000(x+3.500)"
    ],
    answer: 2,
    explanation: "Biaya terdiri atas biaya variabel 3.500x dan biaya tetap 8.000, sehingga C(x)=3.500x+8.000."
  },
  {
    type: "CATEGORY",
    level: "C4",
    material: "Bilangan",
    question: "Sebuah sekolah memiliki 800 siswa. Pada awal semester, 65% mengikuti program latihan TKA. Bulan berikutnya jumlah peserta meningkat 25% dari jumlah peserta awal. Setelah itu, 10% dari peserta tersebut berhenti. Tentukan Benar atau Salah.",
    statements: [
      "Jumlah peserta awal adalah 520 siswa.",
      "Setelah meningkat 25%, jumlah peserta menjadi 650 siswa.",
      "Setelah 10% peserta berhenti, jumlah peserta menjadi 585 siswa.",
      "Secara keseluruhan, jumlah peserta akhir meningkat 12,5% dibandingkan jumlah awal."
    ],
    answer: [true, true, true, true],
    explanation: "Peserta awal 800(65%)=520. Setelah naik 25% menjadi 650. Setelah 10% berhenti menjadi 585. Kenaikan 65/520=12,5%."
  },
  {
    type: "PG",
    level: "C4",
    material: "Data dan Peluang",
    question: "Nilai latihan TKA tujuh siswa adalah 60, 65, 70, 70, 75, 80, dan 90. Guru memberikan tambahan 5 poin kepada setiap siswa yang menyelesaikan remedial. Pernyataan yang benar adalah ...",
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
    question: "Sebuah taman sekolah berbentuk persegi panjang 20 m × 14 m. Pada salah satu ujung taman terdapat kolam berbentuk setengah lingkaran berdiameter 14 m. Bagian selain kolam digunakan sebagai area tanaman. Gunakan π=22/7. Luas area tanaman adalah ...",
    options: [
      "154 m²",
      "175 m²",
      "189 m²",
      "203 m²",
      "217 m²"
    ],
    answer: 3,
    explanation: "Luas taman=280 m². Jari-jari kolam 7 m, luas setengah lingkaran=77 m². Jadi area tanaman=280−77=203 m²."
  },
  {
    type: "PG",
    level: "C5",
    material: "Data dan Peluang",
    question: "Dalam suatu kelas terdapat 12 siswa yang mengikuti klub Matematika, 10 mengikuti klub Sains, 5 mengikuti kedua klub, dan 8 tidak mengikuti kedua klub. Dua siswa dipilih acak tanpa pengembalian. Peluang tepat satu dari dua siswa terpilih merupakan siswa yang mengikuti tepat satu klub adalah ...",
    options: [
      "6/25",
      "12/25",
      "13/25",
      "14/25",
      "17/25"
    ],
    answer: 2,
    explanation: "Yang hanya Matematika=7 dan hanya Sains=5, jadi 12 siswa mengikuti tepat satu klub; 13 siswa lainnya tidak. Banyak pasangan seluruhnya C(25,2)=300. Pasangan yang terdiri atas satu dari 12 dan satu dari 13 adalah 156. Peluang=156/300=13/25."
  },
