import Vue from 'vue'
import Router from 'vue-router'
// import login from '@/components/login'
// import home from '@/components/home'
// 组建按需加载（懒加载es6提案）
const login = () => import('../components/login')
const home = () => import('../components/home')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
