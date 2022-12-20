import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";


const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "About",
      component: ()=>import("@/views/About.vue"),
    },
    {
      path: "/Movie",
      name: "Movie",
      component: ()=>import("@/views/Movie.vue"),
    },
    {
      path: "/company",
      name: "Company",
      component: ()=>import("@/views/Company.vue"),
      children: [{
        path: "/company/recruit",
        name: "Recruit",
        component: ()=>import("@/views/Recruit.vue"),
      }]
    },
  ],
});

export default router;
