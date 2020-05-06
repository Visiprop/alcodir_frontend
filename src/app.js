import Vue from "vue";
import VueRouter from "vue-router";
import BootstrapVue from 'bootstrap-vue'
import router from './routes/index'
import AccountApi from '@/app/services/Account.js'

Vue.use(BootstrapVue)
Vue.use(VueRouter);

import "bootstrap-vue/dist/bootstrap-vue.css";

const ROOT_PATH = "/";
import axios from 'axios'
import { Service } from "axios-middleware";
const service = new Service(axios);

service.register({
    async onRequest(config) {
      if (localStorage.getItem("__CSRF")) {
        let token = JSON.parse(localStorage.getItem("__CSRF"))
        config.headers.Authorization = `Bearer ${token.access_token}`;
      }
      return config;
    },
    onSync(promise) {
      return promise;
    },
    onResponse(response) {
      return response;
    }
});


 
let page = {
  title: "Welcome",
  subtitle: "home"
};


let store = {
  state: {
    username: "Alexander Pierce",
    flag: 0,
    avatar: false
  }
};

var app = new Vue({
    el: "#app",
    router: router,
    mounted() {
      
    },
    data() {
      return {
        state: store.state,
        image_url: process.env.AVATAR_URL,
        base_url: path => ROOT_PATH + "/" + (path || ""),
        asset: path => ROOT_PATH + "assets/" + path,
        page: page,
        AccountApi: AccountApi
      };
    },
    
  });
