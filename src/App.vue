<script>

import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
    name: 'App',
    data() {
        return {

        }
    },

    components: {
        AppHeader,
        AppFooter,
    },

}

</script>

<template>
    <AppHeader />

    <main>
        <router-view></router-view>
    </main>

    <AppFooter />
</template>

<style scoped></style>
