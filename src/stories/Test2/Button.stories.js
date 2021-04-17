import MyButton from './Button.vue';
import { withDesign } from 'storybook-addon-designs';

export default {
    title: 'Scard/Test2/Button',
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
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
});

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button',
};

Primary.story = {
    name: 'Responsive Button',
    parameters: {
        zeplinLink: [
            {
                name: 'Desktop',
                link: 'zpl://components?pid=pid1&coid=coid1',
            },
            {
                name: 'Tablet',
                link: 'zpl://components?pid=pid1&coid=coid2',
            },
            {
                name: 'Mobile',
                link: 'zpl://components?pid=pid1&coid=coid3',
            },
        ],
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
