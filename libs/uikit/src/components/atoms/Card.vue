<template>
  <div class="mdm-p-16 mdm-rounded" :class="cardClass">
    <slot>Default slot</slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

export type Props = {
  elevated: boolean
}

const props = withDefaults(defineProps<Props>(), {
  elevated: true
})

const cardClass = computed(() => (props.elevated ? 'mdm-shadow' : ''))
</script>
