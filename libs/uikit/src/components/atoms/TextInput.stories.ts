import { ref } from 'vue'
import TextInput from './TextInput.vue'
import type { Story } from '@storybook/vue3'
import type { Props } from '@/components/atoms/TextInput.vue'

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    disabled: false
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    }
  }
}

const Template: Story<Props> = (args) => ({
  components: { TextInput },
  setup() {
    const model = ref('value')
    return { args, model }
  },
  template: `<TextInput v-bind="args" v-model="model" />`
})

export const TextInputTemplate = Template.bind({})
TextInputTemplate.args = {
  type: 'text'
}

export const EmailInputTemplate = Template.bind({})
EmailInputTemplate.args = {
  type: 'email'
}

export const NumberInputTemplate = Template.bind({})
NumberInputTemplate.args = {
  type: 'number'
}
