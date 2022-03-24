<script setup lang="ts">
import { computed } from 'vue'

export type Props = {
  hasDivider?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hasDivider: true
})

const dividerClass = computed(() =>
  props.hasDivider ? 'mdm-divide-neutral-dark' : 'mdm-divide-transparent'
)
</script>

<template>
  <div
    class="mdm-flex mdm-flex-col mdm-divide-y-2 mdm-divide-neutral-dark"
    :class="[dividerClass]"
  >
    <slot />
  </div>
</template>
