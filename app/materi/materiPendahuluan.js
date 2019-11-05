materiPendahulan={
        "judul": "Materi Pendahuluan",
        "materi-1":{
            "judul":"Metode Numerik dan Analisis Numerik",
            "materi":`
              <p class="ml-4">
                Analisis Numerik dan Metode Numerik merupakan dua hal yang berbeda.
                Metode Numerik adalah alogaritma menyangkut penyelesaian secara numerik 
                sedangkan Analisis Numerik adalah terapan matematika untuk menganalisa metode tersebut.
                Dalam Analisis Numerik hal utama yang ditekankan adalah analis galat dan kecepatan 
                konvergensi dari sebuah metode sehingga untuk dapat menganalis hal tersebut mahasiswa 
                harus memahami bagaimana sebuah metode numerik dilakukan.
                Metode Numerik merupakan alat untuk memecahkan masalah matematika
                yang sangat handal. Banyak permasalahan yang mustahil dapat diselesaikan secara analitik
                dapat diselesaikan secara numerik.
              </p>
              <p class="ml-4">
            ada dua macam penyelesaian masalah matematika, yaitu:
              </p>
              <p class="pl-5">
                <strong>1.</strong> secara analisis yaitu dengan menggunakan kaidah-kaidah operasi
                matematika secara formal.
              </p>
              <p class="pl-5">
                <strong>2.</strong> secara numerik yaitu dengan menggunakan metode numerik
                untuk memperoleh nilai solusi hamipran dari solusi eksak.
              </p>
              `
        },
        "materi-2":{
            "judul":"Angka Bena, Pembulatan, dan Galat",
            "materi":`
                <p>
                    <strong>Angka bena</strong> (significant figure) suatu bilangan c adalah sebarang angka yang
                    diberikan oleh c, kecuali untuk nol-nol di kiri angka tak nol pertama yang hanya bertindak untuk mencocokan posisi titik (koma) desimal.
                </p>
                <p>
                    kebanyakan komputer digital mempunyai dua cara untuk menyatakan bilangan, yaitu:
                </p>
                <p>1) Sistem titik kambang (floating point)</p>
                <p> Bilangan titik kambang dapat dituls sebagai</p>
                <p>$$a = {\\pm m \\times b^{\\pm p}}$$</p>
                <p>dengan : m=mantis(riil); b= basis sistem bilangan yang dipakai (2,8,10,16, da sebagainya); 
                dan p= pangkat (berupa bilangan bulat tak negatif).
                </p>
                <p>Contoh : $0,8234 * 10^3$</p> 
                <p>2) Sistem titik tetap (fixed-point).</p>
                <p>
                  Suatu bilangan dinyatakan dengan sejumalha tetap posisi desimal di ujung kanan,
                  tetapi sistem bilangan titk tetap tidak praktis dalam pekerjaan ilmiah karena keterbatasan rentangnya, contoh: 62,358.
                </p>
                <p>
                  Solusi yang diperoleh secara numerik merupakan nilai hampiran dari
                  solusi eksaknya. ini berarti terdapat galat(error) pada solusi hampiran
                  tersebut. <strong>Galat Numerik</strong> adalah besaran yang merupakan selisih
                  antara nilai hampiran dengan nilai eksak. Hubungan ini dirumuskan menjadi:
                </p>
                <p class='text-center'>$E_a= x - \\bar x$ atau $x = \\bar x + E_a$</p>
                <p>
                  dimana Ea adalah <strong>galat absolut (galat mutlak)</strong>, x nilai eksak, dan x nilai hampiran.
                  Galat mutlah dapat didefinisikan sebagai
                  $$|E_a|=|x- \\bar x|$$
                </p>
                <p>
                  Galat relatif dinyatakan sebagai
                  $$e_r = \\frac{galat absolut}{nilai eksak}= \\frac{E_a}{x}$$
                </p>
                <p>Ada dua jenis galat dalam komputasi, yaitu:</p>
                <p>
                  1. <strong>Galat bawaan</strong> (inherent error) adalah galat dari data yang diberikan
                  misalnya karena kesalahan pengukuran atau ketidaktelitian alat ukur.
                </p>
                <p>
                  2. <strong>Galat Proses</strong> adalah galat yang terjadi karena proses komputasi,
                      galat ini dibedakan menjadi 2 macam, yaitu:
                </p>
                <p>a) <strong>Galat Pembulatan</strong> (round-off error)</p>
                <p>Contoh: $x=\\frac{1}{3}=0,33333...$ dan $x=0,33333$</p>
                <p> Galat pembulatannya $E=0,000000333...$</p>
                <p>b) <strong>Galat Pemotongan</strong> (truncation error)</p>
                <p>Contoh: Hampiran fungsi $\\sin x$ dengan bantuan deret Taylor di sekitar $x=0$</p>
                <p>$$y=\\sin x= x-\\frac{x^3}{3}+\\frac{x^5}{5}-\\frac{x^7}{7}+...$$</p>
                <p>Deret tersebut dipotong sampai suku orde $n=3$ sehingga galat pemotonganya
                menjadi $E=\\frac{x^5}{5}-\\frac{x^7}{7}+...$
                </p>
               `
        }

}