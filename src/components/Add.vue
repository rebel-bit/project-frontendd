
<template>
  <div class="container">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Name"
          v-model="pesertaNama"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Addres</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Addres"
          v-model="pesertaAlamat"
        />
      </div>
    </div>

    <div class="control">
      <button class="btn btn-success" @click="savePeserta">SAVE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "Add",
  data() {
    return {
      pesertaNama: "",
      pesertaAlamat: "",
    };
  },
  methods: {
    // Create New product
    async savePeserta() {
      try {
        await axios.post("http://localhost:5000/pesertas", {
          peserta_nama: this.pesertaNama,
          peserta_alamat: this.pesertaAlamat,
        });
        this.pesertaNama = "";
        this.pesertaAlamat = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
 
<style>
</style>