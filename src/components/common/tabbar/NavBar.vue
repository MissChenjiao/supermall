<!--
 * @Author: your name
 * @Date: 2020-12-18 16:56:04
 * @LastEditTime: 2021-01-14 15:00:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\common\tabbar\NavBar.vue
-->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.nav-bar{
  display: flex;
  height:44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px rgb(100, 100, 100,.1);
}
.left,.right{
  width:60px;
}
.center{
  flex: 1;
}
</style>