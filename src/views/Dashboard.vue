<template>
  <section>
    <dash-nav></dash-nav>
    <section class="section is-large">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>,
          like the one you're currently reading
        </h2>
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
