<template>
    <div id="app">
        index.vue.
        <common-header></common-header>
        <test></test>
    </div>
</template>

<script>
    import CommonHeader from '@/components/CommonHeader.vue';
    import test from './test.vue';
    export default {
        name: 'app',
        components: {
            CommonHeader,
            test,
        },
    };
</script>

<style></style>
