<template>
  <div class="goods-list">
    <goods-list-item   v-for="item in goods" :goodsItem="item"  :key="item.id"/>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
  export default {
  components: { 
    GoodsListItem 
    },
    name:"goods-list",
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2px;

}
</style>