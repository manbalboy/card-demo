<template>
    <div class="column is-half">
        <div class="card" :class="{ 'not-expanded': !this.expanded }">
            <header class="card-header" @click="toggleCardState">
                <p class="card-header-title">
                    {{ title }}
                </p>
                <a class="card-header-icon">
                    <span class="icon">
                        <i class="fa fa-angle-up">></i>
                    </span>
                </a>
            </header>

            <div class="card-content">
                <div class="content">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import bus from '@/utils/bus.js';
    export default {
        props: ['title', 'expandAll'],
        data() {
            return {
                expanded: false,
            };
        },
        methods: {
            toggleCardState() {
                this.expanded = !this.expanded;
            },
            closeAll() {
                this.expanded = false;
            },
        },
        created() {
            bus.$on('closeAll', this.closeAll);
        },
    };
</script>

<style>
    .is-half {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: 400;
        color: #4a4a4a;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.428571428571429;
        box-sizing: inherit;
        display: block;
        flex-basis: 0;
        -webkit-box-flex: 1;
        flex-grow: 1;
        flex-shrink: 1;
        padding: 10px;
    }

    .card {
        margin-bottom: 10px;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.428571428571429;
        box-sizing: inherit;
        max-width: 100%;
        position: relative;
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
        color: #4a4a4a;
        margin-bottom: 10px;
        width: 100%;
    }
    .card-header-title {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-size: 1rem;
        line-height: 1.428571428571429;
        cursor: pointer;
        box-sizing: inherit;
        margin: 0;
        -webkit-box-align: start;
        align-items: flex-start;
        color: #363636;
        display: flex;
        -webkit-box-flex: 1;
        flex-grow: 1;
        font-weight: 700;
        padding: 10px;
    }

    .card-header-icon {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.428571428571429;
        box-sizing: inherit;
        color: #00d1b2;
        text-decoration: none;
        transition: none 86ms ease-out;
        -webkit-box-align: center;
        align-items: center;
        cursor: pointer;
        display: flex;
        -webkit-box-pack: center;
        justify-content: center;
        width: 40px;
    }

    .card .card-content {
        transition: all 150ms ease;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.428571428571429;
        color: #4a4a4a;
        box-sizing: inherit;
        padding: 20px;
        transition: all 150ms ease;
    }
    .content {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.428571428571429;
        box-sizing: inherit;
        color: #4a4a4a;
    }
    .card .card-header {
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        font-weight: 400;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        line-height: 1.428571428571429;
        color: #4a4a4a;
        box-sizing: inherit;
        -webkit-box-align: stretch;
        align-items: stretch;
        box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
        display: flex;
        min-height: 40px;
        cursor: pointer;
    }
    .card .card-header .icon {
        transform: rotate(270deg);
        transition: transform 150ms ease-out;
    }

    .card.not-expanded .card-content {
        transform: scaleY(0);
        transform-origin: top;
        opacity: 0;
        height: 0;
        padding: 0;
    }

    .card.not-expanded .card-header .icon {
        transform: rotate(90deg);
    }

    .icon {
        color: #00d1b2;
        cursor: pointer;
        box-sizing: inherit;
        display: inline-block;
        /* font: normal normal normal 14px/1 FontAwesome; */
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        text-align: center;
        vertical-align: top;
        font-size: inherit;
        line-height: inherit;
    }
</style>
