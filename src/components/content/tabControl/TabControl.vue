<!--
 * @Author: chenjiao
 * @Date: 2020-12-23 15:12:08
 * @LastEditTime: 2020-12-30 16:14:16
 * @LastEditors: Please set LastEditors
 * @Description: 首页的商品类型按钮
 * @FilePath: \supermall\src\components\content\tabControl\TabControl.vue
-->

<template>
  <div class="tab-contorl">
    <div  class="tab-contorl-item"
      :class="{active:index==currmentIndex}"
      @click="btnClick(index)"
      v-for="(item,index) in titles"
      :key="item"
    >
      <span>{{  item  }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"tab-contorl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
         currmentIndex:0
      }
     
    },
    methods:{
      btnClick(index){
        this.currmentIndex = index;
        //监听点击事件将index传到home组件
        this.$emit("tabClick",index)
      }
    }
  }
</script>

<style lang="scss" scoped>
.tab-contorl{
  display: flex;
  text-align: center;
  font-size: 15px;
  height:44px;
  line-height:44px;
  
}
.tab-contorl-item{
  flex: 1;
}
.active{
  color: deeppink;
}
.active span{
  padding: 5px;
  border-bottom: 3px solid deeppink;
}
</style>