<template>
    <div>
        <div class="container">
            <router-view></router-view>
        </div>
        <div class="banner flex flex-justify-around">
            <router-link tag="div" :to="item.link" class="b_button text-center" v-for="(item,index) in tabs" :key="index">
                <i class="iconfont " :class="item.icon"></i>
                <div>{{item.name}}</div>
            </router-link>
            <!-- <div class="b_button text-center active">
              <i class="iconfont icon-shouye6"></i>
             <div>买手</div> 
          </div>
          <div class="b_button text-center">
              <i class="iconfont icon-shouye2"></i>
              <div>好物</div> 
          </div>
          <div class="b_button text-center">
              <i class="iconfont icon-shouye1"></i>
             <div>我 </div>    
          </div> -->
        </div>
    </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("MyOrder_A");
    this.$store.dispatch("MyLike_A");
  },
  data() {
    return {
      tabs: [
        {
          name: "买手",
          link: "maishou",
          icon: "icon-shouye6"
        },
        {
          name: "好物",
          link: "haowu",
          icon: "icon-shouye2"
        },
        {
          name: "我",
          link: "me",
          icon: "icon-shouye1"
        }
      ]
    };
  },
  computed: {}
};
</script>

<style scoped>
.container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
}
.banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 56px;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  font-size: 12px;
  color: #ccc;
  line-height: 1;
}
.b_button.router-link-active {
  color: #222;
}
.b_button {
  padding-top: 5px;
  transition: all 0.15s;
  width: 30%;
}
.b_button:active {
  background-color: #f2f2f2;
}
.b_button > div {
  padding-top: 4px;
}
.b_button i {
  font-size: 28px;
}
</style>
