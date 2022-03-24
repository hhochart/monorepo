<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import { string, object } from 'yup'
import { computed } from 'vue'
import { MDMButton, MDMTextInput, MDMCard, MDMContent } from '@mdm/uikit'
import { useCreateProductMutation } from './ProductForm.generated'
import { ProductsGridDocument } from '@/components/product/productsGrid/ProductsGrid.generated'

const { mutate } = useCreateProductMutation({
  refetchQueries: [{ query: ProductsGridDocument }]
})

const schema = object({
  title: string().required().min(5),
  description: string().min(8)
})
const { handleSubmit, errors, meta } = useForm({
  validationSchema: schema
})

const { value: title } = useField<string>('title')
const { value: description } = useField<string>('description')

const submitForm = handleSubmit(async function (values, { resetForm }) {
  await mutate({
    input: {
      title: values.title,
      description: values.description,
      image: `https://picsum.photos/id/${Math.floor(
        Math.random() * 300
      )}/200/300`
    }
  })

  resetForm()
})

const canSubmit = computed(() => meta.value.dirty && meta.value.valid)
</script>

<template>
  <MDMCard tag="form" elevated class="mt-32 space-y-16 flex flex-col">
    <MDMContent>Formulaire d'ajout de produit.</MDMContent>
    <div>
      <MDMTextInput v-model.trim="title" placeholder="Titre" />
      <div v-if="errors.title">{{ errors.title }}</div>
    </div>
    <div>
      <MDMTextInput v-model.trim="description" placeholder="Description" />
      <div v-if="errors.description">{{ errors.description }}</div>
    </div>
    <MDMButton :disabled="!canSubmit" @click.prevent="submitForm">
      Submit
    </MDMButton>
  </MDMCard>
</template>
