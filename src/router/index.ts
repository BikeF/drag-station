import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import layout from "@/views/layout/layout.vue";
import dragStation from "@/views/dragStation/dragStation.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "layout",
    component: layout,
    children: [
      {
        path: '/dragStation',
        name: "dragStation",
        component: dragStation
      }
    ]
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
