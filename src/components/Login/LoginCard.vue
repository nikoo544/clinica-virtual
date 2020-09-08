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
        <b-button type="is-success"> Registrarse</b-button>
        <button class="button is-info  ml-3">
          Ingresar
        </button>
      </div>
      <div class="buttons">
        <label for="" class="label is-pulled-left is-inline-block"
          >Inicia sesión con:</label
        >
        <b-button type="is-danger" expanded>
          <img
            src="@/assets/img/redes/google.svg"
            alt=""
            width="20"
            class="svgcolor imgtext mr-3"
          />
          Continuar con Google</b-button
        >
        <b-button type="is-link" expanded
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
import firebase from "firebase";

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
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
          console.log("conectado");
          this.$router.replace({ name: "Dashboard" });
        })
        .catch((err) => {
          console.log("hola");
          this.error = err.message;
        });
    },
  },
};
</script>
