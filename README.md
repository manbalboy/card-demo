# scard-demo

## story-book 설치 
```
npx -p @storybook/cli sb init --type vue


//피그마 디자인
npm install --save-dev storybook-addon-designs@alpha


// .storybook/main.js
module.exports = {
  addons: ['storybook-addon-designs'],
}

// .storybook/addon.js
import 'storybook-addon-designs/register'



import MyButton from './Button.vue';
import { withDesign } from 'storybook-addon-designs';

export default {
    title: 'Scard/Test/Button',
    component: MyButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    },
    decorators: [withDesign],
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { MyButton },
    template: '<my-button @onClick="onClick" v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

Primary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

#  Knobs 애드온 적용
npm install --save-dev @storybook/addon-knobs


# code preview --naver
npm i storybook-addon-preview --dev
npm i -D @storybook/addon-controls

// .storybook/main.js
module.exports = {
    addons: [
        "storybook-addon-preview/register"
        ,'@storybook/addon-controls'
    ],
};



```