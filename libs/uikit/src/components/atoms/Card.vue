<template>
  <div class="p-5" :class="cardClass">
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
