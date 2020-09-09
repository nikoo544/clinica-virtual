<template>
  <section>
    <dash-nav></dash-nav>
    <section class="section is-large">
      <div class="container">
        <h1 class="title">🔧 Under Development 🔨</h1>

        <button class="button">something random</button>
      </div>
    </section>
    <dash-footer></dash-footer>
  </section>
</template>
<script>
import DashNav from "@/components/Dashboard/DashNav.vue";
import DashFooter from "@/components/Dashboard/DashFooter.vue";

export default {
  components: {
    DashNav,
    DashFooter,
  },
};
</script>
