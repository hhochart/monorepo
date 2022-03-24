<script setup lang="ts">
import { MDMButton } from '@mdm/uikit'

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <main class="gap-32 flex justify-center items-center mt-112">
    <MDMButton
      theme="secondary"
      class="w-112"
      @click="$router.push('/products')"
    >
      Produits
    </MDMButton>
    <MDMButton theme="secondary" class="w-112" @click="$router.push('/cart')">
      Paniers
    </MDMButton>
  </main>
</template>
