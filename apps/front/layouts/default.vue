<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex bg-primary p-16 text-white">
      <div class="container flex items-center space-x-4">
        <NuxtLink to="/" class="font-mono text-xl uppercase">
          Monorepo·
        </NuxtLink>
        <span class="text-sm"> Vue3 · Typescript · Tailwind · GraphQL </span>
      </div>
    </header>

    <div class="container p-16 flex-grow">
      <slot />
    </div>

    <footer class="bg-primary text-white p-8">
      <div class="container">
        <span class="font-mono text-xl uppercase">Monorepo·</span>
      </div>
    </footer>
  </div>
</template>
