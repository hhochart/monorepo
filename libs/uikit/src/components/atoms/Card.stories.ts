import Card, { type Props } from './Card.vue'
import type { Story } from '@storybook/vue3'

export default {
  title: 'atoms/Card',
  component: Card,
  argTypes: {
    elevated: {
      control: { type: 'boolean' }
    }
  }
}

const Template: Story<Props> = (args) => ({
  components: { Card },
  setup() {
    return { args }
  },
  template: '<Card v-bind="args"></Card>'
})

export const ElevatedCard = Template.bind({})
ElevatedCard.args = {
  elevated: true
}

export const FlatCard = Template.bind({})
FlatCard.args = {
  elevated: false
}

const WithHeaderFooterTemplate: Story<Props> = (args) => ({
  components: { Card },
  setup() {
    return { args }
  },
  template: `
  <Card v-bind="args">
    <template #header>Card header</template>
    <template #footer>Card footer</template>
  </Card>`
})

export const HeaderCard = WithHeaderFooterTemplate.bind({})
HeaderCard.args = {
  elevated: true
}
