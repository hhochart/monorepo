<template>
  <main>
    <MDMTitle>Page title</MDMTitle>

    <MDMCard elevated class="mt-32 space-y-16 flex flex-col">
      <MDMContent>Content paragraph.</MDMContent>
      <MDMTextInput v-model="value" /> {{ value }}
      <MDMButton @click="onButtonClick">Click me</MDMButton>
    </MDMCard>
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

const value = ref('default value')

const router = useRouter()
definePageMeta({
  layout: 'default'
})

function onButtonClick() {
  router.push({ name: 'pokemon', params: { pokemon: 'tortank' } })
}

await useAsyncData('pokemon', async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return $fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
})
</script>
