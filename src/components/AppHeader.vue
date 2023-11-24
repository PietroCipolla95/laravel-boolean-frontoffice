<script>
export default {
    name: 'AppHeader',
}
</script>
<template>
    <header>
        <nav class="navbar navbar-expand navbar-dark bg-dark py-3">
            <ul class="nav navbar-nav ps-5">
                <li class="nav-item">
                    <router-link class="nav-link blue-button" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link blue-button mx-3" to="/contacts">Contacts</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link blue-button" to="/about">About Us</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>


<style lang="scss" scoped></style>