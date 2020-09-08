<template>
  <div class="home">
    <navigation-bar></navigation-bar>
    <barra-institucional></barra-institucional>
    <historia></historia>
    <team></team>
    <pie-de-pagina></pie-de-pagina>
  </div>
</template>

<script>
import BarraInstitucional from "@/components/Institucional/BarraInstitucional.vue";
import Historia from "@/components/Institucional/Historia.vue";
import Team from "@/components/Team.vue";
import NavigationBar from "@/components/NavigationBar.vue";
import PieDePagina from "@/components/PieDePagina.vue";

export default {
  name: "Institucional",
  components: {
    BarraInstitucional,
    Historia,
    Team,
    NavigationBar,
    PieDePagina,
  },
};
</script>
