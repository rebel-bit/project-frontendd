<template>
  <div>
    <router-link :to="{ name: 'Add' }" class="btn btn-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Addres</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.peserta_id">
          <td>{{ item.peserta_nama }}</td>
          <td>{{ item.peserta_alamat }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'Edit', params: { id: item.peserta_id } }"
              class="btn btn-info"
              >Edit</router-link
            >
            <a class="btn btn-danger" @click="deletePeserta(item.peserta_id)"
              >Delete</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
// import axios
import axios from "axios";

export default {
  name: "From",
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
        await axios.delete(`http://localhost:5000/Pesertas/${id}`);
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