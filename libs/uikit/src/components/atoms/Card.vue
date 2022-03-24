<script setup lang="ts">
import { computed, useSlots } from 'vue'

export type Props = {
  elevated?: boolean
  tag?: keyof HTMLElementTagNameMap
}

const props = withDefaults(defineProps<Props>(), {
  elevated: true,
  tag: 'div'
})

const slots = useSlots()

const elevatedClass = computed(() =>
  props.elevated ? 'mdm-shadow-sm mdm-border' : ''
)

const cardHasHeader = computed(() => !!slots.header)
const cardHasFooter = computed(() => !!slots.footer)
const cardPaddingClass = computed(() =>
  cardHasHeader.value ? 'mdm-py-16' : 'mdm-p-16'
)
const contentPaddingClass = computed(() =>
  cardHasHeader.value || cardHasFooter.value ? 'mdm-p-16' : ''
)

const headerPaddingClass = computed(() =>
  cardHasHeader.value ? 'mdm-px-16' : ''
)

const footerPaddingClass = computed(() =>
    cardHasHeader.value ? 'mdm-px-16' : ''
)
</script>

<template>
  <component
    :is="tag"
    class="mdm-rounded"
    :class="[elevatedClass, cardPaddingClass]"
  >
    <p
      v-if="$slots.header"
      class="mdm-border-b-2 mdm-border-neutral-dark mdm-pb-16 mdm-text-sm"
      :class="headerPaddingClass"
    >
      <slot name="header" />
    </p>
    <div :class="contentPaddingClass">
      <slot>Default slot</slot>
    </div>

    <p
      v-if="$slots.footer"
      class="mdm-border-t-2 mdm-border-neutral-dark mdm-pt-16 mdm-text-sm"
      :class="footerPaddingClass"
    >
      <slot name="footer" />
    </p>
  </component>
</template>
