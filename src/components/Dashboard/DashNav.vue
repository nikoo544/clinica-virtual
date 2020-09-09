<template>
  <b-navbar class="is-link">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/3209049.svg" alt="Clinica Logo" />
        <p class="has-text-weight-bold">
          Clinica Pirulo
        </p>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }"
        >Pacientes</b-navbar-item
      >
      <b-navbar-item tag="router-link" :to="{ path: '/' }"
        >Turnos</b-navbar-item
      >
      <b-navbar-item tag="router-link" :to="{ path: '/' }"
        >Calendario</b-navbar-item
      >
      <b-navbar-item tag="router-link" :to="{ path: '/' }"
        >Médico</b-navbar-item
      >
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <b-tooltip
            type="is-light"
            position="is-bottom"
            :triggers="['click']"
            :auto-close="['outside', 'escape']"
          >
            <template v-slot:content> <h1>Work in progress 🧙‍♂️</h1> </template>

            <b-button type="is-success mr-2"> Mi Perfil</b-button>
          </b-tooltip>
          <a class="button is-light" @click="logout">
            Cerrar sesión
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import firebase from "firebase";
export default {
  name: "DashNav",

  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => this.$router.replace("login"));
    },
  },
};
</script>
