<template>
  <div class="hero is-fullheight is-info is-bold">
    <div class="hero-head">
      <header class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <h1 class="title is-family-sans-serif	has-text-weight-bold">
                Clínica Pirulo
              </h1>
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroC">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroC" class="navbar-menu">
            <div class="navbar-end">
              <span class="navbar-item ">
                <router-link
                  to="/"
                  tag="button"
                  class="button is-ligth is-pulled-right"
                  >Volver al inicio</router-link
                >
              </span>
            </div>
          </div>
        </div>
      </header>
    </div>
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
