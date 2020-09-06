<template>
  <div class="tile is-parent">
    <article class="tile is-child notification is-info">
      <p class="title">{{ title }}</p>
      <p class="logoclinic">{{ logo }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: "Servicio",
  props: ["title", "logo"],
};
</script>
