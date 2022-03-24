<script setup lang="ts">
import { MDMButton } from '@mdm/uikit'

definePageMeta({
  layout: 'default'
})
</script>

<template>
  <main class="flex items-center justify-center gap-32">
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
