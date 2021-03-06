<template>
    <div style="padding: 30px">
        <VueSlickCarousel style="width: 200px" v-bind="settings">
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </VueSlickCarousel>
    </div>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel';
    import 'vue-slick-carousel/dist/vue-slick-carousel.css';
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
    export default {
        data() {
            return {
                settings: {
                    dots: true,
                    dotsClass: 'slick-dots custom-dot-class',
                    edgeFriction: 0.35,
                    infinite: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            };
        },
        components: { VueSlickCarousel },
    };
</script>

<style>
    .slick-prev:before {
        content: '<';
        color: red;
        font-size: 30px;
    }

    .slick-next:before {
        content: '>';
        color: red;
        font-size: 30px;
    }
</style>
