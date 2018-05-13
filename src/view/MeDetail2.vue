<template>
  <div>
    <!-- <Back style="margin-bottom:20px;"></Back>
    <div class="my_card flex" @click="$router.push(`/MeDetail/${$store.state.token.id}`)">
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
    </div> -->
    <div class="back" @click="$router.go(-1)">
      <i class="iconfont icon-back"></i>
    </div>
    <div class="banner bg-cover" :style="{backgroundImage: `url(${data.banner})`}">
      <div class="imgs bg-cover" :style="{backgroundImage: `url(${data.img})`}"></div>
    </div>
    <div class="cont">
      <div class="names">
        {{data.name}}
      </div>
      <div class="indentity flex" style="margin-top:5px;">
        <div class="tag" v-show="$data.identity==1">
          好物达人
        </div>
        <div class="tag" v-show="$data.identity!=1">
          <i class="iconfont icon-icon2"></i> 新晋公民
        </div>
      </div>
      <div class="desc">
        {{data.descs}}
      </div>
    </div>
    <div style="height:5px;background-color:#f2f2f2"></div>
    
  </div>
</template>

<script>
import Back from "../components/Back";
import axios from "axios";
import urls from "../vuex/urls";
export default {
  computed: {},
  components: {
    Back
  },
  data() {
    return {
      data: {
        banner: "",
        img: "",
        name: "",
        identity: "",
        descs: ""
      }
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      axios
        .get(urls.url2 + "s_userinfo.php", {
          params: {
            id: this.$route.params.id
          }
        })
        .then(result => {
          console.log(result);
          this.data = result.data.data.list[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
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
.desc {
  font-size: 12px;
  color: #666;
  line-height: 2;
}
.back {
  position: absolute;
  top: 10px;
  left: 10px;
  height: 40px;
  width: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 100%;
  color: white;
  z-index: 100;
  transition: all 0.15s;
}
.back:active {
  background-color: #666;
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
</style>
