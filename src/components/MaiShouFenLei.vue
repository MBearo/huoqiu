<template>
  <div class="container flex">
    <div class="item flex" :style="size" v-for="(item,index) in $store.state.maishoufenlei" :key="index">
      <div class="flex-0" style="margin-right:10px;">
        <i class="icon iconfont " :class="item.icon"></i>
      </div>
      <div class="flex-1">
        {{item.name}}
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import urls from "../vuex/urls";
import qs from "qs";
export default {
  data () {
    return {
      list:[]
    }
  },
  created() {
    //this.refresh();
   
  },
  computed: {
    size() {
      let size = {
        height: (this.$store.state.windowW - 50) / 2 * 9 / 16 + "px",
        width: (this.$store.state.windowW - 50) / 2 + "px"
      };
      return size;
    }
  },
  methods: {
    refresh() {
      
    }
  }
};
</script>

<style scoped>
.container {
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: space-between;
}
.item {
  background-color: #fafafa;
  border-radius: 6px;
  margin-bottom: 10px;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  font-weight: bold;
}
.icon {
  font-size: 32px;
  font-weight: normal;
}
</style>
