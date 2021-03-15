const pagesConfig = require('./src/entry/pages.config.js');
module.exports = {
    // pages: pagesConfig,
    // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             additionalData: `@import "@/css/base.scss";`,
    //         },
    //     },
    // },
    devServer: {
        overlay: false,
    },

    pluginOptions: {
        i18n: {
            locale: 'ko',
            fallbackLocale: 'ko',
            localeDir: 'ko',
            enableInSFC: true,
        },
    },
    chainWebpack: config => {
        config.module
            .rule('i18n')
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use('i18n')
            .loader('@kazupon/vue-i18n-loader')
            .end();
    },
};
