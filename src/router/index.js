import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../views/LayOut.vue";
import Testcase from "../views/TestCase.vue";
import Testreport from "../views/TestReport.vue";
import Testtask from "../views/TestTask.vue";

const routes = [
  {
    path: "/",
    redirect: "/layout/case",
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout,
    children: [
      {
        path: "case",
        name: "case",
        component: Testcase,
      },
      {
        path: "task",
        name: "task",
        component: Testtask,
      },
      {
        path: "report",
        name: "report",
        component: Testreport,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
