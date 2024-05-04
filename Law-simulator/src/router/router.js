import Access_control from "@/components/Access_control.vue"
import UserDashboard from "@/components/UserDashboard.vue"
import { createRouter,createWebHistory } from "vue-router"



const routes = [
    {
        path: '/',
        component: Access_control,
    },

    {
        path: '/UserDashboard',
        component: UserDashboard,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;