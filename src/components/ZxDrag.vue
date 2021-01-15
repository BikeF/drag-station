<template>
  <div ref="el" draggable="true" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "ZxDrag",
  setup() {
    const store = useStore();
    const el = ref(null);
    onMounted(() => {
      el.value.addEventListener(
        "dragstart",
        function(event: any) {
          // 保存被拖拉节点
          store.commit("setDraggedEle", event.target);
          // 被拖拉节点的背景色变透明
          event.target.style.opacity = 0.5;
        },
        false
      );
      el.value.addEventListener(
        "dragend",
        function(event: any) {
          // 被拖拉节点的背景色恢复正常
          event.target.style.opacity = '';
          store.commit("setDraggedEle", '');
        },
        false
      );
      el.value.addEventListener(
        "dragover",
        function(event: any) {
          // 防止拖拉效果被重置，允许被拖拉的节点放入目标节点
          event.preventDefault();
        },
        false
      );

      const isDraggbled = true;
      el.value.addEventListener(
        "dragenter",
        function(event: any) {
          // 目标节点的背景色变紫色
          // 由于该事件会冒泡，所以要过滤节点
          if (isDraggbled) {
            event.target.style.background = "purple";
          }
        },
        false
      );
      el.value.addEventListener(
        "dragleave",
        function(event: any) {
          // 目标节点的背景色恢复原样
          if (isDraggbled) {
            event.target.style.background = "";
          }
        },
        false
      );
      el.value.addEventListener(
        "drop",
        function(event: any) {
          // 防止事件默认行为（比如某些元素节点上可以打开链接），
          event.preventDefault();
          if (isDraggbled) {
            // 恢复目标节点背景色
            event.target.style.background = "";
            // 将被拖拉节点插入目标节点

            console.log(event.target);
            // dragged.parentNode.removeChild(dragged);
            event.target.appendChild(store.state.draggedEle);
          }
        },
        false
      );
    });
    return {
      el
    };
  }
});
</script>

<style scoped></style>
