<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <h1 class="title has-text-white">Clínica Pirulo</h1>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          Pacientes
        </a>

        <a class="navbar-item">
          Turnos
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Random
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              Place holder
            </a>
            <a class="navbar-item">
              Place holder
            </a>
            <a class="navbar-item">
              Place holder
            </a>
            <hr class="navbar-divider" />
            <a class="navbar-item">
              Reportar un problema
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Mi Perfil</strong>
            </a>
            <a class="button is-light" @click="logout">
              Cerrar sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
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
