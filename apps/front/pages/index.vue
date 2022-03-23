<template>
  <main class="space-y-32">
    <MDMTitle>Page title</MDMTitle>

    <ProductForm />
    <ProductsGrid />
  </main>
</template>

<script setup lang="ts">
import { MDMTitle } from '@mdm/uikit'
import ProductForm from '@/components/product/productForm/ProductForm.vue'
import ProductsGrid from '@/components/product/productsGrid/ProductsGrid.vue'

definePageMeta({
  layout: 'default'
})
</script>
