<!--
 * @Author: chenjiao
 * @Date: 2020-12-22 17:18:38
 * @LastEditTime: 2020-12-31 15:01:10
 * @LastEditors: Please set LastEditors
 * @Description: 首页轮播图
 * @FilePath: \supermall\src\views\home\childComps\HomeSwiper.vue
-->

<template>
  <div class="HomeSwiper">
     <van-swipe  :autoplay="3000">
      <van-swipe-item
        v-for="item in banners"
        :key="item.id"
      >
        <a :href="item.link">
          <van-image
            width="100%"
            height="200px"
            fit="cover"
            :src="item.image"
            @load="imageLoad"
           />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>

  export default {
    name:"HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    methods:{
      // 1.监听轮播图加载完成
      imageLoad(){
        // console.log("----")
        if(!this.isLoad){
          this.$emit("swiper-image-load")
          this.isLoad = true
        }
        
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>