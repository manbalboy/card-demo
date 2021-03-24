<template>
    <section class="section" id="root">
        <div class="container">
            <h1 class="title">Vue2 + Bulma collapse example</h1>
            <hr />

            <a class="button is-primary" @click="expandAll"> Close All </a>

            <br />
            <br />

            <div class="columns is-multiline">
                <Accordion title="Test 1" @expand="expandAll">
                    <p>Stuff 1</p>
                </Accordion>
                <Accordion title="Test 2" @expand="expandAll">
                    <p>Stuff 2</p>
                </Accordion>
                <Accordion title="Test 3" @expand="expandAll">
                    <p>Stuff 3</p>
                </Accordion>
                <Accordion title="Test 4" @expand="expandAll">
                    <p>Stuff 4</p>
                </Accordion>
            </div>
        </div>
    </section>
</template>

<script>
    import Accordion from './Accordion.vue';
    import bus from '@/utils/bus.js';
    export default {
        components: {
            Accordion,
        },
        data() {
            return {
                isOpen: false, // closed by default
            };
        },
        methods: {
            expandAll() {
                bus.$emit('closeAll');
            },
        },
    };
</script>

<style scoped>
    p {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.428571428571429;
        color: #4a4a4a;
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }
    .button.is-primary {
        text-rendering: optimizeLegibility;
        font-weight: 400;
        box-sizing: inherit;
        text-decoration: none;
        transition: none 86ms ease-out;
        cursor: pointer;
        align-items: center;
        border: 1px solid #dbdbdb;
        border-radius: 3px;
        display: inline-flex;
        font-size: 14px;
        height: 32px;
        line-height: 24px;
        position: relative;
        vertical-align: top;
        user-select: none;
        justify-content: center;
        padding-left: 10px;
        padding-right: 10px;
        text-align: center;
        border-width: 0;
        background-color: #00b89c;
        border-color: transparent;
        color: #fff;
    }
</style>
