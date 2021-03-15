<template>
    <div class="hello">
        {{ $t('bb') }}
        <button @click="$i18n.locale = 'ko'">한국어</button>
        <button @click="$i18n.locale = 'en'">English</button>
    </div>
</template>

<script>
    export default {
        computed: {
            // bb: function () {
            // return this.$i18n.t('message');
            // },
        },
        mounted() {
            // console.log(this.$t('bb'));
            // console.log(this.$i18n);
        },
    };
</script>

<style></style>
