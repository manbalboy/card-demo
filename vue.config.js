const pagesConfig = require('./src/entry/pages.config.js');
module.exports = {
    pages: pagesConfig,
    devServer: {
        overlay: false,
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/testt/' : '/',
    // css: {
    //     loaderOptions: {
    //         sass: {
    //             additionalData: `@import "@/css/base.scss";`,
    //         },
    //     },
    // },
};
