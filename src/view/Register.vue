<template>
  <div class="container">
    <div class="topbar flex bg-white">
      <div class="flex-0 topba_button">
        <i class="iconfont icon-back"></i>
      </div>
      <div class="flex-1">

      </div>
      <div class="flex-0 topba_button"></div>
    </div>
    <div class="neirong">
      <h3>账号注册</h3>
      <div class="input">
        <input v-model="account" type="text" placeholder="用户名">
      </div>
      <div class="input">
        <input v-model="password" type="password" placeholder="密码">
      </div>
      <div class="input">
        <input v-model="names" type="text" placeholder="昵称">
      </div>
    </div>
    <div class="" style="padding:0 20px;box-sizing:border-box">
      <div class="go bg-primary color-white" @click="denglu"> 下一步</div>
    </div>
    <router-link class="zhuce text-center" tag="div" to="/register">
      已有账号？现在登录
    </router-link>
  </div>
</template>

<script>
import urls from "../vuex/urls";
import qs from "qs";
import axios from "axios";
export default {
  data() {
    return {
      account: "",
      password: "",
      names: "",
      phone: ""
    };
  },
    created() {

  },
  methods: {
    denglu() {
  //、、 this.$store.state.user.name = this.name;
     // this.$store.state.user.password = this.password;
      axios
        .get(urls.url2 + "s_register.php", {
          params: {
            account: this.account,
            password: this.password,
            name:this.names
          }
        })
        .then(result => {
          // commit("NewsList_M", {
          //   result
          // });
          if (result.data.code == 0) {
            this.$toast("注册成功");
            this.$store.commit("User_M", { result: result.data.data });
            this.$router.push("ChangeImg");

          } else {
            this.$toast("账号已存在！");
          }
          console.log(result);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  height: 100vh;
}
.input {
  border-bottom: 1px solid #f2f2f2;
  padding: 10px 0;
  box-sizing: border-box;
  margin: 30px 0;
}
.input input {
  border: none;
  outline: none;
}
.neirong {
  box-sizing: border-box;
  padding: 10px 20px;
}
.topbar {
  height: 46px;
  line-height: 46px;
}
i {
  font-size: 20px;
}
.topba_button {
  width: 46px;
  line-height: 46px;
  text-align: center;
  border-radius: 100%;
}
.topba_button:active {
  background-color: #e8e8e8;
}
.go {
  height: 35px;
  line-height: 35px;
  text-align: center;
  border-radius: 100px;
}
.go:active {
  background-color: #b30f10;
}
.zhuce {
  font-size: 12px;
  padding: 15px 0;
  box-sizing: border-box;
}
</style>
