import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home Title",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to, from) => {
  const title = (to.meta.title as string) || "Default Title";
  nextTick(() => (document.title = title));
});

export default router;
