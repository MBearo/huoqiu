import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import urls from './urls'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        //存滚动条的位置，用来控制新建文章页面的模拟器的位置
        scrollY: 0,
        windowW:0,
        token:''
    },
    actions: {


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
    },
    getters: {},
    modules: {}
})

