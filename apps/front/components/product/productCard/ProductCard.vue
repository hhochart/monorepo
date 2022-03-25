<script setup lang="ts">
import { MDMCard, MDMTitle, MDMContent } from '@mdm/uikit'
import { ProductCardFragment } from './ProductCard.generated'

export type Props = { product: ProductCardFragment }

const props = defineProps<Props>()
</script>

<template>
  <MDMCard elevated class="flex flex-col bg-white px-0 pt-0">
    <img
      :src="props.product.image"
      class="aspect-square w-full rounded-t object-cover"
    />
    <div class="px-16 mt-16 space-y-16">
      <MDMTitle>{{ props.product.title }}</MDMTitle>
      <MDMContent>{{ props.product.description }}</MDMContent>
    </div>
  </MDMCard>
</template>
