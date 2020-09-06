<template>
  <div class="home">
    <barra-institucional></barra-institucional>
    <historia></historia>
    <team></team>
  </div>
</template>

<script>
// @ is an alias to /src
import BarraInstitucional from "@/components/Institucional/BarraInstitucional.vue";
import Historia from "@/components/Institucional/Historia.vue";
import Team from "@/components/Team.vue";

export default {
  name: "Institucional",
  components: {
    BarraInstitucional,
    Historia,
    Team,
  },
};
</script>
