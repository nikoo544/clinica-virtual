<template>
  <div id="app">
    <navigation-bar></navigation-bar>

    <!-- <div id="nav">
       <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
    </div>-->
    <router-view />
    <pie-de-pagina></pie-de-pagina>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import PieDePagina from "./components/PieDePagina.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    PieDePagina,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
