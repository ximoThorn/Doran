<template>
  <div class="catalogue">
    <div
      id="nav"
      v-for="item in catalogList"
      :key="item.name">
      <router-link :to="item.link">{{item.name}} ({{item.dsc}})</router-link>
    </div>
  </div>
</template>

<script>
import { catalogList } from './config/catalog';
export default {
  data() {
    return {
      catalogList
    };
  }
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
