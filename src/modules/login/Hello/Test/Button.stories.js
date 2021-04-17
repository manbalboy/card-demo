import MyButton from './Button.vue';
import { withDesign } from 'storybook-addon-designs';
import { withKnobs } from '@storybook/addon-knobs';
import {
    previewTemplate,
    VUE_PROPS_TEMPLATE,
    DEFAULT_VUE_CODESANDBOX,
} from 'storybook-addon-preview';
export default {
    title: 'Scard/Test/Button',
    component: MyButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    },
    decorators: [withDesign, withKnobs],

    source: {
        // Note: Path should be start from /src/ and must be end with file extension
        publicPath: '/src/stories/Test/Button.vue',
    },
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
    preview: [
        {
            tab: 'Vue',
            template: previewTemplate`
            <template>
    <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

</script>

            `,
            language: 'html',
            copy: true,
            codesandbox: DEFAULT_VUE_CODESANDBOX([]),
        },
    ],
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
