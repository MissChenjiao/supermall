<template>
  <div id="Home">
    <nav-bar class="nav-home" ><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <feature/>
    <tab-control class="tab-control" :titles="['流行','新款','精品']"/>
    <goods-list :goods="goods['pop'].list"/>

  </div>
</template>

<script>

import NavBar from '../../components/common/tabbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import Feature from './childComps/Feature.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'


import TabControl from '../../components/content/tabControl/TabControl.vue'


import { getHomeMutation , getHomeGoods } from "../../network/home"

export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    
  },
  data(){
    return{
      result: null,
      banners:[],
      recommends:[],
      goods:{
        pop:{page: 0,list: []},
        new:{page: 0,list: []},
        sell:{page: 0,list: []}
      }
      
    }
  },
  created(){
    //1.轮播图发起请求
    this.getHomeMutation()
    // 2.请求商品数据
    this.getHomeGoods('pop')
  },
  methods: {
    // 1.请求轮播图数据
    getHomeMutation(){
      getHomeMutation().then(res=>{
     
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
      console.log(res.data)
       
    })
    },
    //2.请求首页商品数据
    getHomeGoods(type){
      const page = this.goods[type].page +1;
      getHomeGoods(type,page).then(res=>{
        console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  },
   
}
</script>

<style>
#Home {
  padding-top:44px;
}
.nav-home {
  font-size:16px;
  color:#fff;
  background-color: #ff8198;
  position: absolute;
  top:0;
  right:0;
  left: 0;
  z-index: 9;
}
.tab-control {
  display: sticky;
  top: 44px;
}
</style>