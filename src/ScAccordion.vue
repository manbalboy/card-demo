<template>
    <section class="faq" ref="rootEl">
        <div class="faq-wrapper">
            <nav v-if="hasNavigation" class="faq__nav">
                <div
                    v-for="(category, i) in categories"
                    :key="`category-${i}`"
                    v-html="category"
                    :class="generateCategoryClasses(category)"
                    @click="makeActiveCategory(category, i)"
                ></div>
            </nav>

            <transition name="accordion-fade-slide" mode="out-in">
                <div v-if="showAccordion" class="accordion">
                    <div
                        class="accordion__item"
                        v-for="(item, i) in categoryItems"
                        :key="`accordion-item-${i}`"
                    >
                        <div :class="generateQuestionClasses(i)" @click="makeActive(i)">
                            <p class="accordion__title-text" v-html="item[questionProperty]"></p>
                            <button :class="generateButtonClasses(i)"></button>
                        </div>
                        <collapse-transition>
                            <div v-if="i === activeQuestionIndex">
                                <div class="accordion__value">
                                    <slot v-bind="item">
                                        <div v-html="item[answerProperty]"></div>
                                    </slot>
                                </div>
                            </div>
                        </collapse-transition>
                    </div>
                </div>
            </transition>
        </div>
    </section>
</template>

<script>
    import { CollapseTransition } from 'vue2-transitions';

    export default {
        name: 'VueFaqAccordion',

        components: {
            CollapseTransition,
        },

        data() {
            return {
                activeTab: '',
                activeQuestionIndex: null,
                showAccordion: true,
            };
        },

        props: {
            /**
             * Array of items
             * Object style {questionProperty: string, answerProperty: string, tabName: string}
             * You can change object keys names using other props (questionProperty, answerProperty, tabName)
             */
            items: {
                type: Array,
                required: true,
            },
            /**
             * Key name of object in items array for specifying title of question
             */
            questionProperty: {
                type: String,
                default: 'title',
            },
            /**
             * Key name of object in items array for specifying content text of open question
             */
            answerProperty: {
                type: String,
                default: 'value',
            },
            /**
             * Key name of object in items array for specifying navigation tab name
             */
            tabName: {
                type: String,
                default: 'category',
            },
            /**
             * Color for hover and active tab/question
             * possible values: 'red', '#F00', 'rgb(255, 0, 0)'
             */
            activeColor: {
                type: String,
                default: '#D50000',
            },
            /**
             * Color for borders
             */
            borderColor: {
                type: String,
                default: '#9E9E9E',
            },
            /**
             * Color for fonts
             */
            fontColor: {
                type: String,
                default: '#000000',
            },
            /**
             * Opened by default tabName (category)
             */
            initialTab: {
                type: String,
                default: null,
            },
            /**
             * Opened by default question
             * All closed by default
             */
            initialQuestionIndex: {
                type: Number,
                default: 0,
            },
        },

        computed: {
            categories() {
                const uniqueCategories = this.items
                    .map(item => item[this.tabName])
                    .filter(
                        (category, index, categories) => categories.indexOf(category) === index,
                    );

                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.activeTab = this.initialTab || uniqueCategories[0];
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.activeQuestionIndex = this.initialQuestionIndex || 0;
                return uniqueCategories;
            },
            categoryItems() {
                return this.items.filter(item => item[this.tabName] === this.activeTab);
            },
            hasNavigation() {
                return !!this.categories[0];
            },
        },

        methods: {
            makeActive(itemIndex) {
                this.activeQuestionIndex =
                    this.activeQuestionIndex === itemIndex ? null : itemIndex;
                this.$emit('itemSelect', { itemIndex });
            },
            generateButtonClasses(buttonIndex) {
                return [
                    'accordion__toggle-button',
                    this.activeQuestionIndex === buttonIndex
                        ? 'accordion__toggle-button_active'
                        : null,
                ];
            },
            generateQuestionClasses(questionIndex) {
                return [
                    'accordion__title',
                    this.activeQuestionIndex === questionIndex ? 'accordion__title_active' : null,
                ];
            },
            makeActiveCategory(category, categoryIndex) {
                if (this.activeTab === category) return;

                this.showAccordion = false;
                this.activeTab = category;
                this.activeQuestionIndex = null;
                setTimeout(() => {
                    this.$emit('categorySelect', { categoryIndex });
                    this.showAccordion = true;
                }, 300);
            },
            generateCategoryClasses(category) {
                return [
                    'faq__nav-item',
                    this.activeTab === category ? 'faq__nav-item_active' : null,
                ];
            },
        },

        mounted() {
            this.$refs.rootEl.style.setProperty('--active-color', this.activeColor);
            this.$refs.rootEl.style.setProperty('--border-color', this.borderColor);
            this.$refs.rootEl.style.setProperty('--font-color', this.fontColor);
        },
    };
</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    button {
        border: none;
        background: none;
        outline: none;
    }

    .faq {
        width: 100%;
        padding: 0 10px;
    }

    .faq-wrapper {
        max-width: 825px;
    }

    .faq__title {
        text-align: center;
        margin-bottom: 25px;
    }

    .faq__nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        border: 2px solid var(--border-color);
        border-radius: 5px;
    }

    .faq__nav-item {
        height: 60px;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        border-right: 2px solid var(--border-color);
        cursor: pointer;
        font-weight: 600;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        text-align: center;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        color: var(--font-color);
    }

    .faq__nav-item_active {
        color: var(--active-color);
    }

    .faq__nav-item:hover {
        color: var(--active-color);
    }

    .faq__nav-item:last-child {
        border-right: none;
    }

    .faq__accordion {
        min-height: 250px;
    }

    .accordion-fade-slide-enter-active,
    .accordion-fade-slide-leave-active {
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }

    .accordion-fade-slide-enter {
        -webkit-transform: translateY(-25px);
        transform: translateY(-25px);
        opacity: 0;
    }

    .accordion-fade-slide-leave-to {
        -webkit-transform: translateY(25px);
        transform: translateY(25px);
        opacity: 0;
    }

    .accordion {
        border: 2px solid var(--border-color);
        border-radius: 5px;
        margin-top: 15px;
    }

    .accordion__item {
        border-bottom: 2px solid var(--border-color);
    }

    .accordion__item:last-child {
        border-bottom: none;
    }

    .accordion__title {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 25px;
        cursor: pointer;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        color: var(--font-color);
    }

    .accordion__title_active {
        color: var(--active-color);
    }

    .accordion__title:hover {
        color: var(--active-color);
    }

    .accordion__title:hover .accordion__toggle-button::before,
    .accordion__title:hover .accordion__toggle-button::after {
        background: var(--active-color);
    }

    .accordion__title-text {
        margin-right: 10px;
    }

    .accordion__value {
        padding: 0 25px 25px 25px;
        text-align: left;
        color: var(--font-color);
    }

    .accordion__toggle-button {
        position: relative;
        width: 16px;
        height: 16px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
        padding-left: 16px;
        cursor: pointer;
    }

    .accordion__toggle-button::before,
    .accordion__toggle-button::after {
        content: '';
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        background: black;
    }

    .accordion__toggle-button::before {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .accordion__toggle-button_active {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .accordion__toggle-button_active::before,
    .accordion__toggle-button_active::after {
        background: var(--active-color);
    }
    /*# sourceMappingURL=test.css.map */
</style>
