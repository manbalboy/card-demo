<template>
    <div id="app">
        <vue-dropzone id="upload" :options="config"></vue-dropzone>
    </div>
</template>

<script>
    import vueDropzone from 'vue2-dropzone';

    export default {
        data: () => ({
            config: {
                url: 'https://appdividend.com',
            },
        }),
        components: {
            vueDropzone,
        },
    };
</script>
