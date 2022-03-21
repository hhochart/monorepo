import Button from './Button.vue'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    theme: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    }
  }
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args">Button slot</Button>'
})

export const Primary = Template.bind({})
Primary.args = {
  theme: 'primary'
}

export const Secondary = Template.bind({})
Secondary.args = {
  theme: 'secondary'
}
