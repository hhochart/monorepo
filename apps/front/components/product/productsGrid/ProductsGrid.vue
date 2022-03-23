<template>
  <div>
    <div v-if="loading">
      <b>Loading ...</b>
    </div>

    <div class="grid gap-16 grid-cols-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import {
  ProductsGridDocument,
  ProductsGridQuery,
  ProductsGridQueryVariables,
  useProductsGridQuery
} from './ProductsGrid.generated'

import ProductCard from '@/components/product/productCard/ProductCard.vue'

const res = useQuery<ProductsGridQuery, ProductsGridQueryVariables>(
  ProductsGridDocument,
  {}
)


const { loading, result } = useProductsGridQuery({ prefetch: false })

const products = result.value.products
</script>
