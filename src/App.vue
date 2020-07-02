<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
    console.log('sd')
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 20px;
    padding-bottom: 20px;
  }
</style>
