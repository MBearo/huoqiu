import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Tab from '@/view/Tab'
import HaoWu from '@/view/HaoWu'
import MaiShou from '@/view/MaiShou'
import Me from '@/view/Me'
import Login from '@/view/Login'
import Register from '@/view/Register'
import Details from '@/view/Details'
import UserDetail from '@/view/UserDetail'
import ChangeImg from '@/view/ChangeImg'
import MaiShouList from '@/view/MaiShouList'
import MeDetail from '@/view/MeDetail'
import Buy from '@/view/Buy'
import MyOrder from '@/view/MyOrder'
import MyLike from '@/view/MyLike'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Tab',
      name: 'Tab',
      component: Tab,
      children: [{
        path: 'HaoWu',
        name: 'HaoWu',
        component: HaoWu,
      }, {
        path: 'MaiShou',
        name: 'MaiShou',
        component: MaiShou,
      }, {
        path: 'Me',
        name: 'Me',
        component: Me,
      }]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Details/:id/:index',
      name: 'Details',
      component: Details
    }
    ,
    {
      path: '/UserDetail/:id',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path: '/MeDetail/:id',
      name: 'MeDetail',
      component: MeDetail
    },
    {
      path: '/ChangeImg',
      name: 'ChangeImg',
      component: ChangeImg
    }
    ,
    {
      path: '/MaiShouList/:type',
      name: 'MaiShouList',
      component: MaiShouList
    },
    {
      path: '/Buy/:id',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/MyOrder',
      name: 'MyOrder',
      component: MyOrder
    }
    ,
    {
      path: '/MyLike',
      name: 'MyLike',
      component: MyLike
    }
  ]
})
