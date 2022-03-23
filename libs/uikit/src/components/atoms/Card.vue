<template>
  <component :is="tag" class="mdm-p-16 mdm-rounded" :class="cardClass">
    <slot>Default slot</slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type Props = {
  elevated: boolean
  tag: keyof HTMLElementTagNameMap
}

const props = withDefaults(defineProps<Props>(), {
  elevated: true,
  tag: 'div'
})

const cardClass = computed(() => (props.elevated ? 'mdm-shadow' : ''))
</script>
