<template>
  <section
    class="hero is-large is-light is-bold"
    style="background-image: url('@/assets/logo.png')"
  >
    <div class="hero-body has-bg-img">
      <div class="container">
        <h2 class="title">Bienvenido</h2>
        <h2 class="title">Clínica Online Pirulo</h2>
        <b-button size="is-medium is-success" @click="solicitarTurno"
          >Sacar turno</b-button
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroWelcome",

  methods: {
    solicitarTurno() {
      this.$buefy.snackbar.open({
        duration: 5000,
        message:
          "🤹‍♂️ Esta función se encuentra en desarrollo 🤹‍♂️<br>Nota: <em> 🍕🍔🍟🌭🍿🧂🥓🍗🍖🥩</em>.",
        type: "is-warning",
        actionText: "Cerrar 🦄",
        queue: false,
      });
    },
  },
};
</script>
