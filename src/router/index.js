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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
      path: '/Details',
      name: 'Details',
      component: Details
    }
  ]
})
