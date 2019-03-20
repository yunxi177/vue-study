import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "@/components/home";
import about from "@/components/about";
import test from "@/views/test/index";
import login from "@/views/login/index";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);


const routes = [
    {
        path:"/home",
        component: home
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/test",
        component: test
    },
    {
        path: "/login",
        component: login
    }
    
]

var router =  new VueRouter({
    routes
})
export default router;