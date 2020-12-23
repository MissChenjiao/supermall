<template>
  <div class="MainTabBar">
     <tab-bar>
      <tab-bar-item path="/home" activeColor="deeppink">
        <img slot="item-icon" src= '../../assets/img/tabbar/home.png' alt="">
        <img slot="item-icon-active" src="../../assets/img/tabbar/activeHome.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deeppink">
        <img slot="item-icon" src= '../../assets/img/tabbar/yunYin.png' alt="">
        <img slot="item-icon-active" src= '../../assets/img/tabbar/activeYunYin.png' alt="">
        <div slot="item-text">运营管理</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deeppink">
        <img slot="item-icon" src= '../../assets/img/tabbar/shopCar.png' alt="">
        <img slot="item-icon-active" src= '../../assets/img/tabbar/activeShopCar.png' alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <img slot="item-icon" src= '../../assets/img/tabbar/profile.png' alt="">
        <img slot="item-icon-active" src= '../../assets/img/tabbar/activeProfile.png' alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
   </tab-bar>
  </div>
</template>

<script>
import TabBar from "../common/tabbar/TabBar.vue"
import TabBarItem from "../common/tabbar/TabBarItem.vue"
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
