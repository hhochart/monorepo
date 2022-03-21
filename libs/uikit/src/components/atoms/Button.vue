import { computed } from 'vue';
<template>
  <button
    class="px-16 py-8 rounded-sm ring-opacity-50 focus:ring-2"
    :class="buttonTheme"
  >
    <slot>{{ props.message }}</slot>
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
  message?: string
  theme: ButtonTheme
}

const props = withDefaults(defineProps<Props>(), {
  message: 'DEFAULT MESSAGE',
  theme: ButtonTheme.PRIMARY
})

const buttonTheme = computed(() => {
  switch (props.theme) {
    case ButtonTheme.PRIMARY:
      return 'bg-primary ring-primary-dark text-white'

    case ButtonTheme.SECONDARY:
      return 'bg-secondary ring-secondary-craft text-white'

    default:
      return 'bg-primary-dark ring-primary-dark text-white'
  }
})
</script>
