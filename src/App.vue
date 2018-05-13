<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import "../src/style/init.css";
export default {
  name: "App",
  created() {
    this.$store.dispatch("NewsList_A");
    this.$store.dispatch("ZuiXin_A");
    this.$store.dispatch("TuiJian_A");
    this.$store.dispatch("MaiShouFenLei_A");
    this.$store.commit("Window_M");
  },
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
