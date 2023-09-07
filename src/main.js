import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
// 框架样式
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 右键菜单
import Contextmenu from "vue-contextmenujs"
// 动画样式
import 'animate.css';
import { ConfigProvider, Calendar } from 'ant-design-vue';//引用
Vue.use(Antd)
Vue.component(ConfigProvider.name, ConfigProvider);//注册
Vue.component(Calendar.name, Calendar);//注册
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
Vue.use(Contextmenu)

