// 匯入 Vue
import Vue from 'vue';
// 匯入 VueRouter
import VueRouter from 'vue-router';
// 匯入側邊欄選單組件
import sidebarmenu from './components/sidebar-menu.vue';
// 匯入內容區域 02 組件
import ContentArea02 from './components/ContentArea02.vue';
// 使用 VueRouter
Vue.use(VueRouter);
// 定義路由
const routes = [
  {
    // 路徑：/category1/Item 3
    path: '/category1/Item 3',
    // 組件：側邊欄選單
    component: sidebarmenu
  },
  {
    // 路徑：/category1/Item 2
    path: '/category1/Item 2',
    // 組件：內容區域 02
    component: ContentArea02
  },
  // 其他路由設定
];
// 建立 VueRouter 物件
const router = new VueRouter({
  // 模式：history
  mode: 'history',
  // 基礎路徑
  base: process.env.BASE_URL,
  // 路由設定
  routes
});
// 在路由守衛中進行額外處理
router.beforeEach((to, from, next) => {
  // 如果目標路由和當前路由相同，但還希望執行導航，則手動調用 next()
  if (to.path === from.path) {
    // 這裡可以加上你需要的額外邏輯
    // 比如執行某個函式、發出提示等
    next();
  } else {
    next();
  }
});
// 匯出路由器
export default router;
