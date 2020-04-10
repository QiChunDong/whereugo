
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 动态路由参数
      name: 'Detail',
      component: Detail
    }
  ],
  // 滚动行为，当加载进一个新的组件或路由的时候，滚到制定的位置，一般用作滚到最上层
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
