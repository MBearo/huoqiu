<template>
  <div>
    <TopBar :name="'好物'"></TopBar>
    <HaoWuItem :data="item" :index="index" v-for="(item,index) in $store.state.list" :key="index"></HaoWuItem>
    <div style="height:60px;"></div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import HaoWuItem from "../components/HaoWuItem";
import axios from "axios";
import urls from "../vuex/urls";
import qs from "qs";
export default {
  components: {
    TopBar,
    HaoWuItem
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    //this.refresh();
    
  },
  methods: {
    ss(index){
      console.log(index)
     // this.$router.push('/details/'+index)
    }
  }
};
</script>

<style>

</style>
