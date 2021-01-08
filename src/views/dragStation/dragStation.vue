<template>
  <div>
    <el-button @click="loadData">查询</el-button>
    <div style="float:left;">
      <draggable 
        v-model="dataList" 
        group="people"
        tag="transition-group" 
        @start="drag=true" 
        @end="dragEnd" 
        @choose="chooseEle"
        @filter="chooseEle"
        item-key="id">
        <template #item="{element}">
          <div>{{element.contentTitle}}</div>
        </template>
        <template #footer>
          <span style="margin-top:100px;">

          
            <span class="aaaa">123123123</span>
            <span class="bbbb">22222222222222222</span>
            <span class="cccc">333333333333333</span>
          </span>
        </template>
      </draggable>
    </div>
    <div style="float:right;">
      <span class="aaaa">123123123</span>
      <span class="bbbb">22222222222222222</span>
      <span class="cccc">333333333333333</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { ajaxGet } from "@/utils/ajax.js";
import draggable from "vuedraggable";
export default defineComponent({
  components: {
    draggable
  },
  setup() {
    const dataList = ref(['111111', '2222222', '3333333', '4444444444444444']);
    const dataList2 = ref(['111111', '2222222', '3333333', '4444444444444444']);
    function chooseEle(...a) {
      console.log(a);
    }
    function dragEnd(...a) {
      console.log(a);
    }
    const drag = ref(true)
    function loadData() {
      ajaxGet("http://tzcms.sinoing.net/front/list/latest", {
        pageNum: 1,
        pageSize: 10,
        siteId: "788425706785869824",
        channelId: "788429013654970368"
      }).then(res => {
        console.log(res.data);
        dataList.value = res.data.info.list;
      });
    }
    return { dataList, drag, loadData, dragEnd, chooseEle };
  }
});
</script>

<style lang="scss" scoped></style>
