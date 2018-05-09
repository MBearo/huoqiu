<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "../src/style/init.css";
export default {
  name: "App",
  methods: {
    scroll(e) {
      this.$store.commit("Scroll_M", { result: window.scrollY });
    }
  },
  mounted() {
    //window.addEventListener("scroll", this.scroll);
  }
};
</script>

<style>

</style>
