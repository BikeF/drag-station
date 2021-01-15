import { createStore } from "vuex";

export default createStore({
  state: {
    draggedEle: ''
  },
  mutations: {
    setDraggedEle (state, draggedEle) {
      state.draggedEle = draggedEle
    }
  },
  actions: {},
  modules: {}
});
