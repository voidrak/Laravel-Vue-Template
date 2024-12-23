import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllCarList from '@/views/User/AllCarList.vue'
import ReserveCarPage from '@/views/User/ReserveCarPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/cars',
      name: 'AllCars',
      component: AllCarList,
    },
    {
      path: '/reserve',
      name: 'ReserveCar',
      component: ReserveCarPage,
    },

  ],
})

export default router
