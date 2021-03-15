<template>
    <div id="app">
        <router-link to="/cookies"> VueCookieTest </router-link> |
        <router-link to="/dropzone"> dropzone </router-link> |
        <router-link to="/notification">notification</router-link> |
        <router-link to="/i18n">i18n</router-link> |
        <Layout>
            <router-view />
        </Layout>
    </div>
</template>

<script>
    export default {};
</script>

<style></style>
