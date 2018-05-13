<template>
    <div class="container" @click="go(data.aid)">
        <div class="user flex">
            <div class="img flex-0 bg-cover" :style="{backgroundImage: `url(${data.img})`}"></div>
            <div class="name flex-1">{{data.name}}</div>
        </div>
        <div class="banner" :style="banner">
            <img :src="data.banner2" alt="" style="width:100%;">
        </div>
        <div class="title">
            {{data.title}}
        </div>
        <div class="desc flex">
            <div class="flex-0">
                <!-- <i class="iconfont icon-shouye8"></i>
                <span>{{data.like}}</span> -->
                <!-- <i class="iconfont icon-shouye9"></i>
                <span>999</span> -->
            </div>
            <div class="flex-1 time">
                {{data.time}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: {
        aid:0,
        img: "",
        name: "",
        banner: "",
        title: "",
        like: "",
        time: ""
      }
    },
    index:{
        default:0
    }
  },
  data() {
    return {
      // banner:{
      //     height:'300px',
      //     width:'200px'
      // }
    };
  },
  computed: {
    banner() {
      let size = {
        height: (this.$store.state.windowW - 40) * 9 / 16 + "px"
        //backgroundImage: `url(static/hu.png)`
      };
      return size;
    }
  },
  methods:{
      go(index){
          this.$router.push(`/details/${index}/${this.index}`)
        //  this.$router.push({path:'/details',query:{id:index,index:this.index}})
      }
  }
};
</script>

<style scoped>
.container {
  margin-top: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
}
.img {
  height: 28px;
  width: 28px;
  border-radius: 100%;
  background-color: #f2f2f2;
  margin-right: 10px;
}
.user {
  align-items: center;
  margin-bottom: 10px;
}
.name {
  font-size: 12px;
}
.banner {
  background-color: #f2f2f2;
  border-radius: 6px;
  background-size: cover;
  background-attachment: local;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.title {
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
}
.desc {
  margin-top: 10px;
  line-height: 1;
}
.desc,
.desc i {
  font-size: 12px;
  color: #999;
}
.time {
  text-align: right;
}
</style>
