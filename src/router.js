import { createRouter, createWebHistory } from 'vue-router';

import ContactsView from './views/ContactsView.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/contacts', component: ContactsView },
    ],
});

export { router };