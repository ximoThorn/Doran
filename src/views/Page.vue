<template>
  <div class="catalogue">
    <div id="nav">
      <router-link to="/button">Button</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.catalogue {
  #nav {
    padding: 15px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
}
</style>
