<script setup lang="ts">
import { MDMCard, MDMTitle } from '@mdm/uikit'
import { CartItemCardFragment } from './CartItemCard.generated'
import { CartItemStatus } from '~/__generated__/graphqlOperations'
import { formatPrice } from '@/components/cart/utils/formatPrice'

type Props = {
  cartItem: CartItemCardFragment
}

const props = defineProps<Props>()
const statusClass = computed(() => {
  switch (props.cartItem.status) {
    case CartItemStatus.Disponible:
      return 'text-success'

    case CartItemStatus.SoldOut:
      return 'text-error'

    default:
      return 'text-error'
  }
})

const contentContainerClass = computed(() =>
  props.cartItem.status === CartItemStatus.SoldOut ? 'opacity-50' : ''
)
</script>

<template>
  <MDMCard :elevated="false">
    <div class="flex gap-16" :class="[contentContainerClass]">
      <div class="w-112 shrink-0">
        <img :src="props.cartItem.image" alt="" />
      </div>
      <div class="flex flex-grow flex-col justify-between">
        <MDMTitle tag="h4" class="font-bold">
          {{ props.cartItem.title }}
        </MDMTitle>

        <div class="space-between flex w-full">
          <div class="mt-4 space-y-4">
            <p class="text-xs underline">{{ props.cartItem.description }}</p>
            <p :class="statusClass" class="text-sm font-semibold lowercase">
              {{ props.cartItem.status }}
            </p>
          </div>

          <div class="ml-auto self-end">
            <p class="text-sm font-semibold">
              {{ formatPrice(props.cartItem.price) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </MDMCard>
</template>
