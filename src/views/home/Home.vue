<template>
  <div id="Home">
    <nav-bar class="nav-home" ><div slot="center">购物街</div></nav-bar>
    <tab-control 
          v-show="this.isfixed" 
          class="tab-control" 
          :titles="['流行','新款','精品']"
          @tabClick="tabClick"
          ref="tabControl2"
        />
    <scroll class="wrapper-box" ref="scroll" 
     :probe-type="3"
     @scroll="contentScroll" 
     :pull-up-load="true" 
     @pullingUp="scrollUp">
      <div class="content">
        <home-swiper :banners="banners" @swiper-image-load="swiperImageLoad"/>
        <recommend-view :recommends="recommends"/>
        <feature/>
        <tab-control 
          class="tab-control" 
          :titles="['流行','新款','精品']"
          @tabClick="tabClick"
          ref="tabContorl1"
        />
        <goods-list :goods="showGoods"/>
      </div>
    </scroll>
    <back-top  @click.native="backTop" v-show="isShow"/>
  </div>
</template>

<script>

import NavBar from '../../components/common/tabbar/NavBar.vue'
import HomeSwiper from './childComps/HomeSwiper.vue'
import RecommendView from './childComps/RecommendView.vue'
import Feature from './childComps/Feature.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import BackTop from '../../components/content/backTop/BackTop.vue'


import TabControl from '../../components/content/tabControl/TabControl.vue'


import { getHomeMutation , getHomeGoods } from "../../network/home"
import { debounce } from "../../common/untils/debounce"


export default {
  name:"Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    Feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    
  },
  data(){
    return{
      result: null,
      banners:[],
      recommends:[],
      isShow:false,
      goods:{
        pop:{page: 0,list: []},
        new:{page: 0,list: []},
        sell:{page: 0,list: []}
      },
      currentType:"pop",
      taboffsetTop:0,
      isfixed:false,
      saveY:0
      
    }
  },
  created(){
    //1.轮播图发起请求
    this.getHomeMutation()
    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  
  },
  mounted(){
    //  3.监听goodslistitem每一张图片加载完成后，调用refresh 
    // console.log(this.$refs.tabContorl.$el.offsetTop)
    const refresh = debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on("itemImageLoad",()=>{
      //调用scroll的refresh,先判断scroll是否被初始化
      this.$refs.scroll && refresh()
    })
    
  },
  computed: {
    //1.取到点击的title的类型数据传给子组件
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  
  methods: {
    /**
      相关的事件监听
     */
     tabClick(index){
       switch(index){
         case 0:
           this.currentType = "pop"
           break;
         case 1:
           this.currentType = "new"
           break;
          case 2:
            this.currentType = "sell"
            break;   
       }
         console.log(this.$refs.tabControl2)
        // this.$refs.tabContorl1.currmentIndex = index;
        // this.$refs.tabControl2.currmentIndex = index;
     },
     //1.回到顶部
     backTop(){
       this.$refs.scroll.scrollTo(0,0)
     },
     //2.监听滑动事件
     contentScroll(position){
      //2.1当滑动距离小于1000不显示回到顶部按钮
       this.isShow = -(position.y) >1000
      //2.2当滑动距离大于tabControl的offsetTop时，显示fixed
        this.isfixed = -(position.y) > this.taboffsetTop

     },
     //3.上拉加载更多
     scrollUp(){
       this.getHomeGoods(this.currentType)
     },
    // 4.封装防抖函数，防止scroll的refresh调用太频繁
    debounce(fn,delay){
      let timer = null
      return function(...args){
        if (timer) clearTimeout(timer)
        //重新计时
        timer = setTimeout(()=>{
          fn.apply(this,args)
        },delay)
      }
    },
    //5.首页轮播图加载完成后计算tabcontorl的offsettop属性值
    swiperImageLoad(){
       this.taboffsetTop = this.$refs.tabContorl1.$el.offsetTop
  
     }, 

    /**
    *   发起的网络请求
     */
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

        this.$refs.scroll.finishPullUp()
        
      })
    }
  },
  destroyed () {
    console.log('-----');
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getScrolly();
  }
}
</script>

<style scoped>
#Home {
  /* padding-top:44px; */
  height: 100vh;
  position: relative;
}

.nav-home {
  font-size:16px;
  color:#fff;
  background-color: #ff8198;
  /* position: fixed;
  top:0;
  right:0;
  left: 0;
  z-index: 9; */
}
.tab-control {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
.wrapper-box {
  overflow: hidden;
  position: absolute;
  top:44px;
  right:0;
  left:0;
  width:100%;
  bottom: 49px;
  
}


</style>