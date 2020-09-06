<template>
  <div class="home">
    <hero-welcome></hero-welcome>
    <separator></separator>
    <team></team>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroWelcome from "@/components/HeroWelcome.vue";
import Separator from "@/components/Separator.vue";
import Team from "@/components/Team.vue";

export default {
  name: "Home",
  components: {
    HeroWelcome,
    Separator,
    Team,
  },
};
</script>
