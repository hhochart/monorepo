<template>
  <MDMCard tag="form" elevated class="mt-32 space-y-16 flex flex-col">
    <MDMContent>Content paragraph.</MDMContent>
    <MDMTextInput v-model.trim="titleModel" placeholder="Titre" />
    <MDMTextInput v-model.trim="descriptionModel" placeholder="Description" />
    <MDMButton @click.prevent="onSubmit">Submit</MDMButton>
  </MDMCard>
</template>

<script setup lang="ts">
import { MDMButton, MDMTextInput, MDMCard, MDMContent } from '@mdm/uikit'
import { useCreateProductMutation } from './ProductForm.generated'
import { ProductsGridDocument } from '@/components/product/productsGrid/ProductsGrid.generated'

const titleModel = ref('')
const descriptionModel = ref('')

async function onSubmit() {
  if (!titleModel.value || !descriptionModel.value) {
    return
  }
  await createProduct({
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

const { mutate: createProduct } = useCreateProductMutation({
  refetchQueries: [{ query: ProductsGridDocument }]
})
</script>
