<template>
    <div class="container flex">
        <div class="item flex" :style="size" v-for="(item,index) in 11" :key="index">
            <div class="flex-0" style="margin-right:10px;">
                <i  class="icon iconfont icon-icon1"></i>
            </div>
            <div class="flex-1">
                男生跟我穿
            </div>
        </div>
    </div>

</template>

<script>
export default {
  computed: {
    size() {
      let size = {
        height: (this.$store.state.windowW - 50)/2 * 9 / 16 + "px",
        width: (this.$store.state.windowW - 50) / 2 + "px"
      };
      return size;
    }
  }
};
</script>

<style scoped>
.container{
    padding: 0 20px;
    box-sizing: border-box;
    justify-content: space-between;
}
.item{
    background-color: #fafafa;
    border-radius: 6px;
    margin-bottom: 10px;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    font-weight: bold;
}
.icon{
    font-size: 32px;
    font-weight: normal;
}
</style>
