import ScAccordion from './ScAccordion.vue';
import { withDesign } from 'storybook-addon-designs';

export default {
    title: 'Scard/Test2/ScAccordion',
    component: ScAccordion,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    },
    decorators: [withDesign],
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { ScAccordion },
    template: '<ScAccordion  v-bind="$props" />',
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
    },
});

export const Primary = Template.bind({});
Primary.args = {
    items: [
        {
            title: 'How many time zones are there in all?',
            value: 'Given a 24-hour day and 360 degrees of longitude around the Earth',
        },
        {
            title: 'How long is a day and year on Venus?',
            value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
        },
        {
            title: 'What animal smells like popcorn?',
            value: 'Binturongs smell like popcorn.',
        },
    ],
};
