<!--
 * @Author: chenjiao
 * @Date: 2021-01-05 16:34:41
 * @LastEditTime: 2021-01-14 15:12:15
 * @LastEditors: Please set LastEditors
 * @Description: 详情页的顶部导航封装
 * @FilePath: \supermall\src\views\detail\childComps\DetailNavBar.vue
-->
<template>
  <div class="DetailNavBar">
      <nav-bar>
          <div slot="left" class="backImg" @click="back">
             <img src="../../../assets/img/detail/back.png" alt="">
          </div>
          <div slot="center" class="titles">
          <div class="titles-item" 
             :key="item.index"
               v-for="(item ,index) in titles"
               :class="{active:currentIndex==index}"
                 @click="itemClick(index)">{{ item }}</div>
           </div>
          </nav-bar> 
    

    
  </div>
</template>

<script>
  import NavBar from "../../../components/common/tabbar/NavBar"
  
  export default {
    name:"DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      },
      back(){
        this.$router.back()
      }
    },
  }
</script>

<style lang="scss" scoped>
.DetailNavBar{
  background-color:#fff;
}
.active{
  color:deeppink;
}
.titles{
  display: flex;
}
.titles-item{
  flex: 1;
}
.backImg img{
  margin-top:10px ;
  width: 26px;
  height:26px;
}
</style>
