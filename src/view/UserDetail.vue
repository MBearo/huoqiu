<template>
  <div>
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
  </div>
</template>

<script>
import axios from "axios";
import urls from "../vuex/urls";
export default {
  computed: {},
  data() {
    return {
      data: {
        banner: "",
        img: "",
        name: "",
        identity: "",
        descs:''
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
          this.data=result.data.data.list[0]
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
</style>
