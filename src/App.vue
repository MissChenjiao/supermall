<template>
  <div id="app">
    <router-view></router-view>
    <!-- <home/> -->
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