<template>
  <component :is="props.tag" :class="titleClass">
    <slot>Default title</slot>
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4'

type Props = {
  tag: TitleTag
}

const props = withDefaults(defineProps<Props>(), {
  tag: 'h1'
})

const titleClass = computed(() => {
  switch (props.tag) {
    case 'h1':
      return 'text-4xl'

    case 'h2':
      return 'text-3xl'

    case 'h3':
      return 'text-2xl'

    case 'h4':
      return 'text-xl'

    default:
      return 'text-4xl'
  }
})
</script>
