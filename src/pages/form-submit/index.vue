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
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Foto Pengantin Pria</label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Foto Pengantin Wanita</label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <button class="btn btn-secondary mr-2" @click="router.push('/')">
        Kembali
      </button>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const whenSubmit = async () => {
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
      body: JSON.stringify(data),
    });
    console.debug(res);
    return res;
  } catch (error) {
    console.error('ERROR WHEN SUBMIT FORM', error);
  }
};
</script>

<style scoped>
.bg-form {
  background-color: gray;
}
</style>
