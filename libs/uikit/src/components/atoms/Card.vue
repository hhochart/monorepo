<script setup lang="ts">
import { computed } from 'vue'

export type Props = {
  elevated?: boolean
  tag: keyof HTMLElementTagNameMap
}

const props = withDefaults(defineProps<Props>(), {
  elevated: true,
  tag: 'div'
})

const cardClass = computed(() => (props.elevated ? 'mdm-shadow-sm' : ''))
</script>

<template>
  <component :is="tag" class="mdm-rounded mdm-p-16" :class="cardClass">
    <slot>Default slot</slot>
  </component>
</template>
