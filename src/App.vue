<template>
  <div>
    <p>点名系统</p>
    <button v-for="(item, index) in arr" :key="index" @click="clickFun(index)">
      {{index}} : {{item}}
    </button>
    <el-button type="primary">nihao</el-button>
    <br>
    <span>请【{{selectPeople}}】同学来回答问题</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from "vue";
export default defineComponent({
  name: "helloWorld",
  setup(){
    const arr = ref(['张三', '李四', '王五']);
    const selectPeople = ref('');
    const clickFun = (index: number) => {
      selectPeople.value = arr.value[index];
    };
    return { arr, selectPeople, clickFun };
  }
})
</script>

<style scoped>

</style>
