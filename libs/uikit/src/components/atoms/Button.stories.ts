import Button, { type Props } from './Button.vue'
import type { StoryFn } from '@storybook/vue3'

export default {
  title: 'Button',
  component: Button,
  args: {
    rounded: false
  },
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    rounded: {
      control: { type: 'boolean' }
    }
  }
}

const Template: StoryFn<Props> = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `<Button v-bind="args">Button slot</Button>`
})

export const Primary = Template.bind({})
Primary.args = {
  theme: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary'
}
