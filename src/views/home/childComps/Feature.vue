<template>
  <div class="featrue">
    <a href="#"><img :src="img" /></a>
  </div>
</template>

<script>
  export default {
    name:"featrue",
    data() {
      return {
        img: require('@/assets/img/home/h1.jpg')
      }
    }
  }
</script>

<style lang="scss" scoped>
.featrue img{
  width: 100%;
}
</style>