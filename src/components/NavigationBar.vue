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
        >Servicios</b-navbar-item
      >
      <b-navbar-item tag="router-link" :to="{ path: '/institucional' }"
        >Institucional</b-navbar-item
      >
      <b-navbar-item tag="router-link" :to="{ path: '/about' }"
        >Contacto</b-navbar-item
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

            <b-button type="is-success mr-2"> Registrarse</b-button>
          </b-tooltip>
          <router-link to="/login" tag="button" class="button is-ligth"
            >Ingresar</router-link
          >
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>
