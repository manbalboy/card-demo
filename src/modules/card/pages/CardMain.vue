<template>
    <div>
        <button @click="sStartTest">Test</button>
    </div>
</template>

<script>
    import CONST from '@/utils/const.js';
    export default {
        methods: {
            sStartTest() {
                this.$scard.start();
                console.log(this.$scard.const.USER_PW);
                console.log([CONST.USER_PW]);
            },
        },
    };
</script>

<style></style>
