<template>
  <div class="icon-page">
    <div>
      <p>icon color</p>
      <DrIcon color="#FF0000" size="28" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#FF7F00" size="28" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#FFFF00" size="28" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#00FF00" size="28" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#00FFFF" size="28" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#0000FF" size="28" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#8B00FF" size="28" icon="dr-icon-likefill"></DrIcon>
    </div>
    <div>
      <p>icon size</p>
      <DrIcon color="#FF7F00" size="38" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#FFFF00" size="34" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#FF0000" size="30" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#00FF00" size="26" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#00FFFF" size="22" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#0000FF" size="18" icon="dr-icon-likefill"></DrIcon>
      <DrIcon color="#8B00FF" size="14" icon="dr-icon-likefill"></DrIcon>
    </div>
    <div class="all-icon">
      <p>所有图标</p>
      <ul>
        <li
          v-for="(icon, index) in drIcons"
          :key="index">
            <DrIcon :icon="`dr-icon-${icon}`"></DrIcon>
            <p>dr-icon-{{icon}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { drIcons } from './config/icon';

export default {
  data() {
    return {
      drIcons
    };
  }
}
</script>

<style lang="scss" scoped>
  .icon-page {
    padding-bottom: 120px;
    > div {
      margin-bottom: 20px;
      text-align: center;
      p {
        margin: 10px 0;
        text-align: center;
        font-size: 20px;
        font-weight: bold;
      }
      i {
        margin: 0 15px;
      }
      &.all-icon {
        ul {
          width: 90%;
          margin: 0 auto;
          &::after {
            content: '';
            display: block;
            clear: both;
          }
          li {
            width: 240px;
            text-align: center;
            float: left;
            margin: 20px 0;
            i {
              font-size: 30px;
              margin-bottom: 10px;
              cursor: pointer;
              display: inline-block;
              transition: all .5s linear;
              &:hover {
                transform: scale(2);
              }
            }
            p {
              font-size: 16px;
            }
          }
        }
      }
    }
  }
</style>
