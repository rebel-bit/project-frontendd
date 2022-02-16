<template>
  <div id="app">
    <template>
      <div id="app">
        <nav class="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" class="navbar-brand">BootCamp</a>
          <div class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> Home </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/daftarpes" class="nav-link">
                Daftar Peserta
              </router-link>
            </li>
            <!-- <li class="nav-item">
              <router-link v-if="currentUser" to="/user" class="nav-link"
                >User</router-link
              >
            </li> -->
          </div>

          <div v-if="!currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/register" class="nav-link">
                Sign Up
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link"> Sign In </router-link>
            </li>
          </div>

          <div v-if="currentUser" class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">
                {{ currentUser.username }}
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click.prevent="logOut"> -alt" /> LogOut </a>
            </li>
          </div>
        </nav>

        <div class="container">
          <router-view />
        </div>
      </div>
    </template>
  </div>
</template>
  

<script>
export default {
  name: "App",
};
</script>

