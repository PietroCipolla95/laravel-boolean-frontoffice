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
                    <router-link class="nav-item nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacts</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About Us</a>
                </li>
            </ul>
        </nav>
    </header>
</template>


<style lang="scss" scoped></style>