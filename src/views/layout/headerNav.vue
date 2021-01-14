<template>
  <div class="header-nav">
    <!-- <img class="header-logo" src="./../../assets/img/logo.png" alt=""> -->
    <div class="header-menu">
      <el-menu :default-active="activeIndex" :router="true" class="header-el-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="dragStation">拖拽建站</el-menu-item>
        <el-submenu index="2">
          <template #title>模块管理</template>
          <el-menu-item index="2-1">模板管理</el-menu-item>
          <el-menu-item index="2-2">区块管理</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'headerNav',
  setup () {
    const activeIndex = ref('dragStation');
    function handleSelect(key, keyPath) {
      console.log(key);
    }
    return {
      activeIndex,
      handleSelect
    }
  }
})
</script>

<style lang="scss" scoped>
.header-nav {
  display: flex;
  align-items: center;
  padding: 0 2%;
  background-clip: #fff;
  box-shadow: 0 0 8px 1px rgba(0,0,0,.3);
  .header-logo {
    height: 30px;
  }
  .header-menu {
    margin-left: 40px;
    .header-el-menu {
      display: inline-block;
    }
  }
}
</style>