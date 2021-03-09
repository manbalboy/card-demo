<template>
    <div id="app">
        <!-- <common-header></common-header> -->
        <button id="show-modal" @click="showModal = true">Show Modal</button>
        <!-- use the modal component, pass in the prop -->
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header" style="color: black">ttt</h3>
        </Modal>
        <TabsA :tapList="listA"></TabsA>
    </div>
</template>

<script>
    // import CommonHeader from '@/components/CommonHeader.vue';
    import Modal from '@/components/Modal.vue';
    import TabsA from '@/components/Tab/TabsA.vue';
    export default {
        data() {
            return {
                showModal: false,

                listA: [
                    { id: 1, label: 'Tab1', content: '콘텐츠1' },
                    { id: 2, label: 'Tab2', content: '콘텐츠2' },
                    { id: 3, label: 'Tab3', content: '콘텐츠3' },
                ],
            };
        },
        name: 'App',
        components: {
            TabsA,
            // CommonHeader,
            Modal,
        },
    };
</script>

<style></style>
