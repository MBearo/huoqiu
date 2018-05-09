<template>
  <div>
    <TopBar :name="'好物'"></TopBar>
    <HaoWuItem></HaoWuItem>
     <HaoWuItem></HaoWuItem>
     <HaoWuItem></HaoWuItem>
     <HaoWuItem></HaoWuItem>
     
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import HaoWuItem from "../components/HaoWuItem";
export default {
  components: {
    TopBar,
    HaoWuItem
  }
};
</script>

<style>

</style>
