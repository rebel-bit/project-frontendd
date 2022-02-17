<template>
  <div class="container mt-4">
    <div class="card p-3">
      <div>
        <h2><i class="fa-solid fa-table-list"></i>Daftar Peserta</h2>
      </div>
      <br />
      <table class="table" v-for="item in items" :key="item.peserta_id">
        <thead class="thead-dark">
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Nama</th>
            <th scope="col">Alamat</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{{ item.peserta_id }}</th>
            <td>{{ item.peserta_nama }}</td>
            <td>{{ item.peserta_alamat }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "TabelDaftar",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getPesertas();
  },

  methods: {
    // Get All Pesertas
    async getPesertas() {
      try {
        const response = await axios.get("http://localhost:5000/pesertas");
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Peserta
    async deletePeserta(id) {
      try {
        await axios.delete(`http://localhost:5000/pesertas/${id}`);
        this.getPesertas();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style>
</style>