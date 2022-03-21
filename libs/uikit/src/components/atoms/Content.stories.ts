import Content from './Content.vue'

export default {
  title: 'Content',
  component: Content
}

const Template = (args) => ({
  components: { Content },
  setup() {
    return { args }
  },
  template: `<Content v-bind="args"></Content>`
})

export const ContentTemplate = Template.bind({})
