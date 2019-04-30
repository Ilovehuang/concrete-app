<template>
  <div id="app">
    <router-view></router-view>
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
