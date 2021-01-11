/*
 * @Author: your name
 * @Date: 2020-12-18 10:47:16
 * @LastEditTime: 2021-01-05 16:06:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Category = () => import("../views/category/Category.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Detail = () => import("../views/detail/Detail.vue")


//安装插件
Vue.use(VueRouter);



// 创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home',//设置默认指向的路径
    name: 'Home'
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/detail/:iid",
    name: "Datail",
    component: Detail
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
//导出路由
export default router;

