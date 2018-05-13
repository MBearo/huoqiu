<template>
  <div>
    <Back></Back>
    <div class="text-center" v-show="load" style="padding-top:20px">
      <van-loading class="inline-block" color="black" />
    </div>
    <div class="text-center" v-show="!ok&&!load" style="padding-top:20px">
      暂无符合条件的达人
    </div>
    <item v-show="ok&&!load" :data="item" v-for="(item,index) in list" :key="index"></item>
  </div>
</template>

<script>
import Back from "../components/Back";
import item from "../components/MaiShouItem";
import axios from "axios";
import urls from "../vuex/urls";
export default {
  components: {
    item,
    Back
  },
  data() {
    return {
      list: [],
      load:true,
      ok:false
    };
  },
  created() {
    this.refresh();
  },
  methods: {
    refresh() {
      var type = this.$route.params.type;
      if (type == "zuixin") {
        axios
          .get(urls.url2 + "s_select.php", {
            params: {
              table: "shop_user",
              name: "identity",
              value: "1",
              order: "time"
            }
          })
          .then(result => {
            console.log(result);
            this.go(result);
          })
          .catch(error => {
            console.log(error);
          });
      } else if (type == "tuijian") {
        axios
          .get(urls.url2 + "s_select.php", {
            params: {
              table: "shop_user",
              name: "identity",
              value: "1",
              order: "money"
            }
          })
          .then(result => {
            console.log(result);
            this.go(result);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        axios
          .get(urls.url2 + "s_select.php", {
            params: {
              table: "shop_user",
              name: "classify",
              value: type,
              order: "time"
            }
          })
          .then(result => {
            console.log(result);
            this.go(result);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    go(result) {
      this.list = result.data.data.list;
      this.load=false
      if(this.list.length>0){
        this.ok=true
      }
     // this.$router.push("/maishoulist");
    }
  }
};
</script>

<style>

</style>
