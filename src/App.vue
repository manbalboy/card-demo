<template>
    <div id="app">
        <Layout>
            <router-view />
        </Layout>
        <button @click="cookiCreate">쿠키생성</button>
        <button @click="cookiDelete">쿠키생성</button>
        <button @click="cookiDelete">쿠키생</button>
        <button @click="getCookie">get</button>
    </div>
</template>

<script>
    // import CommonHeader from '@/components/CommonHeader.vue';
    // import Modal from '@/components/Modal.vue';
    // import TabsA from '@/components/Tab/TabsA.vue';
    export default {
        methods: {
            cookiCreate() {
                //만료일은 7일이다 전역 셋팅
                // 1s : 1초
                // 60 * 60 * 12 : 12시간
                // 60 * 60 * 25 * 30 : 1달
                // 1d : 1일
                // new Date(2019,03,13).toUTCString(): 특정 시간
                // 30 day after, expire
                // this.$cookies.config('30d')

                // set secure, only https works
                // this.$cookies.config('7d','','',true)

                // 2019-03-13 expire
                // this.$cookies.config(new Date(2019,03,13).toUTCString())

                // 30 day after, expire, '' current path , browser default
                // this.$cookies.config(60 * 60 * 24 * 30, '');
                this.$cookies.config('7d');

                // 만료일이 명시되지 않는다면 글로벌 만료일이 저장됨
                // this.$cookies.set('키', '값', '만료일');
                this.$cookies.set('TTT', 'test', 10);

                const cookie = this.$cookies.get('TTT');
                console.log(cookie);
            },

            getCookie() {
                const cookie = this.$cookies.get('TTT');
                console.log(cookie);
            },

            cookiDelete() {
                this.$cookies.remove('TTT');
                const cookie = this.$cookies.get('TTT');
                console.log(cookie);

                //특정 쿠키가 있는지 확인
                this.$cookies.isKey('test');

                //모든 쿠키 키 가져오기
                this.$cookies.keys().join('\n');

                //모든 쿠키 다 지우기
                this.$cookies.keys().forEach(cookie => this.$cookies.remove(cookie));
            },
        },
    };
</script>

<style></style>
