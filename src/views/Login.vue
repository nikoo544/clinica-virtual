<template>
  <div class="hero is-fullheight is-link is-bold">
    <b-navbar class="is-link">
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img src="@/assets/3209049.svg" alt="Clinica Logo" />
          <p class="has-text-weight-bold">
            Clinica Pirulo
          </p>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link
              to="/"
              tag="button"
              class="button is-ligth is-pulled-right"
              >Volver al inicio</router-link
            >
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-8 is-offset-2">
          <login-card></login-card>
        </div>
      </div>
    </div>
    <div class="hero-foot">
      <nav class="s-fullwidth">
        <div class="container">
          <b-tooltip label="Love 🤍" type="is-danger">
            <p>
              Made with 🍰&nbsp;by&nbsp;
              <span class="rohanx">Rohan</span>
            </p>
          </b-tooltip>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import LoginCard from "@/components/Login/LoginCard.vue";

export default {
  name: "Login",
  components: {
    LoginCard,
  },
};
</script>
