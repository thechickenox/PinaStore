import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentsList from '../views/StudentsList.vue'
import StudentDetail from '../views/StudentDetail.vue'
import AddStudent from '../views/AddStudent.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    
    {
      path: '/StudentsList',
      name: 'StudentsList',
      component: StudentsList
    }
    ,
    
    {
      path: '/AddStudent',
      name: 'AddStudent',
      component: AddStudent
    },
    {
      path: '/StudentDetail/:id',
      name: 'StudentDetail',
      component: StudentDetail,
      props: true 
    }
  ]
})

export default router
