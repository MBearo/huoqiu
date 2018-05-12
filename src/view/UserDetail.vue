<template>
  <div>
    <div class="back" @click="history.go(-1)">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="banner" :style="{backgroundImage: `url(${$store.state.token.banner})`}">
      <div class="imgs" :style="{backgroundImage: `url(${$store.state.token.img})`}"></div>
    </div>
    <div class="cont">
      <div class="names">
        FlorHim
      </div>
      <div class="indentity flex" style="margin-top:5px;">
        <div class="tag" v-show="$store.state.token.identity==1">
          好物达人
        </div>
        <div class="tag" v-show="$store.state.token.identity!=1">
          <i class="iconfont icon-icon2"></i> 新晋公民
        </div>

      </div>
      <div class="desc">
        {{$store.state.token.descs}}测试描述
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {}
};
</script>

<style scoped>
.banner {
  position: relative;
  height: 150px;
  background-color: #ccc;
}
.imgs {
  position: absolute;
  bottom: -40px;
  height: 80px;
  width: 80px;
  border-radius: 100%;
  left: 20px;
  background-color: #f2f2f2;
}
.cont {
  padding: 50px 20px 10px 20px;
  box-sizing: border-box;
}
.names {
  font-size: 24px;
}
.indentity {
  color: #ffd625;
}
.desc{
  font-size: 12px;
  color: #666;
  line-height: 2;
}
.back{
  position: absolute;
  top: 20px;
  left: 20px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 100%;
  color: #666;
  z-index: 100;
  transition: all .15s;
}
.back:active{
  background-color: #666;
}
</style>
