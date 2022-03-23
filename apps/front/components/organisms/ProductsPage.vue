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
import { useQuery } from '@vue/apollo-composable'
import { gql } from '@apollo/client/core'
import { MDMTitle } from '@mdm/uikit'
import ProductCard from '@/components/molecules/ProductCard.vue'
import ProductForm from '@/components/molecules/ProductForm.vue'

const PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      description
      image
    }
  }
`
const { loading, result } = useQuery(PRODUCTS)
</script>
