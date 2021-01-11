<!--
 * @Author: chenjiao
 * @Date: 2020-12-18 10:47:16
 * @LastEditTime: 2021-01-05 20:51:41
 * @LastEditors: Please set LastEditors
 * @Description: 入口界面
 * @FilePath: \supermall\src\App.vue
-->
<template>
  <div id="app">
    <keep-alive exclude="Detail">
       <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>
<script>

import MainTabBar from './components/content/MainTabBar.vue'

export default {
  name: 'app',
  components: { 
    MainTabBar
  },
}
</script>
<style lang="scss" scoped >
@import "./assets/css/base.css";


</style>