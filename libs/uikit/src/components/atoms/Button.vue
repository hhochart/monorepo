import { computed } from 'vue';
<template>
  <button
    class="px-16 py-8 rounded-sm ring-opacity-50 focus:ring-2"
    :class="[themeClasses, roundedClasses]"
  >
    <slot>Default slot</slot>
  </button>
</template>

<script lang="ts">
enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}
</script>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  theme: ButtonTheme
  rounded?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  theme: ButtonTheme.PRIMARY,
  rounded: false
})

const themeClasses = computed(() => {
  switch (props.theme) {
    case ButtonTheme.PRIMARY:
      return 'bg-primary ring-primary-dark text-white'

    case ButtonTheme.SECONDARY:
      return 'bg-secondary ring-secondary-craft text-white'

    default:
      return 'bg-primary-dark ring-primary-dark text-white'
  }
})

const roundedClasses = computed(() =>
  props.rounded ? 'rounded-full' : 'rounded-xs'
)
</script>
