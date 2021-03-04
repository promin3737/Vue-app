import Vue from "vue"
import VueRouter from "vue-router"
import Watch from "../views/Watch.vue"
import London from "../views/London.vue"
import NewYork from "../views/NewYork.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Watch",
    component: Watch,
  },
  {
    path: "/london_time",
    name: "London",
    component: London,
  },
  {
    path: "/newyork_time",
    name: "NewYork",
    component: NewYork,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
