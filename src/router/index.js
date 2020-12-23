import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../views/home/Home.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Category = () => import("../views/category/Category.vue")
const Profile = () => import("../views/profile/Profile.vue")


//安装插件
Vue.use(VueRouter);



// 创建路由对象
const routes = [
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
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});
//导出路由
export default router;

