<script setup lang="ts">
import { MDMCard, MDMItemList } from '@mdm/uikit'
import { computed } from 'vue'
import { useCartItemsGridQuery } from './CartItemsGrid.generated'
import { formatPrice } from '@/components/cart/utils/formatPrice'
import CartItemCard from '@/components/cart/cartItemCard/CartItemCard.vue'

const { result, loading } = useCartItemsGridQuery()

const cartItems = computed(() => result.value?.cart.items)
const total = computed(() => result.value?.cart.total)
</script>

<template>
  <MDMCard :elevated="true" class="grid bg-white">
    <template #header>
      <span class="font-semibold">Vendu et expédié par Maisons du Monde</span>
    </template>
    <MDMItemList>
      <div v-if="loading">Loading ...</div>

      <CartItemCard
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :cart-item="cartItem"
      />
    </MDMItemList>

    <template #footer>
      <div class="mt-32 flex justify-end text-xl font-semibold">
        Total: {{ formatPrice(total) }}
      </div>
    </template>
  </MDMCard>
</template>
