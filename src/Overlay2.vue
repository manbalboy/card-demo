<template>
    <div>
        <slot ref="test"></slot>
    </div>
</template>

<script>
    export default {
        created() {
            console.log('this.$refs', this);
            console.log('this.$this.$children;', this.$children);
        },
    };
</script>

<style></style>
