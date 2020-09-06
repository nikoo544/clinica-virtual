<template>
  <b-navbar class="is-info">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/3209049.svg" alt="Clinica Logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">Home</b-navbar-item>
      <b-navbar-item href="#">Nuestro Equipo</b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">Contacto</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-success">
            <strong>Registrarse</strong>
          </a>
          <a class="button is-light">Ingresar</a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "NavigationBar"
};
</script>
