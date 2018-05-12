<template>
  <div class="container">
    <Back></Back>
    <div class="neirong">
      <h3>账号登录</h3>
      <div class="input">
        <input v-model="account" type="text" placeholder="账号">
      </div>
      <div class="input">
        <input v-model="password" type="password" placeholder="密码">
      </div>
    </div>
    <div class="" style="padding:0 20px;box-sizing:border-box">
      <div class="go bg-primary color-white" @click="denglu"> 开始使用</div>
    </div>
    <router-link class="zhuce text-center" tag="div" to="/register">
      没有账号？现在注册
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import urls from "../vuex/urls";
import qs from "qs";
import Back from "../components/Back";
export default {
  created() {

  },
  data() {
    return {
      account: "",
      password: ""
    };
  },
  components: {
    Back
  },
  methods: {
    denglu() {
      // this.$store.state.user.name = this.name;
      // this.$store.state.user.password = this.password;
      axios
        .get(urls.url2 + "s_login.php", {
          params: {
            account: this.account,
            password: this.password
          }
        })
        .then(result => {
          // commit("NewsList_M", {
          //   result
          // });
          if (result.data.code == 0) {
            this.$toast("登录成功");
            this.$store.commit("User_M", { result: result.data.data });
            this.$router.push("tab/haowu");
          } else {
            this.$toast("账号或密码错误！");
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
