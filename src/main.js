import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "@/assets/css/stylex.css";
import "@/assets/css/mystyles.css";
import firebase from "firebase";
// Para hacerlo andar hay que agregar este archivo con la key
import "@/firebase.js";

Vue.use(Buefy);
Vue.config.productionTip = false;

// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});
