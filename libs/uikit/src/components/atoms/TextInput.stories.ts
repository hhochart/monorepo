import { ref } from 'vue'
import TextInput from './TextInput.vue'

export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: {
    disabled: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args) => ({
  components: { TextInput },
  setup() {
    const model = ref('value')
    return { args, model }
  },
  template: `<TextInput v-bind="args" v-model="model" />`
})

export const TextInputTemplate = Template.bind({})
TextInputTemplate.args = {
  type: 'text',
  disabled: false
}

export const EmailInputTemplate = Template.bind({})
EmailInputTemplate.args = {
  type: 'email',
  disabled: false
}

export const NumberInputTemplate = Template.bind({})
NumberInputTemplate.args = {
  type: 'number',
  disabled: false
}
