<template>
  <div class="container mt-4">
    <div class="card p-3">
      <div>
        <h2><i class="fa-solid fa-table-list"></i>Daftar Peserta</h2>
      </div>
      <br />
      <button type="button" id="updateButton" class="btn btn-secondary">
        Add</button
      ><br />
      <table class="table table-bordered table-condensed table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Nama</th>
            <th scope="col">Alamat</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Sania</td>
            <td>Ungaran</td>
            <td>
              <button type="button" id="updateButton" class="btn btn-secondary">
                Edit
              </button>
            </td>
            <td>
              <button type="button" id="updateButton" class="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

// <script>
// export default {};
//
</script>

<style>
</style>