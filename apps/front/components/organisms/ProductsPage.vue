<template>
  <div class="space-y-32">
    <MDMTitle>Page title</MDMTitle>
    <ProductForm />

    <div v-if="loading">
      <b>Loading ...</b>
    </div>

    <div class="grid gap-16 grid-cols-4">
      <ProductCard
        v-for="product in result.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { MDMTitle } from '@mdm/uikit'
import { useProductsQuery } from './Products.generated'
import ProductCard from '@/components/molecules/ProductCard/ProductCard.vue'
import ProductForm from '@/components/molecules/ProductForm/ProductForm.vue'

const { loading, result } = useProductsQuery()
</script>
