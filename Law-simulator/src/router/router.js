import Access_control from "@/components/Access_control.vue"
import UserDashboard from "@/components/UserDashboard.vue"
import { createRouter,createWebHistory } from "vue-router"
import About from "@/components/About.vue"
import Cases from "../components/Cases.vue"
import Profile from "../components/Profile.vue"

const routes = [
    {
        path: '/',
        component: Access_control,
    },

    {
        path: '/UserDashboard',
        component: UserDashboard,
    },

    {
        path: '/About',
        component: About,
    },

    {
        path:'/Cases',
        component: Cases,
    },

    {
        path:'/Profile',
        component: Profile,

    }

    
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router;