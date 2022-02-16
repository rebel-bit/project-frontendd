import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import TabelDaftar from "../components/TabelDaftar.vue";
import Tabel from "../components/Tabel.vue";
import Register from "../components/Register.vue";
import Form from "../components/Form.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/daftarPes",
    name: "TabelDaftar",
    component: TabelDaftar,
  },
  {
    path: "/tabel",
    name: "Tabel",
    component: Tabel,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
