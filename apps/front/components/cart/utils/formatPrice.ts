export function formatPrice(number: number) {
  return new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'EUR'
  }).format(number)
}
