import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Formatter from './formatter'

Vue.use(VueI18n)

const locale = 'en-US' // default locale
const formatter = new Formatter({ locale })

export default new VueI18n({
  locale,
  formatter,
  messages: {
    'en-US': {
      message: {
        sHome: 'Home',
        sDestination: 'Destination',
        sTravelRecord: 'Travel Diary',
        sLogin: 'Login',
        sSignUp: 'Sign Up',
        sUserName: 'Username',
        sPassword: 'Password',
        sEmail: 'Email',
        sConfirmPassword: 'Confirm Password',
        sPleaseInputUN: 'Please input your User Name',
        sPleaseInputPW: 'Please input your Password',
        sPleaseInputEmail: 'Please input your Email',
        sPleaseInputPWAgain: 'Please input your Password Again',
        sInconsistentpassword: 'Inconsistent Password'
      }
    },
    'zh-CN': {
      message: {
        sHome: '首页',
        sDestination: '目的地',
        sTravelRecord: '游记',
        sLogin: '登录',
        sSignUp: '注册',
        sUserName: '用户名',
        sPassword: '密码',
        sEmail: '邮箱',
        sConfirmPassword: '确认密码',
        sPleaseInputUN: '请输入用户名',
        sPleaseInputPW: '请输入密码',
        sPleaseInputEmail: '请输入邮箱地址',
        sPleaseInputPWAgain: '请再次输入密码',
        sInconsistentpassword: '密码不一致'
      }
    }
  }
})
