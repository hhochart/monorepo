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
    class="mdm-border-neural-dark mdm-rounded mdm-border mdm-px-16 mdm-py-8 mdm-ring-neutral-dark focus-within:mdm-outline-none focus-within:mdm-ring-2"
    @input="$emit('update:modelValue', ($event.currentTarget as HTMLInputElement).value)"
  />
</template>
