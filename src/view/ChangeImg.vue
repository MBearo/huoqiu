<template>
  <div class="container">
    <Back></Back>
    <div class="neirong">
      <h3>编辑头像</h3>
      <div class="rongqi">
        <van-uploader :after-read="onRead" class="touxiang bg-cover" :style="`background-image:url(${$store.state.token.img})`">
          <!-- <van-icon name="photograph" /> -->
        </van-uploader>
      </div>
    </div>
    <div class="" style="padding:0 20px;box-sizing:border-box">
      <div class="go bg-primary color-white" @click="denglu"> 开始使用</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import urls from "../vuex/urls";
import qs from "qs";
import Back from "../components/Back";
export default {
  created() {
    this.$store.dispatch("NewsList_A");
    this.$store.dispatch("MaiShouFenLei_A");
    this.$store.commit("Window_M");
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
  computed: {
    url() {
      return urls.urls;
    }
  },
  methods: {
    denglu() {
      if (this.$store.state.token.img == "") {
        this.$toast("请选择图片");
      } else {
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
      // this.$store.state.user.name = this.name;
      // this.$store.state.user.password = this.password;
    },
    onRead(file) {
      console.log(file);
      let fd = new FormData();
      fd.append("file", file.file);
      axios
        .post(urls.urls + "Graduation/UploadImage", fd, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(result => {
          console.log(result);
          this.imgUrl = result.data.data.list[0].UploadFilename;
          if (result.data.errorcode == 0) {
            axios
              .get(urls.url2 + "s_gezhonggai.php", {
                params: {
                  table: "shop_user",
                  rowname: "img",
                  value: urls.urls + result.data.data.list[0].UploadFilename,
                  rowname2: "id",
                  value2: this.$store.state.token.id
                }
              })
              .then(result2 => {
                this.$toast("上传成功");
                this.$store.commit("Img_M", {
                  result: urls.urls + result.data.data.list[0].UploadFilename
                });
                console.log(result2);
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            this.$toast("上传失败2");
          }
        })
        .catch(result => {
          console.log(result);
          this.$toast("上传失败3");
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
.touxiang {
  margin: 30px 0;
  height: 70px;
  width: 70px;
  background-color: #f2f2f2;
  border-radius: 100%;
}
.rongqi {
  display: flex;
  justify-content: center;
}
</style>
