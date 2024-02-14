import Vue from 'vue';
import VueRouter from 'vue-router';
// import sidebarmenu from './components/sidebar-menu.vue';
import ContentArea from './ContentArea.vue'; // 引入ContentArea02.vue組件
import ContentArea02 from './ContentArea02.vue'; // 引入ContentArea02.vue組件

Vue.use(VueRouter);
const routes = [
  // { path: '/sidebar-menu01', component: ContentArea }, // 將'/sidebar-menu01'路徑對應到ContentArea02組件
  // { path: '/category/:id', component: ContentArea02 }, // 將'/sidebar-menu01'路徑對應到ContentArea02組件
  { path: '/112', component: ContentArea02 }, // 將'/sidebar-menu01'路徑對應到ContentArea02組件
  { path: '/111', component: ContentArea }, // 將'/sidebar-menu01'路徑對應到ContentArea02組件

  // 其他路由設置
];
const router = new VueRouter({
  mode: 'history', // 可以使用HTML5 history模式，這樣URL會更加漂亮
  base: process.env.BASE_URL,
  routes
});

export default router;
