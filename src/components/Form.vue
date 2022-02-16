<template>
  <div class="container mt-4">
    <div class="card mt-4">
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Nama</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputtext1"
            aria-describedby="textHelp"
            placeholder="Masukan Nama"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputtext1">Alamat</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputtext1"
            placeholder="Masukan Alamat"
            required
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>