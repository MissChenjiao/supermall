<template>
  <div class="goods-list-item">
    <a :href="goodsItem.link"><img :src="goodsItem.show.img"></a>
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
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
    }
  }
</script>

<style lang="scss" scoped>

</style>