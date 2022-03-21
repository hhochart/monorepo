<template>
  <input
    :value="modelValue"
    :type="props.type"
    class="border border-neural-dark rounded px-16 py-8 focus-within:ring-2 ring-neutral-dark focus-within:outline-none"
    @input="$emit('update:modelValue', ($event.currentTarget as HTMLInputElement).value)"
  />
</template>

<script lang="ts" setup>
type Props = {
  type: string
  modelValue: string | number
}

type Emits = {
  (e: 'update:modelValue', value: string | number): void
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
})

defineEmits<Emits>()
</script>
