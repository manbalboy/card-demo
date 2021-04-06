<template>
    <div id="app">
        <swiper class="visual_item_wrap new_visual" :options="swiperOption">
            <swiper-slide class="visual_item ui_first current left">
                <a>
                    <div class="visual_bg"></div>
                    <div class="item white">
                        <div class="info_wrap info_wrap_img">
                            <p class="tit">
                                <img
                                    src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2020/12/08/m_text1.png"
                                    alt="백팩 어디서 사요? 카드에 따라와요 "
                                />
                            </p>
                            <p class="txt">
                                <img
                                    src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2020/12/10/m_text2.png"
                                    alt="신규 발급받고 한 번만 써도 라이너 백팩을 발급 선물로!"
                                />
                            </p>
                        </div>
                    </div>
                    <div class="visual_obj">
                        <p>
                            <img
                                src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2020/12/08/m_img.png"
                                alt="카카오 라이언가방, 국민행복v2카드 플레이트, 하트"
                            />
                        </p>
                    </div>
                </a>
            </swiper-slide>
            <swiper-slide class="visual_item ui_first current left">
                <a>
                    <div class="visual_bg"></div>
                    <div class="item white">
                        <div class="info_wrap info_wrap_img">
                            <p class="tit">
                                <img
                                    src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2021/04/01/m_text1_1.png"
                                    alt="시원한 할부금리 할인! 60개월 연2.5%"
                                />
                            </p>
                            <p class="txt">
                                <img
                                    src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2021/04/01/m_text2_2.png"
                                    alt="삼성카드 다이렉트 오토로~ (4월기준)"
                                />
                            </p>
                        </div>
                    </div>
                    <div class="visual_obj">
                        <p data-pos="{}">
                            <img
                                src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2021/04/01/m_img_2.png"
                                alt="다이렉트오토 금리인하 이벤트 자세히보기"
                            />
                        </p>
                    </div>
                </a>
            </swiper-slide>
            <swiper-slide class="visual_item ui_first current left">
                <a>
                    <div class="visual_bg"></div>
                    <div class="item white">
                        <div class="info_wrap info_wrap_img">
                            <p class="tit">
                                <img
                                    src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2021/04/06/m_text1_2.png"
                                    alt="오직 4월- 선착순 3천명!"
                                />
                            </p>
                            <p class="txt">
                                <img
                                    src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2021/04/06/m_text2_2.png"
                                    alt="American Express 메탈네임택, 플레잉카드 소장의 기회"
                                />
                            </p>
                        </div>
                    </div>
                    <div class="visual_obj">
                        <p data-pos="{}">
                            <img
                                src="//static11.samsungcard.com/wcms/event_m/__icsFiles/afieldfile/2021/04/06/m_img.png"
                                alt="아멕스 한정판 굿즈 이벤트 자세히보기"
                            />
                        </p>
                    </div>
                </a>
            </swiper-slide>

            <div class="page_indi" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    // import AutoLogout from './AutoLogout.vue';
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
    import 'swiper/css/swiper.css';
    export default {
        components: {
            // AutoLogout,
            Swiper,
            SwiperSlide,
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    spaceBetween: 30,
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
