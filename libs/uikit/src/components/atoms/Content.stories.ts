import Content, { type Props } from './Content.vue'
import type { Story } from '@storybook/vue3'

export default {
  title: 'atoms/Content',
  component: Content
}

const Template: Story<Props> = (args) => ({
  components: { Content },
  setup() {
    return { args }
  },
  template: `<Content v-bind="args"></Content>`
})

export const ContentTemplate = Template.bind({})
