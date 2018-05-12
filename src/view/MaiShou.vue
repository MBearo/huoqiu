<template>
  <div>
    <TopBar :name="'买手'"></TopBar>
    <div class="xiaokuai flex flex-justify-between">
      <div class="maishoublock left" :style="size">
        <div class="title">
          推荐买手
        </div>
        <div class="subtitle">
          WHAT'S HOT
        </div>
        <div class="flex">
          <div class="quanquan bg-cover" :style="{backgroundImage: `url(${item.img})`}" v-for="(item,index) in $store.state.tuijian" :key="'tuijian'+index"></div>
        </div>
      </div>
      <div class="maishoublock right" :style="size">
        <div class="title">
          最新买手
        </div>
        <div class="subtitle">
          WHAT'S NEW
        </div>
        <div class="flex">
          <div class="quanquan bg-cover" :style="{backgroundImage: `url(${item.img})`}" v-for="(item,index) in $store.state.zuixin" :key="'tuijian'+index"></div>
        </div>
      </div>
    </div>
    <div class="remen">
      热门分类
    </div>
    <MaiShouFenLei></MaiShouFenLei>
  </div>
</template>

<script>
import TopBar from "../components/TopBar";
import MaiShouFenLei from "../components/MaiShouFenLei";
export default {
  components: {
    TopBar,
    MaiShouFenLei
  },
  computed: {
    size() {
      return {
        height: (this.$store.state.windowW - 60) / 2 * 9 / 16 + "px",
        width: (this.$store.state.windowW - 60) / 2 + "px"
      };
    }
  }
};
</script>

<style scoped>
.maishoublock {
  color: white;
  border-radius: 6px;
  padding: 10px;
  box-sizing: border-box;
}
.maishoublock.left {
  background: linear-gradient(90deg, #ffc545, #ffd85e);
}
.maishoublock.right {
  background: linear-gradient(90deg, #ec5b60, #f47a75);
}
.xiaokuai {
  padding: 20px;
  box-sizing: border-box;
}
.title{
  font-size: 16px;
  font-weight: bold;
  letter-spacing:4px;
}
.subtitle{
  font-size: 12px;
  transform: scale(.8,.8);
  transform-origin: left;
  letter-spacing:4px;
  color: rgba(255, 255, 255, .8);
}
.quanquan{
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  border-radius: 100%;
  border: 2px solid white;
  background-color: #f2f2f2;
  margin-left: -8px;
}
.quanquan:first-child{
  margin-left: 0;
}
.remen{
  font-size: 17px;
  font-weight: bold;
  padding: 0 20px;
  box-sizing: border-box;
}
</style>
