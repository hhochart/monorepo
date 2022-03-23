<template>
  <main class="space-y-16">
    <MDMTitle>Page title</MDMTitle>

    <MDMCard elevated class="mt-32 space-y-16 flex flex-col">
      <MDMContent>Content paragraph.</MDMContent>
      <MDMTextInput v-model="value" />
      <MDMButton @click="onButtonClick">Click me</MDMButton>
    </MDMCard>

    <div v-if="loading">
      <b>Loading ...</b>
    </div>

    <div class="grid gap-16 grid-cols-4">
      <MDMCard
        v-for="product in result.products"
        :key="product.id"
        elevated
        class="flex flex-col space-y-16 pt-0 px-0"
      >
        <img
          :src="product.image"
          class="w-full object-cover max-w-md rounded aspect-square"
        />
        <div class="px-16">
          <MDMTitle>{{ product.title }}</MDMTitle>
          <MDMContent>{{ product.description }}</MDMContent>
        </div>
      </MDMCard>
    </div>
  </main>
</template>

<script setup lang="ts">
import {
  MDMButton,
  MDMCard,
  MDMContent,
  MDMTextInput,
  MDMTitle
} from '@mdm/uikit'
import { gql } from '@apollo/client/core'
import { useQuery, useMutation } from '@vue/apollo-composable'

const value = ref('default value')

definePageMeta({
  layout: 'default'
})

function onButtonClick() {
  mutate()
}

const PRODUCTS = gql`
  query GetProducts {
    products {
      id
      title
      image
      description
    }
  }
`

const CREATE_PRODUCT = gql`
  mutation productCreate($input: ProductCreateInput!) {
    productCreate(input: $input) {
      product {
        id
        title
      }
    }
  }
`
const { loading, result } = useQuery(PRODUCTS)

const { mutate } = useMutation(CREATE_PRODUCT, {
  variables: {
    input: {
      title: 'Test title',
      description: 'ok'
    }
  },
  refetchQueries: [
    {
      query: PRODUCTS
    }
  ]
})
</script>
