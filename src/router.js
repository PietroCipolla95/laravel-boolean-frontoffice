import { createRouter, createWebHistory } from 'vue-router';


import ContactsView from './views/ContactsView.vue';
import HomeView from './views/HomeView.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [

        { path: '/contacts', 
          name: 'contatcs',
          component: ContactsView },

        {
            path: '/',
            name: 'home',
            component: HomeView
        },
    ],
});

export { router };