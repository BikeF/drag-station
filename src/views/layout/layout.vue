<template>
  <div>
    <header-nav></header-nav>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import HeaderNav from '@/views/layout/headerNav.vue'
export default defineComponent({
  name: "helloWorld",
  components: {
    HeaderNav
  },
  setup() {
    return {};
  }
})
</script>

<style lang="scss">
</style>
