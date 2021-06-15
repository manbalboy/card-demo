module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-designs",
    "storybook-zeplin/register",
    "storybook-addon-preview/register",
    "./my-addon/register"
  ],

  refs: {
    vue: {
      title: 'React',
      url: 'http://localhost:6006',
    },
  },
}