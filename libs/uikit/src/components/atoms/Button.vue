import { computed } from 'vue';
<template>
  <button class="px-5 py-3 rounded-full ring" :class="buttonTheme">
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
      return 'bg-blue-100 ring-blue-200'

    case ButtonTheme.SECONDARY:
      return 'bg-red-100 ring-red-200'

    default:
      return 'bg-blue-100 ring-blue-200'
  }
})
</script>
