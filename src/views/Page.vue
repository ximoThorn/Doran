<template>
  <div class="catalogue">
    <div id="nav">
      <router-link to="/icon">Icon (图标)</router-link>
    </div>
    <div id="nav">
      <router-link to="/button">Button (按钮)</router-link>
    </div>
    <div id="nav">
      <router-link to="/collapse">Collapse (折叠面板)</router-link>
    </div>
    <div id="nav">
      <router-link to="/radio">Radio (单选)</router-link>
    </div>
    <div id="nav">
      <router-link to="/checkbox">Checkbox (多选)</router-link>
    </div>
    <div id="nav">
      <router-link to="/switch">Switch (开关)</router-link>
    </div>
    <div id="nav">
      <router-link to="/badge">Badge (微标)</router-link>
    </div>
    <div id="nav">
      <router-link to="/avatar">Avatar (头像)</router-link>
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
