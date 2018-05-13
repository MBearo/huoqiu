<template>
  <div>
    <div class="banner" :style="bannerStyle">
      <div class="aha bg-cover" :style="{backgroundImage: `url(${msg.banner2})`}"></div>
      <div class="cover"></div>
      <div class="user flex">
        <div class="touxiang bg-cover" :style="{backgroundImage: `url(${msg.img})`}"></div>
        <div class="mingzi">{{msg.name}}</div>
      </div>
      <div class="biaoti">{{msg.title}}</div>
    </div>
    <div class="content">
      <div v-html="msg.content"></div>
    </div>

    <div class="caozuo flex">
      <div class="">
        <div class="cont" @click="like" :class="{'color-primary':likec,'boc':likec}">
          <i class="iconfont icon-shouye8"></i>
        </div>
        <div>{{likelist.length}} 人喜欢</div>
      </div>
      <div class="">
        <div class="cont" @click="show=true">
          <i class="iconfont icon-shouye9"></i>
        </div>
        <div>{{list.length}} 人留言</div>
      </div>
    </div>
    <div style="height:10px;background-color:#f1f1f1;"></div>
    <div class="liuyan">
      <div class="flex shangmian">
        <div class="flex-1">
          <div style="font-size:18px;">留言</div>
          <div style="font-size:12px;color:#666;">MESSAGE</div>
        </div>
        <div class="flex-0 color-primary liuyanbutton" @click="show=true">
          <i class="iconfont icon-icon11"></i> 留言
        </div>
      </div>
      <div style="padding-top:20px;">
        <liu-yan :data="item" v-for="(item,index) in list" :key="index"></liu-yan>
      </div>
    </div>
    <van-popup v-model="show" style="width:90%">
      <div class="wenzi">
        <div class="flex">
          <div class="flex-0" @click="show=false">
            <i class="iconfont icon-back"></i>
          </div>
          <div class="flex-1"></div>
          <div class="flex-0">
            留言
          </div>
        </div>
        <div class="aha" style="padding:10px 0;">
          ”有什么你就说吧“
        </div>
        <div class="liuyanwenzi">
          <textarea name="" id="" cols="30" rows="10" v-model="wenzi" style="border:1px solid #f2f2f2;width:100%;"></textarea>
        </div>
        <div class="text-center">
          <div class="inline-block tijiaoliuyan" @click="addpinglun">提交</div>
        </div>
      </div>
    </van-popup>

    <div style="height:60px;"></div>
    <div class="bottom flex">
      <div class="back icon flex-0" @click="back">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="icon flex-0 big" @click="like" :class="{'color-primary':likec}">
        <i class="iconfont icon-shouye8"></i>
        <span>{{likelist.length}}</span>
      </div>
      <div class="icon flex-0 big" style="margin-left:10px;" @click="show=true">
        <i class="iconfont icon-shouye9"></i>
        <span>{{list.length}}</span>
      </div>
      <div class="flex-1">

      </div>
      <div class="Cbutton flex-0">
        <div class="button" @click="buy">￥{{msg.price}}购买 ></div>
      </div>
    </div>
  </div>
</template>

<script>
import LiuYan from "../components/LiuYan";
import axios from "axios";
import urls from "../vuex/urls";
export default {
  data() {
    return {
      show: false,
      wenzi: "",
      list: [],
      likec: false,
      likelist: []
    };
  },
  components: {
    LiuYan
  },
  created() {
    console.log("aid:" + this.$route.params.id);
    console.log(this.$route.params.index);
    this.pinglun();
    this.likelists();
  },
  computed: {
    bannerStyle() {
      return {
        height: this.$store.state.windowW * 5 / 8 + "px"
      };
    },
    msg() {
      return this.$store.state.list[this.$route.params.index];
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    addpinglun() {
      axios
        .get(urls.url2 + "s_addpinglun.php", {
          params: {
            aid: this.$route.params.id,
            uid: this.$store.state.token.id,
            content: this.wenzi
          }
        })
        .then(result => {
          console.log(result);
          this.$toast("发布成功");
          this.show = false;
          this.pinglun();
        })
        .catch(error => {
          console.log(error);
        });
    },
    likelists() {
      axios
        .get(urls.url2 + "s_likeList.php", {
          params: {
            aid: this.$route.params.id
          }
        })
        .then(result => {
          console.log(result);
          this.likelist = result.data.data.list;
        })
        .catch(error => {
          console.log(error);
        });
    },
    pinglun() {
      axios
        .get(urls.url2 + "s_comment.php", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(result => {
          console.log(result);
          this.list = result.data.data.list;
          this.list.forEach(value => {
            if (value.uid == this.$store.state.token.id) {
              this.likec = true;
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    like() {
      if (this.likec) {
        this.msg.like = parseInt(this.msg.like) - 1;
        this.likec = false;
        this.$toast("已取消");
        axios
          .get(urls.url2 + "s_likeDelete.php", {
            params: {
              uid: this.$store.state.token.id,
              aid: this.$route.params.id
            }
          })
          .then(result2 => {
            console.log(result2);
            this.likelists();
            // this.$store.dispatch('NewsList_A')
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        this.msg.like = parseInt(this.msg.like) + 1;
        this.likec = true;
        this.$toast("喜欢成功");
        console.log(this.$store.state.token.id);
        console.log(this.$route.params.id);
        axios
          .get(urls.url2 + "s_likeAdd.php", {
            params: {
              uid: parseInt(this.$store.state.token.id),
              aid: parseInt(this.$route.params.id)
            }
          })
          .then(result2 => {
            this.likelists();
            console.log(result2);
            // this.$store.dispatch('NewsList_A')
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    buy() {
      this.$router.push(`/buy/${this.$route.params.id}`)
    }
  }
};
</script>

<style scoped>
.banner {
  position: relative;
}
.cover {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
}
.aha {
  height: 100%;
  width: 100%;
}
.user {
  position: absolute;
  bottom: 25px;
  left: 25px;
  align-items: center;
}
.touxiang {
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: #ccc;
  margin-right: 5px;
}
.mingzi {
  color: white;
  font-size: 14px;
}
.biaoti {
  position: absolute;
  bottom: 60px;
  left: 25px;
  right: 25px;
  color: white;
  font-size: 18px;
}
.content {
  padding: 20px;
  box-sizing: border-box;
}

.bottom {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  width: 100%;
  height: 56px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
}
.back {
  width: 56px;
  transition: all 0.15s;
}
.back:active {
  background-color: #f2f2f2;
}
.icon {
  height: 56px;

  line-height: 56px;
  text-align: center;
}
.icon i {
  font-size: 18px;
}
.big {
  display: flex;
  align-items: center;
  color: #ccc;
}
.big.color-primary {
  color: #e22829;
}
.big i {
  font-size: 22px;
  margin-right: 3px;
}
.Cbutton {
  height: 56px;
  display: flex;
  align-items: center;
  padding-right: 10px;
  box-sizing: border-box;
}
.button {
  height: 40px;
  line-height: 40px;
  color: white;
  background-color: #ef5a5c;
  padding: 0 10px;
  border-radius: 4px;
  transition: all 0.15s;
}
.button:active {
  background-color: #be3b3d;
}
.caozuo {
  border-top: 1px solid #f2f2f2;
  padding: 30px 0;
  justify-content: space-around;
  flex-wrap: nowrap;
  position: relative;
}
.caozuo::after {
  content: "";
  display: block;
  width: 1px;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  background-color: #f2f2f2;
}
.caozuo > div {
  text-align: center;
}

.cont {
  border-radius: 100%;
  height: 50px;
  width: 50px;
  line-height: 50px;
  border: 1px solid #f2f2f2;
  text-align: center;
  display: inline-block;
  margin-bottom: 8px;
}
.cont i {
  font-size: 26px;
}
.liuyan {
  padding: 20px;
  padding-bottom: 0px;
  box-sizing: border-box;
}
.liuyanbutton {
  transition: all 0.15s;
  padding: 5px 8px;
}
.liuyanbutton:active {
  background-color: #f2f2f2;
}
.shangmian {
  align-items: center;
}
.wenzi {
  padding: 20px;
  box-sizing: border-box;
  border-radius: 4px;
}
.aha {
  font-size: 16px;
}
.tijiaoliuyan {
  padding: 5px 10px;
  background-color: #be3b3d;
  color: white;
  border-radius: 4px;
  transition: all 0.15s;
}
.tijiaoliuyan:active {
  background-color: #a72d2e;
}
.boc {
  border-color: #e22829;
}
</style>
<style>
.content img {
  width: 100%;
}
</style>
