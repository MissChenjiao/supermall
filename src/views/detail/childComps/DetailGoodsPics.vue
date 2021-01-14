<!--
 * @Author: chenjiao
 * @Date: 2021-01-11 14:51:22
 * @LastEditTime: 2021-01-14 14:27:46
 * @LastEditors: Please set LastEditors
 * @Description: 商品详情图片展示
 * @FilePath: \supermall\src\views\detail\childComps\DetailGoodsPics.vue
-->
<template>
  <div class="detailGoodsPics">
    <div class="pic-desc">
      <p>---------</p>
      <p style="font-size:12px">【2件69元】【新品特惠】【赠送运费险】【七天无理由托换货】【无忧售后】</p>
      <p>---------</p>
      </div>
    <div class="good-desc">
      <p v-if="imgList.length > 0">{{imgList[0].key}}</p>
    </div>
    <div class="pic-item" v-if="imgList[0] && imgList[0].list.length!==0">
      <img 
       v-for="item in imgList[0].list"
      :key="item.index"
      :src="item" alt="单个图片" />
    </div>
  </div>
 
</template>

<script>
  export default {
    name:'DetailGoodsPics',
    props:{
      imgList:{
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.pic-item{
  margin:auto 3px;
}
.pic-item img{
  width:100%;
}
</style>