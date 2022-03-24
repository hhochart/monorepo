import Title, { type Props } from './Title.vue'
import type { Story } from '@storybook/vue3'

export default {
  title: 'atoms/Title',
  component: Title
}

const Template: Story<Props> = (args) => ({
  components: { Title },
  setup() {
    return { args }
  },
  template: '<Title v-bind="args"></Title>'
})

export const H1 = Template.bind({})
H1.args = {
  tag: 'h1'
}

export const H2 = Template.bind({})
H2.args = {
  tag: 'h2'
}

export const H3 = Template.bind({})
H3.args = {
  tag: 'h3'
}

export const H4 = Template.bind({})
H4.args = {
  tag: 'h4'
}
