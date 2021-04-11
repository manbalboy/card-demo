<template>
    <div id="app">
        {{ replaceText }}

        <Modal>
            <h3 slot="header">32</h3>
        </Modal>
    </div>
</template>

<script>
    import Modal from 'vue2-modal-compnent-manbalboy';
    import 'vue2-modal-compnent-manbalboy/dist/vue2Modal.css';

    export default {
        components: {
            Modal,
        },
        created() {
            this.replaceText = this.replaceText.replaceAll('a', 'z');
        },
        data() {
            return {
                replaceText: 'aabbbbaaaaa',
                opened: false,
                visible: false,
                swiperOption: {
                    slidesPerView: 1,
                    // spaceBetween: 30,
                    loop: true,
                    pagination: {
                        el: '.page_indi',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
            };
        },
    };
</script>

<style>
    .indi_new_wrap.no_back > a {
        font-size: 14px;
        line-height: 0;
        text-align: center;
        font-family: 'Roboto';
        letter-spacing: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        text-decoration: none;
        margin: 0 3px;
        vertical-align: middle;
        display: inline-block;
        background: url('//static11.samsungcard.com/wcms/personal/images/main_u/ico_new_player2_1110_2.png')
            no-repeat 0 0;
        background-size: 8px auto;
        position: absolute;
        right: -3px;
        background-position: 0 0;
        width: 17px;
        height: 18px;
        top: 5px;
    }
    .ui_indi_page_dash {
        font-size: 14px;
        line-height: 0;
        text-align: center;
        color: #2b2e38;
        font-family: 'Roboto';
        letter-spacing: 0;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
    }
    .indi_wrap.ui_mainslider_mobile_indi {
        color: #303030;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        position: absolute;
        font-size: 0;
        line-height: 0;
        top: 173px;
        left: 10px;
        z-index: 300;
    }

    .indi_new_wrap.no_back {
        margin: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        position: relative;
        padding: 10px 20px 12px 6px;
        width: 38px;
        font-size: 14px;
        line-height: 0;
        text-align: center;
        border-radius: 22px;
        vertical-align: middle;
        color: #2b2e38;
        background: none;
        font-family: 'Roboto';
        opacity: 1;
        letter-spacing: 0;
    }
    .ui_indi_page_no {
        font-size: 14px;
        line-height: 0;
        text-align: center;
        font-family: 'Roboto';
        letter-spacing: 0;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        font-weight: bold;
        color: #2b2e38;
    }
    .ui_indi_page_total {
        font-size: 14px;
        line-height: 0;
        text-align: center;
        font-family: 'Roboto';
        letter-spacing: 0;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        color: #2b2e38;
    }

    .link_event {
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        text-decoration: none;
        position: absolute;
        top: 172px;
        left: 92px;
        z-index: 350;
        width: auto;
        height: 22px;
        font-size: 15px;
        line-height: 22px;
        text-align: center;
        color: #0b0d0f;
        padding-right: 10px;
        background: url(//static11.samsungcard.com/wcms/personal/images/oneapp/common/bg_ico_evt_arr.png)
            no-repeat right 50%;
        background-size: 6px auto;
    }
    .swiper-pagination-bullet {
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        font-size: 0;
        line-height: 0;
        text-align: center;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        text-decoration: none;
        background: url('//static11.samsungcard.com/wcms/personal/images/main_u/bg_ico_link_m.png')
            no-repeat -12px 0;
        background-size: 300px 300px;
        vertical-align: middle;
        bottom: 2px;
        width: 8px;
        height: 8px;
        background-color: #e1e4e8;
        opacity: 1;
        display: inline-block;
        border-radius: 8px;
        background-image: none;
        margin: 0 5px;
        transition: all 0.3s;
    }
    .swiper-pagination-bullet.swiper-pagination-bullet-active {
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        font-size: 0;
        line-height: 0;
        text-align: center;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        text-decoration: none;
        background: url('//static11.samsungcard.com/wcms/personal/images/main_u/bg_ico_link_m.png')
            no-repeat -12px 0;
        background-size: 300px 300px;
        vertical-align: middle;
        background-position: 0 0;
        bottom: 2px;
        height: 8px;
        opacity: 1;
        display: inline-block;
        border-radius: 8px;
        background-image: none;
        margin: 0 5px;
        transition: all 0.3s;
        background-color: #9b9fa8;
        width: 25px;
    }
    .page_indi {
        color: #303030;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        font-size: 0;
        line-height: 0;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        bottom: -13px;
        left: 0;
        width: 100%;
        position: absolute;
        text-align: center;
        z-index: 999;
    }
    .visual_item_wrap.new_visual {
        color: #303030;
        font-size: 16px;
        line-height: 23px;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        list-style: none;
        -webkit-padding-start: 0;
        position: relative;
        height: 219px;
        width: 100%;
    }

    .visual_item.ui_first.current.left > a {
        font-size: 16px;
        line-height: 23px;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        text-decoration: none;
        display: block;
        height: 100%;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: translateZ(0);
        -webkit-perspective: 1000px;
        -webkit-backface-visibility: hidden;
        padding-top: 17px;
    }

    .visual_item.ui_first.current.left > a > .visual_bg {
        font-size: 16px;
        line-height: 23px;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
    }

    .visual_item.ui_first.current.left > a > .item.white {
        font-size: 16px;
        line-height: 23px;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        width: 100%;
        z-index: 100;
        position: absolute;
        top: 0;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: translateZ(0);
        -webkit-perspective: 1000px;
        -webkit-backface-visibility: hidden;
    }

    .visual_item.ui_first.current.left > a > .item.white > .info_wrap.info_wrap_img {
        font-size: 16px;
        line-height: 23px;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        margin: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        text-align: center;
        -webkit-transform-style: preserve-3d;
        -webkit-transform: translateZ(0);
        -webkit-perspective: 1000px;
        -webkit-backface-visibility: hidden;
        padding: 0 !important;
        position: absolute;
        left: 20px;
        top: 0;
    }

    .visual_item.ui_first.current.left > a > .item.white > .info_wrap.info_wrap_img > p {
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        text-align: center;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        position: absolute;
        top: 0;
        right: 20px;
        font-size: 23px;
        line-height: 25px;
        left: 0 !important;
        margin-left: 0 !important;
        color: #fff;
        opacity: 1;
        -webkit-transition-delay: 0.3s;
        -webkit-transition-duration: 0.5s;
        -webkit-transition-property: transform;
        -webkit-transform: translateX(0px);
    }

    .visual_item.ui_first.current.left > a > .item.white > .info_wrap.info_wrap_img > p > img {
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        text-align: center;
        font-size: 23px;
        line-height: 25px;
        color: #fff;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        border: 0 none;
        height: 219px;
        width: auto;
    }

    .visual_item.ui_first.current.left > a > .visual_obj {
        font-size: 16px;
        line-height: 23px;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
    }

    .visual_item.ui_first.current.left > a > .visual_obj > p {
        font-size: 16px;
        line-height: 23px;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        position: absolute;
        top: 0;
        right: 20px;
        opacity: 1;
        -webkit-transition-delay: 0.4s;
        -webkit-transition-duration: 0.8s;
        -webkit-transition-property: transform;
        -webkit-transform: translateX(0px);
    }

    .visual_item.ui_first.current.left > a > .visual_obj > p > img {
        font-size: 16px;
        line-height: 23px;
        font-family: 'Noto Sans CJK KR', sans-serif !important;
        letter-spacing: -0.4px;
        list-style: none;
        margin: 0;
        padding: 0;
        -webkit-text-size-adjust: none;
        outline: none;
        border: 0 none;
        height: 219px;
        width: auto;
    }
</style>
