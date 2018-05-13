<template>
  <div>
    <Back></Back>
    <div class="list">
      <div class="cell flex" @click="$router.push(`/MeDetail/${$store.state.token.id}`)">
        <i class="iconfont icon-shouye10 flex-0"></i>
        <div class="flex-0" style="margin-right:10px;">余额 </div>
        <div class="flex-1"> {{$store.state.token.money}} 元</div>
      </div>

    </div>
  </div>
</template>

<script>
import Back from "../components/Back";
export default {
    components: {
    Back
  },
};
</script>

<style scoped>
.cell {
  height: 65px;
  position: relative;
  line-height: 65px;
  transition: all 0.15s;
  padding: 0 20px;
  box-sizing: border-box;
}
.cell::after {
  position: absolute;
  top: 0;
  left: 5%;
  right: 5%;
  content: "";
  display: block;
  background-color: #f2f2f2;
  height: 1px;
}
.cell:active {
  background-color: #f2f2f2;
}
.cell:last-child::before {
  position: absolute;
  bottom: 0;
  width: 90%;
  left: 5%;
  right: 5%;
  content: "";
  display: block;
  background-color: #f2f2f2;
  height: 1px;
}
.cell i {
  width: 30px;
  font-size: 18px;
}
</style>
