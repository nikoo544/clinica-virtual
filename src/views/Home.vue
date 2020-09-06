<template>
  <div class="home">
    <navigation-bar></navigation-bar>
    <hero-welcome></hero-welcome>
    <separator></separator>
    <team></team>
    <barra-institucional></barra-institucional>
    <pie-de-pagina></pie-de-pagina>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroWelcome from "@/components/HeroWelcome.vue";
import Separator from "@/components/Separator.vue";
import Team from "@/components/Team.vue";
import BarraInstitucional from "@/components/Institucional/BarraInstitucional.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import PieDePagina from "@/components/PieDePagina.vue";

export default {
  name: "Home",
  components: {
    HeroWelcome,
    Separator,
    Team,
    BarraInstitucional,
    NavigationBar,
    PieDePagina,
  },
};
</script>
