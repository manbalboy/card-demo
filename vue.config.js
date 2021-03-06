module.exports = {
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
