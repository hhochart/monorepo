<template>
  <p>
    <slot>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta obcaecati
      aspernatur nesciunt, voluptatibus aliquid eaque non ad alias vitae at
      accusamus perferendis libero est, quia suscipit eum architecto, qui
      molestiae!
    </slot>
  </p>
</template>

<script setup lang="ts">
export type Props = {}

const props = defineProps<Props>()
</script>
