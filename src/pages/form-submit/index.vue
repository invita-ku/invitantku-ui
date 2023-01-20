<template>
  <div class="container-xl p-3 mb-2">
    <div class="d-flex justify-content-center">
      <img
        id="logo"
        style="width: 150px; heigth: 150px"
        src="/assets/images/logo.png"
        alt="Logo"
      />
    </div>
    <h3 class="text-center">Form Pengisian Data Pengantin</h3>
    <form @submit.prevent="whenSubmit">
      <h4>Data Pengantin Pria</h4>
      <div class="mb-3">
        <label for="template" class="form-label">Template</label>
        <select
          class="form-select"
          id="template"
          aria-label="Default select example"
          v-model="state.template"
        >
          <option selected>Pilih Template</option>
          <option value="base">Template Utama</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="nameMan" class="form-label">Nama</label>
        <input
          type="text"
          class="form-control"
          id="nameMan"
          required
          v-model="state.nameMan"
        />
      </div>
      <div class="mb-3">
        <label for="nameManFather" class="form-label">Nama Ayah </label>
        <input
          type="text"
          class="form-control"
          id="nameManFather"
          required
          v-model="state.nameManFather"
        />
      </div>
      <div class="mb-3">
        <label for="nameManMother" class="form-label">Nama Ibu </label>
        <input
          type="text"
          class="form-control"
          id="nameManMother"
          required
          v-model="state.nameManMother"
        />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Foto</label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          required
          @change="setManPic"
        />
      </div>
      <h4>Data Pengantin Wanita</h4>
      <div class="mb-3">
        <label for="nameWoman" class="form-label">Nama</label>
        <input
          type="text"
          class="form-control"
          id="nameWoman"
          required
          v-model="state.nameWoman"
        />
      </div>
      <div class="mb-3">
        <label for="nameWomanFather" class="form-label">Nama Ayah</label>
        <input
          type="text"
          class="form-control"
          id="nameWomanFather"
          required
          v-model="state.nameWomanFather"
        />
      </div>
      <div class="mb-3">
        <label for="nameWomanMother" class="form-label">Nama Ibu</label>
        <input
          type="text"
          class="form-control"
          id="nameWomanMother"
          required
          v-model="state.nameWomanMother"
        />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Foto</label>
        <input
          class="form-control"
          type="file"
          id="formFile"
          required
          @change="setWomanPic"
        />
      </div>

      <div class="mb-3">
        <label for="weddingDate" class="form-label">Tanggal Pernikahan</label>
        <input
          type="text"
          class="form-control"
          id="weddingDate"
          required
          v-model="state.weddingDate"
        />
      </div>

      <div class="form-floating mb-3">
        <textarea
          class="form-control"
          placeholder="Address"
          id="weddingAddress"
          style="height: 100px"
          required
          v-model="state.weddingAddress"
        ></textarea>
        <label for="weddingAddress">Alamat Acara</label>
      </div>

      <div class="mb-3">
        <label for="gmapsLink" class="form-label">Link Google Maps</label>
        <input
          type="text"
          class="form-control"
          id="gmapsLink"
          required
          v-model="state.gmapsLink"
        />
      </div>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          :checked="state.donePayment === 'Y'"
          value="Y"
          v-model="state.donePayment"
          required
        />
        <label class="form-check-label" for="flexRadioDefault1"> Sudah </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          :checked="state.donePayment === 'N'"
          value="N"
          v-model="state.donePayment"
          required
        />
        <label class="form-check-label" for="flexRadioDefault2"> Belum </label>
      </div>

      <div class="mt-5 d-flex justify-content-end">
        <button class="btn btn-secondary mr-2" @click="router.push('/')">
          Kembali
        </button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  if (JSON.parse(localStorage.getItem('dataPernikahan')) !== null) {
    Object.assign(state, JSON.parse(localStorage.getItem('dataPernikahan')));
  }
});

const state = reactive({
  template: '',
  nameMan: '',
  nameManFather: '',
  nameManMother: '',
  nameWoman: '',
  nameWomanFather: '',
  nameWomanMother: '',
  womanPic: '',
  manPic: '',
  weddingDate: '',
  weddingAddress: '',
  gmapsLink: '',
  donePayment: 'N',
});

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const whenSubmit = async () => {
  localStorage.setItem('dataPernikahan', JSON.stringify(state));
  if (state.donePayment === 'N') {
    alert('Harap Lakukan Pembaran!');
    return;
  }
  try {
    const res = await fetch('https://api.invitanku.com/submitfom', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(state),
    });
    const conf = prompt(
      'anda akan di redirect ke halaman undangan, tolong ganti pada "to" pada url sesusai dengan undangan ditujukan. Masukan contoh nama yang akan diundang'
    );
    router.push(`/wedding-invitation/1?to=${conf}`);
  } catch (error) {
    console.error('ERROR WHEN SUBMIT FORM', error);
  }
};

const setManPic = (events) => {
  toBase64(events.target.files[0]).then((data) => (state.manPic = data));
};
const setWomanPic = (events) => {
  toBase64(events.target.files[0]).then((data) => (state.womanPic = data));
};
</script>

<style scoped>
.bg-form {
  background-color: gray;
}
</style>
