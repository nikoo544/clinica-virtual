import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Institucional from "@/views/Institucional.vue";
import Error from "@/views/Error.vue";
import Login from "@/views/Login.vue";
import Servicios from "@/views/Servicios.vue";
import Dashboard from "@/views/Dashboard.vue";
import Turnos from "@/views/Turnos.vue";
import firebase from "firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/servicios",
    name: "Servicios",
    component: Servicios,
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
    path: "/turnos",
    name: "Turnos",
    component: Turnos,
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
  Home: "Clínica Virtual",
  About: "Contacto | Clínica Virtual",
  Error: "Página no encontrada | Clínica Virtual",
  Dashboard: "Dashboard | Clínica Virtual",
  Login: "Login | Clínica Virtual",
  Institucional: "Institucional | Clínica Virtual",
  Servicios: "Servicios | Clínica Virtual",
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
