<script lang="ts" setup>
export type Props = {
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

<template>
  <input
    :value="modelValue"
    :type="props.type"
    class="mdm-border mdm-border-neural-dark mdm-rounded mdm-px-16 mdm-py-8 focus-within:mdm-ring-2 mdm-ring-neutral-dark focus-within:mdm-outline-none"
    @input="$emit('update:modelValue', ($event.currentTarget as HTMLInputElement).value)"
  />
</template>
