import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Member from '../views/Membership.vue'
import SignUp from '@/components/Membership/Sign-Up.vue'
import Forgot from '../components/Membership/Forgot_Pass.vue' 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login', // Assuming this is for login, renaming it to 'login'
    name: 'Member',
    component: Member
  },
  {
    path: '/sign-up', // corrected the name from 'Signup' to 'SignUp'
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forgot', // corrected the name from 'Signup' to 'SignUp'
    name: 'Forgot',
    component: Forgot
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
