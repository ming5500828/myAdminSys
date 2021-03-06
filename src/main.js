// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/reset.css'
import '@/common/common.css'

//install ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//阿里font
import '@/assets/icon/iconfont.css';
import icon from '@/components/icon';

//全局注册 icon组件
Vue.component('icon', icon);

//加入进度条
import '@/permission' // permission control

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
