import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
// 框架样式
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(Antd)
