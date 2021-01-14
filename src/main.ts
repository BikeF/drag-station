import { createApp } from "vue";
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App)
  .use(ElementPlus)
  .use(store)
  .use(router);
let dragged:any = {}
app.directive('draggble', {
  mounted(el, binding){
    el.setAttribute("draggable", "true");
    el.addEventListener('dragstart', function (event:any) {
      // 保存被拖拉节点
      dragged = event.target;
      // 被拖拉节点的背景色变透明
      event.target.style.opacity = 0.5;
    }, false);
  }
})
app.directive('draggble', {
  mounted(el, binding){
    el.setAttribute("draggable", "true");
    el.addEventListener('dragstart', function (event:any) {
      // 保存被拖拉节点
      dragged = event.target;
      // 被拖拉节点的背景色变透明
      event.target.style.opacity = 0.5;
    }, false);
    el.addEventListener('dragend', function (event:any) {
      // 被拖拉节点的背景色恢复正常
      event.target.style.opacity = '';
    }, false);
    el.addEventListener('dragover', function (event:any) {
      // 防止拖拉效果被重置，允许被拖拉的节点放入目标节点
      event.preventDefault();
    }, false);
  }
})
app.directive('dragged', {
  mounted(el, binding){
    el.setAttribute("draggable", "true");
    const isDraggbled = true;
    el.addEventListener('dragenter', function (event:any) {
      // 目标节点的背景色变紫色
      // 由于该事件会冒泡，所以要过滤节点
      if (isDraggbled) {
        event.target.style.background = 'purple';
      }
    }, false);
    el.addEventListener('dragleave', function(event:any) {
      // 目标节点的背景色恢复原样
      if (isDraggbled) {
        event.target.style.background = '';
      }
    }, false);
    el.addEventListener('dragover', function (event:any) {
      // 防止拖拉效果被重置，允许被拖拉的节点放入目标节点
      event.preventDefault();
    }, false);
    el.addEventListener('drop', function(event:any) {
      // 防止事件默认行为（比如某些元素节点上可以打开链接），
      event.preventDefault();
      if (isDraggbled) {
        // 恢复目标节点背景色
        event.target.style.background = '';
        // 将被拖拉节点插入目标节点

        console.log(dragged);
        console.log(event.target);
        // dragged.parentNode.removeChild(dragged);
        event.target.appendChild( dragged );
      }
    }, false);
  }
})
app.mount("#app");
