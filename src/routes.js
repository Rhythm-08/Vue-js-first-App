import {createWebHistory, createRouter} from 'vue-router'

import Home from './components/home.vue'

const routes=[
    {
        name:'home',
        path:'/',
        component:Home
    }
];

const router= createRouter({
    history:createWebHistory(),
    routes
});
export default router;