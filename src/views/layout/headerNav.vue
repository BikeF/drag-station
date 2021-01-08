<template>
  <div class="header-nav">
    <img class="header-logo" src="./../../assets/img/logo.png" alt="">
    <div class="header-menu">
      <el-menu :default-active="activeIndex" class="header-el-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template #title>我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template #title>选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: 'headerNav',
  setup () {
    const activeIndex = ref('1');
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