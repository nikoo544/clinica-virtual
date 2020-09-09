<template>
  <div>
    <navigation-bar></navigation-bar>
    <team></team>
    <pie-de-pagina></pie-de-pagina>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import PieDePagina from "@/components/PieDePagina.vue";
import Team from "@/components/Team.vue";

export default {
  name: "Servicios",
  components: {
    NavigationBar,
    PieDePagina,
    Team,
  },
};
</script>
