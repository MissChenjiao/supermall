<!--
 * @Author: chenjiao
 * @Date: 2021-01-06 15:08:39
 * @LastEditTime: 2021-01-11 14:32:59
 * @LastEditors: Please set LastEditors
 * @Description: 商品描述信息
 * @FilePath: \supermall\src\views\detail\childComps\DetailGoodsInfo.vue
-->
<template>
  <div class="DetailGoodsInfo" v-if="Object.keys(goods).length !== 0">
    <div class="title">{{ goods.itemInfo.title }}</div>
    <div class="goods-price">
      <span class="price">{{ goods.itemInfo.price }}</span>
      <span class="old-price">{{ goods.itemInfo.oldPrice }}</span>
      <span class="discount" :style="{backgroundColor:discountBgColor}">{{goods.itemInfo.discountDesc}}</span>
    </div>
    <div class="goods-columns">
      <span class="sales" style="text-align:left"> {{ goods.columns[0] }} </span>
      <span class="Collect" style="text-align:center">{{ goods.columns[1] }}</span>
      <span class="server" style="text-align:right">{{ goods.columns[2] }}</span>
    </div>
    <div class="servers">
      <span 
        class="serversitem"
        v-for="(item, index) in goods.shopInfo.services"
        :key="index"
        :style="{
          'text-align': 
            index == 1 ? 'center' : 
            index == 2 ? 'right' : ''
        }"
      >
      <img :src="item.icon" alt="">
      {{item.name}}
      </span>
    </div>

  </div>
</template>

<script>
  export default {
    name:"DetailGoodsInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      discountBgColor(){
        return this.goods.itemInfo.discountBgColor
      }
    }
  }
</script>

<style lang="scss" scoped>
.DetailGoodsInfo{
  margin:8px 5px;
}
.title{
  font-size:14px;
}
.goods-price{
  margin-top:10px;
  height:30px;
  position: relative;
}
.goods-price .price{
  color:deeppink;
  font-weight:bold;
  font-size:18px;
  padding-right: 5px;
}
.old-price{
  text-decoration:line-through;
  font-size:12px;
}
.discount{
  display: block;
  position: absolute;
  color:#fff;
  top:-8px;
  left:104px;
  width: 60px;
  height: 22px;
  border: 1px solid #eee;
  border-radius: 8px;
  font-size:13px;  
  text-align: center;
}
.goods-columns{
  display: flex;
  height:44px;
  line-height: 44px;
  border-bottom: 1px solid #ccc;
}
.goods-columns span{
  flex: 1;
  color:#8c8c8c;
  font-size:14px;
  
}
.servers{
  margin-top:10px;
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 3px rgba(100,100,100 ,0.08);

}
.servers span{
  width: 33.3%;
  font-size: 12px;
  color: #8c8c8c;
  // text-align: center;
  
}
.servers img{
  width:12px;
  height:12px;
}
</style>