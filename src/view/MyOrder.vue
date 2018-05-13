<template>
  <div>
    <Back></Back>
    <div class="text-center" v-show="$store.state.myOrder.length==0" style="padding:20px 0;">
      还没有订单哦
    </div>
    <div class="list">
      <div class="item" v-for="(item,index) in $store.state.myOrder" :key="index">
        <div>{{item.goods}}</div>
        <div class="flex body">
          <div class="flex-0 img bg-cover" :style="{backgroundImage: `url(${item.banner})`}">

          </div>
          <div class="flex-1">
            <div class="jiage color-primary">￥{{item.price}}</div>
            <div class="cc">购入数量：{{item.num}}</div>
            <div class="cc">邮费：{{item.freight}}</div>
            <div class="cc">{{item.time}}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Back from "../components/Back";
import axios from "axios";
import urls from "../vuex/urls";
export default {
  components: {
    Back
  }
};
</script>

<style scoped>
.list {
  padding: 20px;
  box-sizing: border-box;
}
.item {
  background-color: #fafafa;
  padding: 10px;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 20px;
}
.img{
  height: 90px;
  width: 160px;
  background-color: #ccc;
  margin-right: 10px;
}
.jiage{
  font-size: 20px;
}
.cc{
  color: #999;
  font-size: 12px;
  line-height: 1.6;
}
</style>
