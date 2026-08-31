const questions = [

  {
    question: "Sebuah mobil menempuh setengah jarak perjalanan dengan kecepatan 60 km/jam dan setengah jarak berikutnya dengan kecepatan 90 km/jam. Kecepatan rata-rata mobil adalah ....",
    image: "",
    options: [
      "70 km/jam",
      "72 km/jam",
      "75 km/jam",
      "78 km/jam",
      "80 km/jam"
    ],
    answer: 1,
    explanation: "Karena jaraknya sama, kecepatan rata-rata = 2ab/(a+b) = 2×60×90/(60+90) = 72 km/jam."
  },

  {
    question: "Sebuah segitiga siku-siku memiliki panjang sisi miring 13 cm dan salah satu sisi siku-sikunya 5 cm. Luas segitiga tersebut adalah ....",
    image: "",
    options: [
      "24 cm²",
      "28 cm²",
      "30 cm²",
      "32 cm²",
      "36 cm²"
    ],
    answer: 2,
    explanation: "Sisi lainnya = √(13²−5²)=12 cm. Luas = ½×5×12 = 30 cm²."
  },

  {
    question: "Nilai dari √144 + √81 adalah ....",
    image: "",
    options: [
      "19",
      "20",
      "21",
      "22",
      "23"
    ],
    answer: 2,
    explanation: "√144 = 12 dan √81 = 9, sehingga hasilnya 21."
  },

  {
    question: "Sebuah toko memberikan diskon 20% untuk sebuah barang seharga Rp250.000. Harga yang harus dibayar setelah diskon adalah ....",
    image: "",
    options: [
      "Rp180.000",
      "Rp190.000",
      "Rp200.000",
      "Rp210.000",
      "Rp220.000"
    ],
    answer: 2,
    explanation: "Diskon = 20%×250.000 = 50.000. Harga setelah diskon = 250.000−50.000 = Rp200.000."
  },

  {
    question: "Sebuah persegi memiliki panjang sisi 12 cm. Luas persegi tersebut adalah ....",
    image: "",
    options: [
      "124 cm²",
      "132 cm²",
      "140 cm²",
      "144 cm²",
      "156 cm²"
    ],
    answer: 3,
    explanation: "Luas persegi = sisi² = 12² = 144 cm²."
  },

  {
    question: "Nilai dari 2⁵ × 2³ adalah ....",
    image: "",
    options: [
      "2⁸",
      "2¹⁵",
      "4⁸",
      "8⁵",
      "16³"
    ],
    answer: 0,
    explanation: "Jika basis sama dikalikan, pangkat dijumlahkan: 2⁵×2³ = 2⁸."
  },

  {
    question: "Diketahui barisan aritmetika 5, 8, 11, 14, .... Suku ke-10 adalah ....",
    image: "",
    options: [
      "29",
      "30",
      "32",
      "35",
      "38"
    ],
    answer: 2,
    explanation: "U₁₀ = a+(n−1)b = 5+9×3 = 32."
  },

  {
    question: "Diketahui barisan geometri 3, 6, 12, 24, .... Suku ke-7 adalah ....",
    image: "",
    options: [
      "96",
      "128",
      "192",
      "256",
      "384"
    ],
    answer: 2,
    explanation: "U₇ = 3×2⁶ = 192."
  },

  {
    question: "Jika 3x + 5 = 20, maka nilai x adalah ....",
    image: "",
    options: [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    answer: 2,
    explanation: "3x = 15 sehingga x = 5."
  },

  {
    question: "Sebuah persegi panjang memiliki panjang 15 cm dan lebar 8 cm. Keliling persegi panjang tersebut adalah ....",
    image: "",
    options: [
      "23 cm",
      "30 cm",
      "38 cm",
      "46 cm",
      "120 cm"
    ],
    answer: 3,
    explanation: "Keliling = 2(p+l) = 2(15+8) = 46 cm."
  },

  {
    question: "Rata-rata dari data 6, 8, 10, 12, dan 14 adalah ....",
    image: "",
    options: [
      "8",
      "9",
      "10",
      "11",
      "12"
    ],
    answer: 2,
    explanation: "Jumlah data = 50. Rata-rata = 50/5 = 10."
  },

  {
    question: "Dalam sebuah kotak terdapat 3 bola merah, 4 bola biru, dan 5 bola kuning. Peluang mengambil satu bola merah adalah ....",
    image: "",
    options: [
      "1/3",
      "1/4",
      "1/5",
      "1/6",
      "1/12"
    ],
    answer: 1,
    explanation: "Jumlah bola = 3+4+5 = 12. Peluang bola merah = 3/12 = 1/4."
  },

  {
    question: "Nilai dari sin 30° adalah ....",
    image: "",
    options: [
      "0",
      "1/2",
      "√2/2",
      "√3/2",
      "1"
    ],
    answer: 1,
    explanation: "Nilai sin 30° = 1/2."
  },

  {
    question: "Persamaan garis yang memiliki gradien 2 dan melalui titik (0, 3) adalah ....",
    image: "",
    options: [
      "y = 2x + 3",
      "y = 3x + 2",
      "y = 2x − 3",
      "y = −2x + 3",
      "y = x + 3"
    ],
    answer: 0,
    explanation: "Bentuk y = mx+c. Gradien m=2 dan titik potong sumbu-y adalah 3, sehingga y=2x+3."
  },

  {
    question: "Sebuah kubus memiliki panjang rusuk 6 cm. Volume kubus tersebut adalah ....",
    image: "",
    options: [
      "36 cm³",
      "108 cm³",
      "180 cm³",
      "216 cm³",
      "324 cm³"
    ],
    answer: 3,
    explanation: "Volume kubus = s³ = 6³ = 216 cm³."
  },

  {
    question: "Jika x² − 9 = 0, maka nilai x yang memenuhi adalah ....",
    image: "",
    options: [
      "x = 3",
      "x = −3",
      "x = 9",
      "x = 3 atau x = −3",
      "x = 0"
    ],
    answer: 3,
    explanation: "x²=9 sehingga x=3 atau x=−3."
  },

  {
    question: "Harga sebuah buku Rp80.000 dinaikkan sebesar 25%. Harga buku setelah kenaikan adalah ....",
    image: "",
    options: [
      "Rp90.000",
      "Rp95.000",
      "Rp100.000",
      "Rp105.000",
      "Rp120.000"
    ],
    answer: 2,
    explanation: "Kenaikan = 25%×80.000 = 20.000. Harga baru = Rp100.000."
  },

  {
    question: "Dua buah dadu dilempar secara bersamaan. Peluang jumlah mata dadu sama dengan 7 adalah ....",
    image: "",
    options: [
      "1/12",
      "1/9",
      "1/6",
      "1/4",
      "1/3"
    ],
    answer: 2,
    explanation: "Pasangan yang jumlahnya 7 ada 6 dari total 36 kemungkinan. Peluang = 6/36 = 1/6."
  },

  {
    question: "Sebuah lingkaran memiliki jari-jari 7 cm. Jika π = 22/7, luas lingkaran adalah ....",
    image: "",
    options: [
      "44 cm²",
      "77 cm²",
      "154 cm²",
      "308 cm²",
      "616 cm²"
    ],
    answer: 2,
    explanation: "Luas = πr² = 22/7×7² = 154 cm²."
  },

  {
    question: "Seorang siswa memperoleh nilai 70, 75, 80, dan 85 pada empat ujian. Nilai minimal ujian kelima agar rata-ratanya menjadi 80 adalah ....",
    image: "",
    options: [
      "85",
      "88",
      "90",
      "92",
      "95"
    ],
    answer: 2,
    explanation: "Total nilai yang diperlukan = 5×80 = 400. Total empat nilai = 310. Nilai kelima = 400−310 = 90."
  }

];
