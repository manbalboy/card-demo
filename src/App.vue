<template>
    <div id="app">
        <AutoLogout></AutoLogout>
        <router-view />
    </div>
</template>

<script>
    import AutoLogout from './AutoLogout.vue';
    export default {
        components: {
            AutoLogout,
        },
    };
</script>

<style></style>
