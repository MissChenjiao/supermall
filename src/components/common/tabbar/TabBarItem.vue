<template>
  <div class="tabbar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon" ></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {
      // isActive: true
    }
  },
  props: {
      path:String,
      activeColor:{
        type: String,
        default:"red"
      }
    },
  computed: {
    isActive() {
      // 如果要检索的字符串值没有出现，则该方法返回 -1,这里找到返回0 ，0不等于-1所以返回true
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{} 
    }
  },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
}
</script>

<style>
  .tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    vertical-align: middle;
    font-size: 14px;
}
.tabbar-item img{
  width: 24px;
  height: 24px;
  margin-top:3px;
}

</style>