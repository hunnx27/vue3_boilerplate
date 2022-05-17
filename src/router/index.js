import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/home/HomeView.vue"
import AboutView from "../views/about/AboutView.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomeView,
    },
    {
        path: "/about",
        name: "About",
        component: AboutView,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;