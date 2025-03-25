import { Story } from '@storybook/vue3'
import Footer, { Props } from './theFooter.vue'

export default {
    title: 'Footer',
    component: Footer,
}

const Template: Story<Props> = (args) => ({
    components: { Footer },
    setup() {
        return { args }
    },
    template: '<Footer v-bind="args" />',
})

export const footer = Template.bind({})
// footer.args = {
//   links: "https://ronics.uz/",
//   email: "info@ronics.uz",
//   map: "dasdasdadad",
//   map_link: "dadada",
//   link: "",
// };
