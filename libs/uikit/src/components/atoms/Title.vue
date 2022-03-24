<script lang="ts" setup>
import { computed } from 'vue'

export type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4'
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h1'
})

const titleClass = computed(() => {
  switch (props.tag) {
    case 'h1':
      return 'mdm-text-4xl'

    case 'h2':
      return 'mdm-text-3xl'

    case 'h3':
      return 'mdm-text-2xl'

    case 'h4':
      return 'mdm-text-xl'

    default:
      return 'mdm-text-4xl'
  }
})
</script>

<template>
  <component :is="props.tag" :class="[titleClass]" v-bind="$attrs">
    <slot>Default title</slot>
  </component>
</template>
