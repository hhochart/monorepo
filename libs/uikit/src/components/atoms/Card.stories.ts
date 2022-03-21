import Card from './Card.vue'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    elevated: {
      control: { type: 'boolean' }
    }
  }
}

const Template = (args) => ({
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
