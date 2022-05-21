import {createRouter, createWebHistory} from "vue-router";
import LogInPage from "@/components/Pages/LogInPage";
import MainPage from "@/components/Pages/MainPage";

const routes = [
    {
        path: '/',
        component: LogInPage
    },
    {
        path: '/MainMenu',
        component: MainPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;