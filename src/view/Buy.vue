<template>
  <div>
    <Back></Back>
    <van-cell-group>
      <van-field :value="data.goods" label="商品名" disabled />
      <van-field :value="data.price" label="价格" disabled />
      <van-field :value="data.freight" label="邮费" disabled />
      <van-field v-model="bunum" label="购买数量" type="num" />
      <van-field v-model="dizhi" label="地址" />
      <van-field v-model="name" label="姓名" />
      <van-field v-model="dianhua" label="联系方式" />
    </van-cell-group>
    <div class="text-center" style="margin-top:60px;">
      <van-button class="bg-primary" @click="go">￥{{zongjia}} 确认购买</van-button>
    </div>
    <van-popup v-model="show" position="top" :overlay="false">
      余额不足
    </van-popup>
  </div>
</template>

<script>
import axios from "axios";
import urls from "../vuex/urls";
import qs from "qs";
import Back from "../components/Back";
export default {
  components: {
    Back
  },
  data() {
    return {
      ss: "sssss",
      data: {
        goods: "",
        price: "",
        freight: ""
      },
      bunum: 1,
      dizhi: "",
      name: "",
      dianhua: "",
      show: false
    };
  },
  computed: {
    zongjia() {
      return this.data.price * this.bunum + parseInt(this.data.freight);
    }
  },
  created() {
    this.get();
  },
  methods: {
    get() {
      axios
        .get(urls.url2 + "s_getArticle.php", {
          params: {
            aid: this.$route.params.id
          }
        })
        .then(result => {
          console.log(result);
          this.data = result.data.data.list[0];
        })
        .catch(error => {
          console.log(error);
        });
    },
    go() {
      if (this.bunum == 0) {
        this.$toast("请选择数量");
        return;
      } else if (this.dianhua=='') {
        this.$toast("请填写联系方式");
        return;
      } else if (this.name=='') {
        this.$toast("请填写名称");
        return;
      } else if (this.dizhi=='') {
        this.$toast("请填写地址");
        return;
      }

      if (this.zongjia > this.$store.state.token.money) {
        this.$toast("余额不足！");
        return;
      }
      axios
        .get(urls.url2 + "s_addOrder.php", {
          params: {
            aid: this.$route.params.id,
            uid: this.$store.state.token.id,
            num: this.bunum,
            address: this.dizhi,
            phone: this.dianhua,
            name: this.name
          }
        })
        .then(result => {
          console.log(result);
          this.$toast("下单成功！");
          this.$router.go(-1)
          // this.data = result.data.data.list[0];
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.van-button--default.bg-primary {
  background-color: #e22829;
  color: white;
}
</style>
