<template>
  <div class="RecommendView">
    <div class="recommend-item"
    :key="item.sort"
    v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image">
        <div class="title">{{ item.title }}</div>
      </a>  
    </div>
  </div>
</template>

<script>
  export default {
    name:"RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
    
  }
</script>

<style lang="scss" scoped>
.RecommendView{
  display: flex;
  text-align: center;
  font-size:14px;
  border-bottom: 10px solid #eeeeee;
  padding: 10px 0 15px;

}
.recommend-item{
  flex: 1;

}
.recommend-item img{
  height: 80px;
  width: 80px;
  margin-bottom: 10px;
}
.recommend-item .title{
  color:#333
}
</style>