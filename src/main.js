import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import HomeView from "@/views/HomeView";
import SecondPage from "@/views/SecondPage";
const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/customer',
      component: SecondPage,

    }

  ],
})
createApp(App).use(store).use(router).mount('#app')
