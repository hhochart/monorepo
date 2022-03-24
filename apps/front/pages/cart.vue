<script setup lang="ts">
import { MDMTitle } from '@mdm/uikit'
import CartItemsGrid from '@/components/cart/cartItemsGrid/CartItemsGrid.vue'
</script>

<template>
  <main class="bg-neutral-light">
    <div class="container space-y-32 p-32">
      <MDMTitle>Cart page</MDMTitle>
      <CartItemsGrid />
    </div>
  </main>
</template>
