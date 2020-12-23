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