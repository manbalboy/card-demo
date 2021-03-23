<script>
    export default {
        render: h =>
            h(
                'div',
                {
                    class: {
                        test: true,
                    },
                },
                [h('div', 'afdsa')],
            ),
    };
</script>

<style>
    .test {
        background-color: red;
    }
</style>
