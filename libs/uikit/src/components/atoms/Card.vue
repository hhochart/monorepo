<template>
  <div class="p-16 rounded" :class="cardClass">
    <slot>Default slot</slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
interface Props {
  elevated: boolean
}

const props = withDefaults(defineProps<Props>(), {
  elevated: true
})

const cardClass = computed(() => (props.elevated ? 'shadow' : ''))
</script>
