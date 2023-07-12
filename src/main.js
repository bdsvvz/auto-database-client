import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router'
import store from '@/store'
import App from './App.vue'

//全局引入ElementUI
Vue.use(ElementUI)
//阻止你显示显示生产模式的消息 
Vue.config.productionTip = false

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')
