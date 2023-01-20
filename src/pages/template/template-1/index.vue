<template>
  <main class="app">
    <div v-if="isOpen === false">
      <section id="to">
        <div
          data-aos="zoom-in"
          class="p-4 rounded-3 shadow-sm m-3 text-center"
          style="background-color: #f8f8f899"
        >
          <h1 class="font-2 mb-5" style="color: #65741f">Wedding Invitation</h1>
          <div class="img">
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="/depan.png"
              alt="logo"
              class="img-to"
            />
          </div>
          <h5
            data-aos="zoom-in"
            data-aos-delay="500"
            style="color: #1b1b1b"
            class="mt-5"
          >
            <i>Dear,</i>
          </h5>
          <h3
            style="text-transform: uppercase"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            {{ route.query.to }}
          </h3>
          <button
            @click="openInvite()"
            class="btn btn-outline-secondary mt-4"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            Buka Undangan
          </button>
        </div>
      </section>
    </div>

    <div v-if="isOpen === true">
      <section id="music">
        <div v-if="myaudio">
          <audio loop autoplay>
            <source src="/songs.mp3" />
          </audio>
        </div>
      </section>
      <section id="home">
        <div class="containers abs">
          <div class="text-center">
            <div data-aos="fade-down" data-aos-duration="1000">
              <div
                class="p-4 rounded-3 mt-2 mx-3 shadow"
                style="background-color: #f8f8f8d7"
              >
                <h5 class="card-title cal fs-2">The Wedding of</h5>
                <h1 class="font-2">Sidna & Ariesty</h1>
                <small class="card-text"
                  >Kepada Bapak/Ibu/Saudara/i
                  <span style="text-transform: uppercase; font-weight: bold">{{
                    route.query.to
                  }}</span>
                  di tempat</small
                >
                <p class="card-text">
                  Izinkan kami mengundang Anda dalam acara kami
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="img">
          <img src="/we.jpg" class="card-img img1" />
        </div>
      </section>
      <section id="dalil">
        <div class="text-center my-5 dalil-container">
          <div class="img">
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="/flower-1.png"
              alt="flower"
              class="abs img3"
            />
          </div>
          <div class="img">
            <img
              data-aos="zoom-in"
              src="/flower-1.png"
              alt="flower"
              class="abs img4"
            />
          </div>
          <div
            class="p-4 rounded-3 mx-3 shadow-sm"
            style="background-color: #f8f8f899"
          >
            <h2 class="card-title font-2" data-aos="flip-right">Ar-Rum : 21</h2>
            <p class="mt-3 arabic" data-aos="flip-right">
              وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
              لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً
              وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
            </p>
            <p data-aos="flip-right">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir"
            </p>
          </div>
        </div>
      </section>
      <section id="we">
        <div class="container">
          <div
            class="card mb-3 mx-5"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <div class="row g-0">
              <div class="col-md-4">
                <img src="/sidna.jpg" class="img-fluid rounded" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body text-center p-0 mt-4 mb-2">
                  <p>🤴</p>
                  <h1 class="card-title cal">Sidna Muhammad Zen</h1>
                  <small>Putra Dari</small>
                  <h5 class="card-text font-2">
                    Bpk. Akhmad Faozi & Ibu. Heriyanti
                  </h5>
                  <p class="card-text">
                    Jl. Mawardi RT.02, RW.01 desa Adiwerna, Kec.
                    Adiwerna,Kab.Tegal
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="card mb-3 mx-5"
            data-aos="flip-right"
            data-aos-duration="1500"
          >
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body text-center p-0 mt-4 mb-2">
                  <p>👸</p>
                  <h1 class="card-title cal">Ariesty Rizky Aliefia</h1>
                  <small>Putri Dari</small>
                  <h5 class="card-text font-2">
                    Bpk. Imam Santoso<span style="font-size: small">(alm)</span>
                    & Ibu. Widiyanti
                  </h5>
                  <p class="card-text">
                    Jl.Sawo Gang 1 Rt/RW 04/02 Kel.Procot Kec.Slawi Kab.Tegal
                  </p>
                </div>
              </div>
              <div class="col-md-4">
                <img src="/fia.jpg" class="img-fluid rounded" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="schedule">
        <div class="text-center">
          <div class="img">
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="/flower-3-copy.png"
              alt="flower"
              class="abs img7"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="/flower-3.png"
              alt="flower"
              class="abs img6"
            />
          </div>
          <div
            class="p-4 rounded-3 shadow-sm mt-2 mx-3"
            style="background-color: #f8f8f899"
          >
            <div>
              <h3 class="mt-3 mb-0 cal" data-aos="fade-right">Akad</h3>
              <div>
                <small class="m-0" data-aos="flip-left">
                  <i class="bi bi-calendar4-event"></i> Minggu, 12 Maret 2023
                </small>
              </div>
              <div>
                <small class="m-0" data-aos="flip-left">
                  <i class="bi bi-clock"></i> 08.00 WIB
                </small>
              </div>
              <div>
                <small class="m-0" data-aos="flip-left">
                  <i class="bi bi-geo-alt"></i>Kediaman mempelai wanita
                </small>
              </div>
            </div>
            <div class="mt-5">
              <p class="" data-aos="fade-right">
                Turut mengundang Bapak/Ibu/Saudara/i
                <strong style="text-transform: uppercase">{{
                  route.query.to
                }}</strong>
                pada acara :
              </p>
              <h1 class="cal mt-3 mb-1" data-aos="fade-right">Resepsi</h1>
              <p class="m-0" data-aos="flip-left">
                <i class="bi bi-calendar4-event"></i> Minggu, 12 Maret 2023
              </p>
              <p class="m-0" data-aos="flip-left">
                <i class="bi bi-clock"></i> 11.00 WIB-Selesai
              </p>
              <p class="m-0" data-aos="flip-left">
                <i class="bi bi-geo-alt"></i> Jl.Sawo Gang 1 RT/RW 04/02
                Kel.Procot Kec.Slawi Kab.Tegal
              </p>
              <a
                class="btn btn-secondary mt-3"
                href="https://goo.gl/maps/tpR4QbCKZdaKbAvs9"
                target="_blank"
              >
                <i class="bi bi-geo-fill"></i> lihat lokasi di maps
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="presensi">
        <!-- Button trigger modal -->
        <div class="text-center m-4">
          <button
            type="button"
            data-aos="zoom-in"
            class="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <i class="bi bi-file-text"></i> <br />
            Konfirmasi Kehadiran
          </button>
        </div>

        <section id="countdown" class="text-center">
          <div
            class="p-4 rounded-3 shadow-sm m-3 text-center"
            style="background-color: #f8f8f899"
          >
            <h1 class="cal" data-aos="flip-down">Menuju Acara</h1>
            <hr class="hr-1 mb-4" data-aos="zoom-in" />
            <div class="row">
              <div class="col-3" data-aos="flip-right">
                <div
                  class="p-3 rounded-3 shadow-sm mb-2"
                  style="background-color: #fce592"
                >
                  <h1>{{ menuju_halal.days }}</h1>
                </div>
                <h5>Hari</h5>
              </div>
              <div class="col-3" data-aos="flip-right" data-aos-delay="200">
                <div
                  class="p-3 rounded-3 shadow-sm mb-2"
                  style="background-color: #fce592"
                >
                  <h1>{{ menuju_halal.hours }}</h1>
                </div>
                <h5>Jam</h5>
              </div>
              <div class="col-3" data-aos="flip-right" data-aos-delay="300">
                <div
                  class="p-3 rounded-3 shadow-sm mb-2"
                  style="background-color: #fce592"
                >
                  <h1>{{ menuju_halal.minutes }}</h1>
                </div>
                <h5>Menit</h5>
              </div>
              <div class="col-3" data-aos="flip-right" data-aos-delay="400">
                <div
                  class="p-3 rounded-3 shadow-sm mb-2"
                  style="background-color: #fce592"
                >
                  <h1>{{ menuju_halal.seconds }}</h1>
                </div>
                <h5>Detik</h5>
              </div>
            </div>
          </div>
        </section>
        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  apakah anda akan hadir?
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body p-2">
                <div v-if="isMengisi">
                  <div v-if="form.isHadir">
                    <div class="text-center" id="qrcode-download">
                      <h5>
                        Terima Kasih {{ form.nama }} sudah mau hadir.✨✨✨
                        <br />
                        Ditunggu yaaa
                      </h5>
                      <img
                        :src="
                          qrcode +
                          form.nama +
                          spare +
                          form.asal +
                          spare +
                          form.sebagai
                        "
                        alt="qrnama"
                        class="my-3"
                      />
                      <br />
                      <small
                        >simpan atau download QR Code diatas untuk mendapatkan
                        Souvenir menarik</small
                      >
                      <br />
                      <!-- <button @click.prevent="exportPdf">Download QR</button> -->
                    </div>
                  </div>
                  <div v-else>yaaahhh sayang banget</div>
                </div>
                <div v-else>
                  <form>
                    <div class="mb-3">
                      <input
                        v-model="form.nama"
                        type="text"
                        class="form-control"
                        placeholder="Nama"
                      />
                    </div>
                    <div class="mb-3">
                      <input
                        v-model="form.asal"
                        type="text"
                        class="form-control"
                        placeholder="Asal/Alamat"
                      />
                    </div>
                    <select
                      v-model="form.sebagai"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option value="" disabled selected>
                        Datang Sebagai...
                      </option>
                      <option value="Kerabat Ariesty R. Aliefia">
                        Kerabat Ariesty R. Aliefia
                      </option>
                      <option value="Kerabat Sidna M. Zen">
                        Kerabat Sidna M. Zen
                      </option>
                    </select>
                  </form>
                </div>
              </div>
              <div class="modal-footer text-center">
                <div v-if="isMengisi">
                  <button
                    type="button"
                    class="btn btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                  >
                    Baiklah
                  </button>
                </div>
                <div v-else>
                  <button
                    type="button"
                    @click.prevent="kehadiran(false)"
                    class="btn btn btn-outline-secondary"
                  >
                    😔 Saya Tidak Hadir
                  </button>
                  &nbsp;&nbsp;
                  <button
                    type="button"
                    @click.prevent="kehadiran(true)"
                    class="btn btn btn-outline-secondary"
                  >
                    🥳 Saya Hadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="qrcode" data-aos="flip-right">
        <div class="text-center">
          <div class="qrcode-down">
            <img
              :src="
                qrcode + form.nama + spare + form.asal + spare + form.sebagai
              "
              alt="qrnama"
              class="m-3 rounded-3 shadow"
            />
          </div>
          <div>
            <p>
              Belum lengkap rasanya apabila kebahagiaan ini tidak tersimpan
              dalam bentuk kenangan indah. Perlihatkan QRCode diatas pada
              penerima tamu untuk mendapatkan Souvenir menarik. <br />
              <strong>Terima Kasih 🙏 </strong>
            </p>
          </div>
        </div>
      </section>
      <section id="Story">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="500"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/kita.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/kita1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/kita2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/kita3.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/kita3.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="img">
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="/flower-2.png"
              alt="flower"
              class="abs img6"
            />
            <img
              data-aos="zoom-in"
              data-aos-delay="300"
              src="/flower-2-copy.png"
              alt="flower"
              class="abs img7"
            />
          </div>
          <div
            class="p-4 rounded-3 m-4 shadow-sm"
            style="background-color: #f8f8f899"
          >
            <h1 data-aos="fade-down" class="card-title cal">Our Story</h1>
            <hr class="hr-1" />
            <div data-aos="fade-right">
              <h3 class="mt-5 mb-0 cal">First Impresion</h3>
              <p class="m-0">22-02-22</p>
              <p class="card-text">
                Kisah ini berawal dari pertemuan kami sebagai kawan kerja di
                sebuah restoran kecil di jantung Kab. Tegal. Canda, tawa,
                berbagi kisah menjadi pendekat kami diawal perjumpaan.
              </p>
            </div>
            <div data-aos="fade-left">
              <h3 class="mt-5 mb-0 cal">Engagement</h3>
              <p class="m-0">11-12-22</p>
              <p class="card-text">
                Perkenalan kami membawa pada keseriusan hubungan hingga kami
                sepakat untuk melangsungkan acara Khitbah pada Minggu, 12
                Desember 2022
              </p>
            </div>
            <div data-aos="fade-right">
              <h3 class="mt-5 mb-0 cal">Finally</h3>
              <p class="m-0">12-03-23</p>
              <p class="card-text">
                12 Maret 2022, akan menjadi sejarah dalam kehidupan kami berdua
                sebagai titik dimulainya kehidupan baru. Doakan kami agar dapat
                mengarungi bahtera rumah tangga hingga sampai di
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div class="img p-3 text-center" data-aos="zoom-in">
          <img src="/akhir.jpg" class="card-img img5 shadow" />
        </div>
        <div
          class="text-center mt-2 mb-4 mx-3"
          data-aos="fade-up"
          style="height: 7vh"
        >
          <p class="card-text">
            Kesan yang mendalam akan terukir dihati kami, serta diiringi ucapan
            terima kasih yang tulus, kepada Bapak/Ibu/Saudara/i berkenan hadir
            untuk memberikan Doa Restu
          </p>
          <hr class="hr-2" />
          <h1 class="cal">Terima Kasih</h1>
        </div>
        <div class="img text-center mt-5">
          <img src="/flower-4.png" class="card-img img8 mt-3" />
        </div>
      </section>
      <span @click="music()" class="float my-float ms-3">
        <button class="btn btn-secondary shadow" style="border-radius: 50%">
          <i class="bi bi-music-note"></i>
        </button>
      </span>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  // myAudioFunction();
});

//rsvp
const nama = route.query.to;
let form = reactive({
  nama: nama.toUpperCase(),
  asal: '',
  sebagai: '',
  isHadir: false,
});
const isMengisi = ref(false);
const kehadiran = (value) => {
  form.isHadir = value;
  isMengisi.value = true;
};

//qrcode
let qrcode = ref(
  'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
);
const spare = ref(' | ');

//awalan
let isOpen = ref(false);
const openInvite = () => {
  isOpen.value = true;
};

//audio
let myaudio = reactive(true);
function music() {
  myaudio = !myaudio;
}

//countdown
let menuju_halal = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});
// Set the date we're counting down to
const countDownDate = new Date('Mar 12, 2023 09:00:00').getTime();

// Update the count down every 1 second
const x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  menuju_halal.seconds = seconds;
  menuju_halal.minutes = minutes;
  menuju_halal.hours = hours;
  menuju_halal.days = days;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById('countdown').innerHTML = '<h1>Sudah Halal</h1>';
  }
}, 1000);
</script>
