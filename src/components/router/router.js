import {createRouter, createWebHistory} from "vue-router";
import LogInPage from "@/components/Pages/LogInPage";
import MainPage from "@/components/Pages/MainPage";
import ClientsEntit from "@/components/Pages/ClientsEntit";
import ClientsIndiv from "@/components/Pages/ClientsIndiv";
import ContractsList from "@/components/Pages/ContractsListPage";
import OrdersListPage from "@/components/Pages/OrdersListPage";
import PriceListPage from "@/components/Pages/PriceListPage";
import StaffList from "@/components/Pages/StaffList";
import ContractsInter from "@/components/Pages/interaction/ContractsInter";

const routes = [
    {
        name: 'Авторизация',
        path: '/',
        component: LogInPage
    },
    {
        name: 'CRM "Вектор" - Главное меню',
        path: '/MainMenu',
        component: MainPage
    },
    {
        name: 'CRM "Вектор" - Клиенты (Юр.лица)',
        path: '/Clients-Entities',
        component: ClientsEntit
    },
    {
        name: 'CRM "Вектор" - Клиенты (Физ.лица)',
        path: '/Clients-Individual',
        component: ClientsIndiv
    },
    {
        name: 'CRM "Вектор" - Договоры',
        path: '/Contracts',
        component: ContractsList
    },
    {
        name: 'CRM "Вектор" - Заказы',
        path: '/Orders',
        component: OrdersListPage
    },
    {
        name: 'CRM "Вектор" - Прайс-лист',
        path: '/Price-list',
        component: PriceListPage
    },
    {
        name: 'CRM "Вектор" - Сотрудники',
        path: '/Staff',
        component: StaffList
    },
    {
        name: 'CRM Вектор - окно редации "Договоры"',
        path: '/Contracts/edit',
        component: ContractsInter
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;