<script setup lang="ts">
import { computed } from 'vue'
import { useProductsGridQuery } from './ProductsGrid.generated'
import ProductCard from '@/components/product/productCard/ProductCard.vue'

const { loading, result } = useProductsGridQuery({
  prefetch: false
})

const products = computed(() => result.value?.products)
</script>

<template>
  <div>
    <div v-if="loading">
      <b>Loading ...</b>
    </div>

    <div class="grid grid-cols-3 gap-16">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
