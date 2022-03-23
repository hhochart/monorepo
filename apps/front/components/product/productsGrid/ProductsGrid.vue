<template>
  <div>
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
import { useProductsGridQuery } from './ProductsGrid.generated'
import ProductCard from '@/components/product/productCard/ProductCard.vue'

const { loading, result } = useProductsGridQuery()
</script>
