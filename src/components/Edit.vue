<template>
  <div>
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Peserta Name"
          v-model="PesertaNama"
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Addres</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Price"
          v-model="PesertaAlamat"
        />
      </div>
    </div>
    <div class="control">
      <button class="button is-success" @click="updatePeserta">UPDATE</button>
    </div>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "Edit",
  data() {
    return {
      pesertaNama: "",
      pesertaAlamat: "",
    };
  },
  created: function () {
    this.getPesertaById();
  },
  methods: {
    // Get Peserta By Id
    async getPesertaById() {
      try {
        const response = await axios.get(
          `http: //localhost:5000/Pesertas/${this.$route.params.id}`
        );
        this.PesertaNama = response.data.peserta_nama;
        this.PesertaAlamat = response.data.peserta_alamat;
      } catch (err) {
        console.log(err);
      }
    },

    // Update Peserta
    async updatePeserta() {
      try {
        await axios.put(
          `http://localhost:5000/Pesertas/${this.$route.params.id}`,
          {
            peserta_nama: this.PesertaNama,
            peserta_alamat: this.PesertaAlamat,
          }
        );
        this.PesertaNama = "";
        this.PesertaAlamat = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>