<template>
  <MDMCard tag="form" elevated class="mt-32 space-y-16 flex flex-col">
    <MDMContent>Content paragraph.</MDMContent>
    <MDMTextInput v-model.trim="titleModel" placeholder="Titre" />
    <MDMTextInput v-model.trim="descriptionModel" placeholder="description" />
    <MDMButton @click.prevent="onSubmit">Click me</MDMButton>
  </MDMCard>
</template>

<script setup lang="ts">
import { MDMButton, MDMTextInput, MDMCard, MDMContent } from '@mdm/uikit'
import { gql } from '@apollo/client/core'
import { useMutation } from '@vue/apollo-composable'

const titleModel = ref('')
const descriptionModel = ref('')

const CREATE_PRODUCT = gql`
  mutation productCreate($input: ProductCreateInput!) {
    productCreate(input: $input) {
      product {
        id
        title
        image
      }
    }
  }
`

function onSubmit() {
  if (!titleModel.value || !descriptionModel.value) {
    return
  }
  createProduct({
    input: {
      title: titleModel.value,
      description: descriptionModel.value,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 300
      )}/200/300`
    }
  })
  titleModel.value = ''
  descriptionModel.value = ''
}

const { mutate: createProduct } = useMutation(CREATE_PRODUCT)
</script>
