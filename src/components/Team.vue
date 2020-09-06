<template>
  <section class="hero is-light  " name="casa">
    <a name="servicio"></a>
    <div class="hero-body">
      <h1 class="title mb-6">Nuestros Servicios</h1>
      <div class="container">
        <div class="tile is-ancestor">
          <servicio title="Odontología" logo="🦷"></servicio>
          <servicio title="Nutrición" logo="🍏"></servicio>
          <servicio title="Oftalmología" logo="😎"></servicio>
          <!-- <servicio title="Dermatologo" urlx="🌝"></servicio> -->
          <servicio title="Kinesiología" logo="🦴"></servicio>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Servicio from "@/components/Servicios/Servicio.vue";

export default {
  name: "Team",
  components: {
    Servicio,
  },
};
</script>
