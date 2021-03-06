import AppMain from "@/app/pages/MainPage.html";
import LoginPage from "@/app/pages/Login.html";
import Linkedin from "@/app/pages/Linkedin.html";
import DashboardPage from "@/app/pages/DashboardPage.html"
import Startup from "@/app/pages/Startup.html"
import VueRouter from "vue-router";

import SalesReport from "./sales.route" 

const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
          path: "/",
          component: {
            template: "<router-view></router-view>"
          },
          children: [
            {
              path: "",
              component: AppMain,
              children: [
                { 
                    path: "/", 
                    name: "dashboard.page", 
                    component: DashboardPage
                },
                ...SalesReport.report
              ]
            },
            {
                path: "login",
                name: 'login.page',
                component: LoginPage
            },
            {
              path: 'setup',
              name: 'start.page',
              component: Startup
            }
          ]
        }
    ]
})

routes.beforeEach((to, from, next) => {
    if (to.name != 'login.page' && !sessionStorage.getItem('__CSRF')) next({ name: 'login.page' })
    else next()
})

export default routes