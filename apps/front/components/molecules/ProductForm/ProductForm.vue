<template>
  <MDMCard tag="form" elevated class="mt-32 space-y-16 flex flex-col">
    <MDMContent>Content paragraph.</MDMContent>
    <MDMTextInput v-model.trim="titleModel" placeholder="Titre" />
    <MDMTextInput v-model.trim="descriptionModel" placeholder="description" />
    <MDMButton @click.prevent="onSubmit">Submit</MDMButton>
  </MDMCard>
</template>

<script setup lang="ts">
import { MDMButton, MDMTextInput, MDMCard, MDMContent } from '@mdm/uikit'
import { useProductCreateMutation } from './ProductForm.generated'
import { ProductsDocument } from '~~/components/organisms/Products.generated'

const titleModel = ref('')
const descriptionModel = ref('')

async function onSubmit() {
  if (!titleModel.value || !descriptionModel.value) {
    return
  }
  await createProduct()
  titleModel.value = ''
  descriptionModel.value = ''
}

const { mutate: createProduct } = useProductCreateMutation(() => ({
  variables: {
    input: {
      title: titleModel.value,
      description: descriptionModel.value,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 300
      )}/200/300`
    }
  },
  refetchQueries: [
    {
      query: ProductsDocument
    }
  ]
}))
</script>
