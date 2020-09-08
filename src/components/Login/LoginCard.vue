<template>
  <section id="firebaseui-auth-container">
    <form @submit.prevent="submit" class="box">
      <div class="">
        <h1 class="title has-text-black	">Iniciar Sesión</h1>
        <img
          class="flip3d"
          src="@/assets/3209049.svg"
          alt="Clinica Logo"
          width="150"
        />
      </div>
      <div class="field">
        <label for="" class="label is-pulled-left">Email</label>
        <div class="control">
          <input
            value=""
            type=""
            placeholder="Correo electronico"
            class="input"
            require
            v-model="form.email"
          />
        </div>
      </div>
      <label for="" class="label is-pulled-left">Password</label>
      <div class="control">
        <input
          type="password"
          placeholder="Contraseña"
          class="input"
          required
          v-model="form.password"
        />
        <span class="icon is-small is-left">
          <i class="fa fa-lock"></i>
        </span>
      </div>
      <div class="field">
        <b-tooltip
          type="is-light"
          :triggers="['click']"
          :auto-close="['outside', 'escape']"
        >
          <template v-slot:content> <h1>Work in progress 🧙‍♂️</h1> </template>

          <b-button type="is-success"> Registrarse</b-button>
        </b-tooltip>
        <button class="button is-info  ml-3">
          Ingresar
        </button>
      </div>
      <div class="buttons">
        <label for="" class="label is-pulled-left is-inline-block"
          >Inicia sesión con:</label
        >
        <b-button @click="loginGoogle" type="is-danger" expanded>
          <img
            src="@/assets/img/redes/google.svg"
            alt=""
            width="20"
            class="svgcolor imgtext mr-3"
          />
          Continuar con Google</b-button
        >
        <b-button @click="loginFacebook" type="is-link" expanded
          ><img
            src="@/assets/img/redes/facebook.svg"
            alt=""
            width="15"
            class="svgcolor imgtext mr-3 ml-4"
          />
          Continuar con Facebook</b-button
        >
      </div>
    </form>
  </section>
</template>

//
<script>
// import firebase from "firebase";
// import firebaseui from "firebaseui";
// import "firebaseui/dist/firebaseui.css";

// export default {
//   methods: {
//     mounted() {
//       var ui = new firebaseui.auth.AuthUI(firebase.auth());
//       var uiConfig = {
//         signInSuccessUrl: "/profile",
//         signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID],
//       };
//       ui.start("#firebaseui-auth-container", uiConfig);
//     },
//   },
// };
//
</script>

<script>
import firebase, { auth } from "firebase";

export default {
  data() {
    return {
      form: {
        email: "atencion@pirulo.com",
        password: "pirulo",
      },
      error: null,
    };
  },
  methods: {
    // Métodos de Logueo

    async loginGoogle() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const user = await firebase.auth().signInWithPopup(provider);
        console.log(user);
        this.$router.replace({ name: "Dashboard" });
      } catch (error) {
        console.error(error.message);
      }
    },
    async loginFacebook() {
      try {
        const provider = new firebase.auth.FacebookAuthProvider();
        const user = await firebase.auth().signInWithPopup(provider);
        console.log(user);
        this.$router.replace({ name: "Dashboard" });
      } catch (error) {
        console.error(error.message);
      }
    },
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
