<script setup lang="ts">
import { computed } from 'vue'

export type ButtonTheme = 'primary' | 'secondary'

export type Props = {
  theme: ButtonTheme
  rounded?: boolean
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'primary',
  rounded: false,
  disabled: false
})

const themeClasses = computed(() => {
  switch (props.theme) {
    case 'primary':
      return 'mdm-bg-primary mdm-ring-primary-dark mdm-text-white'

    case 'secondary':
      return 'mdm-bg-secondary mdm-ring-secondary-craft mdm-text-white'

    default:
      return 'mdm-bg-primary-dark mdm-ring-primary-dark mdm-text-white'
  }
})

const roundedClasses = computed(() =>
  props.rounded ? 'mdm-rounded-full' : 'mdm-rounded-xs'
)

const disabledClasses = computed(() =>
  props.disabled ? 'mdm-cursor-default mdm-opacity-75' : ''
)
</script>

<template>
  <button
    class="mdm-px-16 mdm-py-8 mdm-rounded-sm mdm-ring-opacity-50 focus:mdm-ring-2 focus:mdm-outline-none"
    :class="[themeClasses, roundedClasses, disabledClasses]"
  >
    <slot>Default slot</slot>
  </button>
</template>
