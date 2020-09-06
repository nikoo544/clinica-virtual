<template>
  <div>
    <navigation-bar></navigation-bar>
    <section class="hero hero-body is-light is-large">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Medium title
          </h1>
          <h2 class="subtitle">
            Medium subtitle
          </h2>
        </div>
      </div>
    </section>
    <pie-de-pagina></pie-de-pagina>
  </div>
</template>

//
<script>
// // @ is an alias to /src
// import Team from "@/components/Team.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import PieDePagina from "@/components/PieDePagina.vue";

export default {
  //   name: "Home",
  components: {
    NavigationBar,
    PieDePagina,
  },
};
//
</script>
