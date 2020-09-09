import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Institucional from "@/views/Institucional.vue";
import Error from "@/views/Error.vue";
import Login from "@/views/Login.vue";
import Dashboard from "@/views/Dashboard.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/institucional",
    name: "Institucional",
    component: Institucional,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      autentificado: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/*",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((toRoute) => {
  window.document.title = PAGE_TITLE[toRoute.name];
});

const PAGE_TITLE = {
  Home: "Clínica Pirulo",
  About: "Contacto | Clínica Pirulo",
  Error: "Página no encontrada | Clínica Pirulo",
  Dashboard: "Dashboard | Clínica Pirulo",
  Login: "Login | Clínica Pirulo",
  Institucional: "Institucional | Clínica Pirulo",
};

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  let autorizacion = to.matched.some((record) => record.meta.autentificado);

  if (autorizacion && !usuario) {
    next("login");
  } else if (!autorizacion && usuario) {
    next("dashboard");
  } else {
    next();
  }
});

export default router;
