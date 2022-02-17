import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import TabelDaftar from "../components/TabelDaftar.vue";
// import Tabel from "../components/Tabel.vue";
import Register from "../components/Register.vue";
import Form from "../components/Form.vue";
import Add from "../components/Add.vue";
import Edit from "../components/Edit.vue";

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
  // {
  //   path: "/tabel",
  //   name: "Tabel",
  //   component: Tabel,
  // },
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
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/edit",
    name: "Edit",
    component: Edit,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
