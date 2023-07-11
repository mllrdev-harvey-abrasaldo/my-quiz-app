import type  {RouteRecordRaw}  from 'vue-router'
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: RouteName.HOME,
    component: () => import("../views/home-page.vue"),
  },
  {
    path: "/quiz",
    name: RouteName.QUIZ,
    component: () => import("../views/quiz-page.vue"),
  },
  {
    path: "/result",
    name: RouteName.RESULT,
    component: () => import("@/views/result-page.vue"),
  },
];

export default routes;