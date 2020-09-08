import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "@/assets/css/stylex.css";
import "@/assets/css/mystyles.css";
import firebase from "firebase";

Vue.use(Buefy);
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyB_KQd4LwfyrEg2poaISEhvaG_PzPl3sAM",
  authDomain: "turnosmedicos-60859.firebaseapp.com",
  databaseURL: "https://turnosmedicos-60859.firebaseio.com",
  projectId: "turnosmedicos-60859",
  storageBucket: "turnosmedicos-60859.appspot.com",
  messagingSenderId: "561616465155",
  appId: "1:561616465155:web:bfe9f4b135ee0e823a0d36",
  measurementId: "G-8E49PR3QFS",
};

firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-unused-vars
firebase.auth().onAuthStateChanged(function(user) {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
});
