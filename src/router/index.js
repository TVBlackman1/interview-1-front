import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from "@/views/ProductList";
import AdminPanel from "@/views/AdminPanel";
import Upload from "@/views/Upload";

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: {name: "ProductList"},
    component: Home
  },
  {
    path: '/admin',
    name: 'AdminPanel',
    component: AdminPanel
  },
  {
    path: '/product-list',
    name: 'ProductList',
    component: ProductList
  },
  {
    // тут я тестировал передачу изображений
    path: '/upload',
    name: 'Upload',
    component: Upload
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
