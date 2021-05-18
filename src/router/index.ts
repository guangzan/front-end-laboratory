import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const Tools = () => import('../views/Tools.vue')
const Error404 = () => import('../views/Error404.vue')
const About = () => import('../views/About.vue')

const ColorPicker = () => import('../views/tools/ColorPicker.vue')
const Formater = () => import('../views/tools/Formater.vue')
const Test = () => import('../views/tools/Test.vue')
const ConvertBase64Image = () => import('../views/tools/ConvertBase64Image.vue')

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: Home },
  { path: '/:catchAll(.*)*', component: Error404 },
  { path: '/tools', name: 'Tools', component: Tools },
  { path: '/colorPicker', name: 'ColorPicker', component: ColorPicker },
  { path: '/formater', name: 'Formater', component: Formater },
  { path: '/about', name: 'About', component: About },
  {
    path: '/convertBase64Image',
    name: 'ConvertBase64Image',
    component: ConvertBase64Image,
  },
  { path: '/test', name: 'Test', component: Test },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
