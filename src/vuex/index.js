import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import urls from './urls'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    //存滚动条的位置，用来控制新建文章页面的模拟器的位置
    scrollY: 0,
    windowW: 0,
    token: '',
    list: [{
      img: "",
      name: "",
      banner: "",
      title: "",
      like: "",
      time: ""
    }],
    maishoufenlei: [],
    zuixin: [],
    tuijian: [],
    myOrder: [],
    myLike: []
  },
  actions: {
    NewsList_A({
      commit,
      state
    }) {
      axios
        .get(urls.url2 + "s_haowu.php")
        .then(result => {
          console.log(result);
          commit('NewsList_M', { result: result.data.data.list })
        })
        .catch(error => {
          console.log(error);
        });

    },
    MaiShouFenLei_A({
      commit,
      state
    }) {
      axios
        .get(urls.url2 + "s_classify.php")
        .then(result => {
          console.log(result);
          commit('MaiShouFenLei_M', { result: result.data.data.list })
        })
        .catch(error => {
          console.log(error);
        });
    },
    ZuiXin_A({
      commit,
      state
    }) {
      axios
        .get(urls.url2 + "s_select.php", {
          params: {
            table: 'shop_user',
            name: 'identity',
            value: '1',
            order: 'time'
          }
        })
        .then(result => {
          console.log(result);
          commit('ZuiXin_M', { result: result.data.data.list })
        })
        .catch(error => {
          console.log(error);
        });
    },
    TuiJian_A({
      commit,
      state
    }) {
      axios
        .get(urls.url2 + "s_select.php", {
          params: {
            table: 'shop_user',
            name: 'identity',
            value: '1',
            order: 'money'
          }
        })
        .then(result => {
          console.log(result);
          commit('TuiJian_M', { result: result.data.data.list })
        })
        .catch(error => {
          console.log(error);
        });
    },
    MyOrder_A({
      commit,
      state
    }) {
      console.log(state.token.id)
      axios
        .get(urls.url2 + "s_myOrder.php", {
          params: {
            id: state.token.id,
          }
        })
        .then(result => {
          console.log(result);
          commit('MyOrder_M', { result: result.data.data.list })
        })
        .catch(error => {
          console.log(error);
        });
    },
    MyLike_A({
      commit,
      state
    }) {
      console.log(state.token.id)
      axios
        .get(urls.url2 + "s_myLike.php", {
          params: {
            id: state.token.id,
          }
        })
        .then(result => {
          console.log(result);
          commit('MyLike_M', { result: result.data.data.list })
        })
        .catch(error => {
          console.log(error);
        });
    },

  },
  mutations: {
    Scroll_M(state, {
      result
    }) {
      state.scrollY = result
    },
    Window_M(state) {
      state.windowW = window.screen.width
    },
    User_M(state, {
      result
    }) {
      state.token = result;
    },
    Img_M(state, {
      result
    }) {
      state.token.img = result;
    },
    NewsList_M(state, {
      result
    }) {
      state.list = result;
    },
    MaiShouFenLei_M(state, {
      result
    }) {
      state.maishoufenlei.splice(0, state.maishoufenlei.length)
      result.forEach(element => {
        state.maishoufenlei.push(element)
      });
    },
    ZuiXin_M(state, {
      result
    }) {
      state.zuixin.splice(0, state.zuixin.length)
      for (let i = 0; i < 5; i++) {
        state.zuixin.push(result[i])
      }
    },
    TuiJian_M(state, {
      result
    }) {
      state.tuijian.splice(0, state.tuijian.length)
      for (let i = 0; i < 5; i++) {
        state.tuijian.push(result[i])
      }
    },
    MyOrder_M(state, {
      result
    }) {
      state.myOrder.splice(0, state.myOrder.length)
      result.forEach(element => {
        state.myOrder.push(element)
      });
    },
    MyLike_M(state, {
      result
    }) {
      state.myLike.splice(0, state.myLike.length)
      result.forEach(element => {
        state.myLike.push(element)
      });
    },
  },
  getters: {},
  modules: {}
})

