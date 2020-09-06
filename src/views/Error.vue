<template>
  <div>
    <navigation-bar></navigation-bar>
    <section class="hero hero-body is-light is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Error 404 🛸
          </h1>
          <h2 class="subtitle">
            Ups! No deberías estar aquí.
          </h2>
          <router-link to="/" tag="button" class="button is-success"
            ><strong>Volver al inicio 👆</strong></router-link
          >
        </div>
      </div>
    </section>
    <pie-de-pagina></pie-de-pagina>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import PieDePagina from "@/components/PieDePagina.vue";

export default {
  name: "Home",
  components: {
    NavigationBar,
    PieDePagina,
  },
};
</script>
