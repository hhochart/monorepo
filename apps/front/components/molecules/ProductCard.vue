<template>
  <MDMCard elevated class="flex flex-col space-y-16 pt-0 px-0">
    <img
      :src="props.product.image"
      class="w-full object-cover max-w-md rounded aspect-square"
    />
    <div class="px-16">
      <MDMTitle>{{ props.product.title }}</MDMTitle>
      <MDMContent>{{ props.product.description }}</MDMContent>
    </div>
  </MDMCard>
</template>

<script setup lang="ts">
import { MDMCard, MDMTitle, MDMContent } from '@mdm/uikit'

export type Product = {
  id: string
  image: string
  title: string
  description: string
}

export type Props = { product: Product }

const props = defineProps<Props>()
</script>
