import ItemList, { type Props } from './ItemList.vue'
import type { Story } from '@storybook/vue3'

export default {
  title: 'molecules/ItemList',
  component: ItemList,
  argTypes: {
    hasDivider: {
      control: { type: 'boolean' }
    }
  }
}

const Template: Story<Props> = (args) => ({
  components: { ItemList },
  setup() {
    return { args }
  },
  template: `<ItemList v-bind="args">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
  </ItemList>`
})

export const ItemListDivider = Template.bind({})
ItemListDivider.args = {
  hasDivider: true
}

export const ItemListFlat = Template.bind({})
ItemListFlat.args = {
  hasDivider: false
}
