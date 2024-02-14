import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
 // 引入路由配置文件

Vue.config.productionTip = false;

new Vue({
  vuetify,
  VueRouter, // 使用 router
  render: h => h(App)
}).$mount('#app');
