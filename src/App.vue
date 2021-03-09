<template>
    <div id="app">
        <!-- <common-header></common-header> -->
        <button id="show-modal" @click="showModal = true">Show Modal</button>
        <!-- use the modal component, pass in the prop -->
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header" style="color: black">ttt</h3>
        </Modal>
    </div>
</template>

<script>
    // import CommonHeader from '@/components/CommonHeader.vue';
    import Modal from '@/components/Modal.vue';
    export default {
        data() {
            return { showModal: false };
        },
        name: 'App',
        components: {
            // CommonHeader,
            Modal,
        },
    };
</script>

<style></style>
