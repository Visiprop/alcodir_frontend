import AppMain from "@/app/pages/MainPage.html";
import LoginPage from "@/app/pages/Login.html";
import Linkedin from "@/app/pages/Linkedin.html";
import DashboardPage from "@/app/pages/DashboardPage.html"
import VueRouter from "vue-router";

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
                {
                    path: "linkedin", 
                    name: "likendin.page", 
                    component: Linkedin
                }
              ]
            },
            {
                path: "login",
                name: 'login.page',
                component: LoginPage
            }
          ]
        }
    ]
})

// routes.beforeEach((to, from, next) => {
//     if (to.name != 'login.page' && !localStorage.getItem('__CSRF')) next({ name: 'login.page' })
//     else next()
// })

export default routes