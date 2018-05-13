<template>
  <div class="ccc flex">
    <div class="flex-0 img bg-cover" :style="{backgroundImage: `url(${data.img})`}"></div>
    <div class="flex-1">
      <div class="flex">
        <div class="flex-1" style="font-size:12px;">
          {{data.name}}
        </div>
        <div class="flex-0" :class="{'color-primary':active}" @click="go">
          <i class="iconfont icon-icon"></i>
          <span> {{data.zan}}</span>
        </div>
      </div>
      <div class="">
        {{data.content}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import urls from "../vuex/urls";
export default {
  props: {
    data: {
      img: {
        default: ""
      },
      content: {
        default: ""
      },
      name: {
        default: ""
      },
      zan: {
        default: "0"
      }
    }
  },
  data() {
    return {
      active: false
    };
  },
  methods: {
    go() {
      if (this.active) {
        this.data.zan = parseInt(this.data.zan) - 1;
        this.active = false;
        this.$toast("已取消");
      } else {
        this.data.zan = parseInt(this.data.zan) + 1;
        this.active = true;
        this.$toast("点赞成功");
      }
      axios
        .get(urls.url2 + "s_gezhonggai.php", {
          params: {
            table: "shop_comment",
            rowname: "zan",
            value: parseInt(this.data.zan),
            rowname2: "id",
            value2: this.data.cid
          }
        })
        .then(result2 => {
          console.log(result2);
         // this.$store.dispatch('NewsList_A')
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.ccc {
  margin-bottom: 20px;
}
.img {
  height: 20px;
  width: 20px;
  border-radius: 100%;
  background-color: #f2f2f2;
  margin-right: 10px;
}
</style>
