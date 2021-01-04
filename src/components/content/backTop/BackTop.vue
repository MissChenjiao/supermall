<template>
  <div class="back-top">
    <img :src="imgurl" alt="">
  </div>
</template>

<script>
  export default {
    name:"back-top",
    data(){
      return{
        imgurl:require('@/assets/img/common/back.png')
      }
    }
  }
</script>

<style lang="scss" scoped>
.back-top img{
  position: fixed;
  width: 44px;
  height:44px;
  right:8px;
  bottom: 50px;

}

</style>