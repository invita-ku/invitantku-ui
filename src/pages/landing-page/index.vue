<template>
  <section id="home" class="header_area">
    <div id="header_navbar" class="header_navbar">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand" @click="router.push('/')" >
                <img
                  id="logo"
                  style="width: 90px; heigth: 90px"
                  src="/assets/images/logo.png"
                  alt="Logo"
                />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>
              <div
                class="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent"
              >
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="page-scroll active" href="#home">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#about">Tentang</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#pricing">Produk</a>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll" href="#blog">Blog</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div class="header_hero">
      <div
        class="single_hero bg_cover d-flex align-items-center"
        style="background-image: url(assets/images/home-img.jpg)"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 col-md-10">
              <div class="hero_content text-center">
                <h2
                  class="hero_title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Invitanku,<br />
                  Undang kerabat datang ke acaramu.
                </h2>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.5s"
                >
                  Membantu mengundang kerabat/teman jauh anda dengan mudah.
                  Mengurangi sampah kertas bekas undangan sekali pakai, mudah
                  disebarkan, dan design yang interaktif.
                </p>
                <a
                  class="main-btn wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.8s"
                  @click="router.push('/form')"
                  >Buat Undangan Sekarang!</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="features" class="features_area pt-120">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section_title text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              Kenapa harus kami?
            </h4>
            <p
              class="wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              Kami membantu membuat undangan digital yang mudah, murah, dan
              ramah bagi lingkungan.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <i class="lni lni-layers"></i>
            <h4 class="features_title">Design Elegan</h4>
            <p>Kami memliki design undangan yang elegan dan eksklusif.</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.4s"
          >
            <i class="lni lni-layout"></i>
            <h4 class="features_title">Murah</h4>
            <p>
              Undagan kami dijamin dibawah harga pasar undagan digital pada
              umumnnya.
            </p>
          </div>
        </div>
        <div class="col-lg-4 col-md-7">
          <div
            class="single_features text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.6s"
          >
            <i class="lni lni-bolt"></i>
            <h4 class="features_title">Mudah</h4>
            <p>Mudah cukup isi form, dan undangan siap disebarkan.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="about" class="pt-130">
    <div class="about_area">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="about_content pt-120 pb-130">
              <div class="section_title pb">
                <h4
                  class="title wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.2s"
                >
                  Tentang Invitanku
                </h4>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.4s"
                >
                  Invitanku adalah sebuah website yang menyediakan layanan
                  undangan digital yang mudah digunakan dan desain yang menarik.
                  Dengan Invitanku, Anda dapat dengan cepat dan mudah membuat
                  undangan elektronik untuk acara apa pun, mulai dari pesta
                  ulang tahun hingga pernikahan. Website ini juga menawarkan
                  berbagai pilihan desain yang indah dan unik, sehingga Anda
                  dapat membuat undangan yang sesuai dengan tema acara Anda.
                </p>
                <p
                  class="wow fadeInUp"
                  data-wow-duration="1.3s"
                  data-wow-delay="0.6s"
                >
                  Selain itu, Invitanku juga memudahkan Anda untuk mengirim
                  undangan dan melacak partisipasi tamu dengan mudah. Jadi, jika
                  Anda ingin membuat undangan yang menarik dan profesional tanpa
                  harus mengeluarkan banyak waktu dan usaha, cobalah Invitanku
                  sekarang.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="about_image bg_cover wow fadeInLeft"
        data-wow-duration="1.3s"
        data-wow-delay="0.2s"
        style="background-image: url(assets/images/about.jpg)"
      >
        <div class="image_content">
          <h4 class="experience"><span>1</span> Years of Experience</h4>
        </div>
      </div>
    </div>
  </section>

  <section id="pricing" class="pricing_area pt-120 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section_title text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              Produk
            </h4>
            <p
              class="wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              Tersedia pilihan paket undangan dengan detail tertera.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4 col-md-8 col-sm-10">
          <div
            class="single_pricing text-center mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <h4 class="pricing_title">Free</h4>
            <span class="price">Rp. 0</span>
            <ul class="pricing_list">
              <li>Pilihan Template Terbatas</li>
              <li>1 hari expired</li>
              <li>Watermark</li>
              <li>Tanpa Revisi</li>
            </ul>
            <a href="#" class="mian-btn">Gratis</a>
          </div>
        </div>
        <div class="col-lg-4 col-md-8 col-sm-10">
          <div
            class="single_pricing text-center mt-30 active wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.3s"
          >
            <h4 class="pricing_title">Premium</h4>
            <span class="price">Rp. 30.000</span>
            <ul class="pricing_list">
              <li>Pilihan Template Premium</li>
              <li>Expired Setalah Acara</li>
              <li>Eksklusif Design</li>
              <li>3x Revisi</li>
            </ul>
            <a href="#" class="mian-btn">Beli Sekarang!</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="blog" class="blog_area pt-120 pb-130">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="section_title text-center pb-25">
            <h4
              class="title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              InvitanBlog
            </h4>
            <p
              class="wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.4s"
            >
              Media untuk sharing informasi terkait pernikahan, ulang tahun, dan
              acara lainnya.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div
            class="single_blog mt-30 wow fadeInUp"
            data-wow-duration="1.3s"
            data-wow-delay="0.2s"
          >
            <div class="blog_image">
              <img :src="`/assets/images/${listBlog[0].img}`" alt="blog" />
            </div>
            <div class="blog_content">
              <h3 class="blog_title">
                <a href="#">{{ listBlog[0].title }}.</a>
              </h3>
              <div v-html="listBlog[0].content"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row items-center mt-40">
        <a href="#" class="main-btn wow fadeInUp">Cari Blog Lainnya!</a>
      </div>
    </div>
  </section>

  <footer id="footer" class="footer_area">
    <div class="container">
      <div
        class="footer_wrapper text-center d-lg-flex align-items-center justify-content-between"
      >
        <p class="credit">Made with love ❤️ by Team KW U - Nurul Fikri 2022</p>
        <div class="footer_social pt-15">
          <ul>
            <li>
              <a href="https://invitanku.vercel.app"
                ><i class="lni lni-website"></i
              ></a>
            </li>
            <li>
              <a href="https://instagram.com/invitan.ku?igshid=YmMyMTA2M2Y="
                ><i class="lni lni-instagram-original"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

  <a href="#" class="back-to-top"><i class="lni lni-chevron-up"></i></a>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const listBlog = ref([
  {
    img: 'sttnf.png',
    title: 'KWU NF Luar Biasa!',
    content:
      '<p>Nurul Fikri adalah salah satu kampus yang menawarkan program studi kewirausahaan yang luar biasa. Mahasiswa yang belajar di sini akan mendapatkan pengalaman belajar yang sangat bermanfaat dan menyenangkan.</p><p>Salah satu hal yang menarik dari program studi kewirausahaan di Nurul Fikri adalah adanya kurikulum yang sangat praktis. Mahasiswa akan belajar bagaimana mengembangkan ide-ide bisnis, menganalisis pasar, dan mengelola sebuah bisnis. Selain itu, mahasiswa juga akan belajar tentang bagaimana mengelola keuangan, mengelola sumber daya manusia, dan mengelola risiko dalam bisnis.</p> <p>Di samping itu, Nurul Fikri juga menawarkan berbagai program ekstrakurikuler yang sangat bermanfaat bagi mahasiswa yang ingin mengembangkan keterampilan kewirausahaan mereka. Program-program ini termasuk kompetisi bisnis, program mentoring, dan program studi banding ke luar negeri.</p><p>Selain itu, fasilitas yang tersedia di Nurul Fikri juga sangat membantu mahasiswa dalam belajar kewirausahaan. Kampus ini memiliki laboratorium bisnis yang dilengkapi dengan peralatan yang diperlukan untuk mengembangkan bisnis, serta ruang-ruang yang nyaman untuk belajar dan berdiskusi.</p><p>Tidak hanya itu, beberapa mahasiswa yang telah lulus dari program studi kewirausahaan di Nurul Fikri telah sukses memulai bisnis mereka sendiri. Hal ini menunjukkan bahwa kualitas pendidikan yang diterima oleh mahasiswa di Nurul Fikri sangat baik dan mampu menghasilkan lulusan yang siap menghadapi dunia kerja.</p><p>Kampus Nurul Fikri juga memiliki lingkungan yang nyaman dan kondusif untuk belajar. Letaknya yang strategis, fasilitas yang lengkap dan dosen yang profesional membuat mahasiswa betah dan nyaman belajar di sini.</p><p>Oleh karena itu, tidak heran jika banyak mahasiswa yang memilih Nurul Fikri sebagai kampus pilihan untuk belajar kewirausahaan. Kampus ini memberikan kesempatan yang sama bagi semua mahasiswa untuk belajar dan berkembang sesuai dengan minat dan bakat mereka.</p>',
  },
]);
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
