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
    }
  }
</script>

<style lang="scss" scoped>

</style>