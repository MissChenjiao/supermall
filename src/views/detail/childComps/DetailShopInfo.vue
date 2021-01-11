<!--
 * @Author: chenjiao
 * @Date: 2021-01-07 11:22:33
 * @LastEditTime: 2021-01-11 16:01:55
 * @LastEditors: Please set LastEditors
 * @Description: 商品详情店铺信息
 * @FilePath: \supermall\src\views\detail\childComps\DetailShopInfo.vue
-->
<template>
  <div class="DetailShopInfo">
    <div class="shop-logo-name">
      <img :src="shop.shopLogo" alt="头像">
      <span>{{ shop.name }}</span>
    </div>
    <div class="sales">
      <div class="sales-left">
        <span class="cSells">
          <p>{{shop.cSells}}</p>
          <p>总销量</p>
        </span>
        <span class="cGoods">
           <p>{{shop.cGoods}}</p>
           <p>全部宝贝</p>
        </span>
      </div>
      <div class="evaluate">
        <div 
          v-for="item in shop.score"
          :key="item.index"
          >{{item.name}} 
          <span :class="{color: item.isBetter}">{{item.score}}</span>
          <span :class="{color:!isBetter==item.isBetter}" >{{item.isBetter ? "高" : "低"  }}</span>
        </div>
      </div>
    </div>
    <div class="shop"><a :href="shop.shopUrl">进店逛逛</a></div>
  </div>
</template>

<script>
  export default {
    name:"DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{
        isBetter:false
      }
      
    }
  }
</script>

<style lang="scss" scoped>
.DetailShopInfo{
  height:250px;
}
.shop-logo-name{
  height: 80px;
  line-height: 80px;
  background:#fff;
}
.shop-logo-name img{
  width:20%;
  height:80px;
  vertical-align:middle;
  border: 1px solid #ccc;
  border-radius:50%;
  
}
.shop-logo-name span{
  font-size: 20px;
  margin-left:10px;

}
.sales{
  height:85px;
  display: flex;
}
.sales .sales-left{
  height:80px;
  
}
.sales div{
  flex: 1;
}
.sales-left span{
  display: inline-block;
  width:49%;
  font-size:12px;
  text-align: center; 
}
.sales-left .cGoods{
  border-right: 1px solid #8c8c8c;
}
.evaluate div{
  margin-left:20px;
  font-size: 12px;
  line-height: 25px;
}
.evaluate span{
  padding-left:5px;
  
}
.color{
  display: inline-block;
  width:20px;
  height:18px;
  color:#fff;
  background-color:#C80000;
  margin:0 5px;
}
.shop{
  text-align: center;
  padding-bottom:20px;
  border-bottom: 3px solid rgb(100,100,100,0.15);
  
}
.shop a{
  text-decoration: none;
  color:#fff;
  font-size:14px;
  display: inline-block;
  width:110px;
  height:33px;
  border-radius: 5px;
  line-height: 33px;
  background-color:#8c8c8c;
  border: 1px solid #8c8c8c;
}
</style>
