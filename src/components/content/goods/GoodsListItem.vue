<!--
 * @Author: chenjiao
 * @Date: 2020-12-23 17:30:59
 * @LastEditTime: 2021-01-11 15:32:25
 * @LastEditors: Please set LastEditors
 * @Description: goods
 * @FilePath: \supermall\src\components\content\goods\GoodsListItem.vue
-->

<template>
  <div class="goods-list-item" @click="itemClick">
    <!-- <a :href="goodsItem.link"><img :src="goodsItem.show.img" @load="imageLoad"></a> -->
    <img :src="goodsItem.show.img" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collet">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"goods-list-item",
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      //1.监听每一张图片是否加载完成，加载完成后通知home
      imageLoad(){
        // console.log("图片加载完成")
        this.$bus.$emit("itemImageLoad")
      },
      //2.点击跳转详情页
      itemClick(){
        this.$router.push("/detail/"+this.goodsItem.iid)
      }
    }
  }
</script>

<style lang="scss" scoped>
.goods-list-item { 
  display: relative;
  border-bottom: 40px;
  width:48%
}
.goods-list-item img {
  width:100%;
  border-radius: 5px;
}
.goods-info {
  font-size: 12px;
  display: absolute;
  bottom:5px;
  left:0;
  right:0;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top:3px;
}
.goods-info .price {
  color:deeppink;
  margin-right: 20px;
}
.goods-info .collet {
  display: relative;
}
.goods-info .collet::before{
  content: '';
  position: absolute;
   left: -15px;
   top:-12px;
  display: block;
  width: 14px;
  height:14px;
  background: url("../../../assets/img/common/collect.png") 0 0/14px 14px;
}
</style>