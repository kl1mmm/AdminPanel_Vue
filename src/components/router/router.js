import {createRouter, createWebHistory} from "vue-router";
import LogInPage from "@/components/Pages/LogInPage";
import MainPage from "@/components/Pages/MainPage";
import ClientsEntit from "@/components/Pages/ClientsEntit";
import ClientsIndiv from "@/components/Pages/ClientsIndiv";
import ContractsList from "@/components/Pages/ContractsListPage";
import OrdersListPage from "@/components/Pages/OrdersListPage";
import PriceListPage from "@/components/Pages/PriceListPage";
import StaffList from "@/components/Pages/StaffList";

const routes = [
    {
        path: '/',
        component: LogInPage
    },
    {
        path: '/MainMenu',
        component: MainPage
    },
    {
        path: '/Clients-Entities',
        component: ClientsEntit
    },
    {
        path: '/Clients-Individual',
        component: ClientsIndiv
    },
    {
        path: '/Contracts',
        component: ContractsList
    },
    {
        path: '/Orders',
        component: OrdersListPage
    },
    {
        path: '/Price-list',
        component: PriceListPage
    },
    {
        path: '/Staff',
        component: StaffList
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;