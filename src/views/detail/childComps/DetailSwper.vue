<!--
 * @Author: chenjiao
 * @Date: 2021-01-05 20:23:20
 * @LastEditTime: 2021-01-06 15:01:48
 * @LastEditors: Please set LastEditors
 * @Description: 商品详情轮播图封装
 * @FilePath: \supermall\src\views\detail\childComps\DetailSwper.vue
-->
<template>
  <div class="DetailSwiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item 
        :key="item.id"
        v-for="item in topImages">
          <van-image
            width="100%"
            fit="fill"
            :src="item"
          />
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    name:"DetailSwiper",
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.my-swipe .van-swipe-item {
    
    color: #fff;
    font-size: 20px;
    height: 380px;
    line-height: 380px;
    overflow: hidden;
    text-align: center;
    // background-color: #39a9ed;
  }
</style>