import { createRouter, createWebHistory } from 'vue-router';
import Container from '../pages/Container.vue';
import Login from '../pages/Login.vue';
import Person from '../views/PersonView.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/container', component: Container },
    { path: '/person/:id', component: Person },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;

