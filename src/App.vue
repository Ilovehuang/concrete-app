<template>
  <div id="app">
  <HomePage/>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import TreatyManager from './components/TreatyManager.vue'
export default {
  name: 'app',
  components: {
    HomePage, TreatyManager
  }
}
</script>

<style>

</style>
