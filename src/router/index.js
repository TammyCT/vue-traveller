import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/main-page/homePage'
import loginPage from '../components/main-page/login-page'
import signPage from '../components/main-page/sign-page/main-sign'
import ElementUI from 'element-ui'
import '../../theme/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    }, {
      path: '/login',
      name: 'LoginPage',
      component: loginPage
    }, {
      path: '/sign',
      name: 'signPage',
      component: signPage
    }
  ]
})
