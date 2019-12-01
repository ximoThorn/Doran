<template>
  <div class="catalogue">
    <div id="nav">
      <router-link to="/icon">Icon</router-link>
    </div>
    <div id="nav">
      <router-link to="/button">Button</router-link>
    </div>
    <div id="nav">
      <router-link to="/collapse">Collapse</router-link>
    </div>
    <div id="nav">
      <router-link to="/radio">Radio</router-link>
    </div>
    <div id="nav">
      <router-link to="/checkbox">Checkbox</router-link>
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
    text-align: center;
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
