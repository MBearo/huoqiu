<template>
    <div class="container bg-white">
        <div class="my_card flex">
            <div class="flex-1">
                <div class="name">{{$store.state.token.name}}</div>
                <div class="desc">买到 10 个好物</div>
                <div class="flex" style="margin-top:5px;">
                    <div class="tag" v-show="$store.state.token.identity==1">
                        好物达人
                    </div>
                    <div class="tag" v-show="$store.state.token.identity!=1">
                        新晋公民
                    </div>
                </div>
            </div>
            <div class="flex-0 img bg-cover" :style="{backgroundImage: `url(${$store.state.token.img})`}">

            </div>
        </div>
        <div class="list">
            <div class="cell flex">
                <i class="iconfont icon-shouye7 flex-0"></i>
                <div class="flex-1">我的订单</div>
            </div>
            <div class="cell flex">
                <i class="iconfont icon-shouye7 flex-0"></i>
                <div class="flex-1">我的订单</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  padding: 20px 0;
  box-sizing: border-box;
}
.my_card {
  background: linear-gradient(45deg, #ffc2a6, #ec8e8c);
  padding: 15px 20px;
  box-sizing: border-box;
  border-radius: 6px;
  color: white;
  align-items: center;
  margin: 0 20px 20px;
}
.name {
  font-size: 22px;
  font-weight: bold;
}
.desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  transform: scale(0.8, 0.8);
  transform-origin: left;
}
.img {
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background-color: white;
}
.tag {
  padding: 5px 10px;
  border-radius: 100px;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 12px;
  line-height: 1;
}
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
