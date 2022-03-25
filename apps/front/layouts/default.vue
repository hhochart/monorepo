<template>
  <div class="flex min-h-screen flex-col">
    <header class="flex bg-primary p-16 text-white">
      <div class="container flex items-center space-x-4">
        <NuxtLink to="/" class="font-mono text-3xl uppercase">
          Monorepo·
        </NuxtLink>
        <span class="text-sm"> Vue3 · Typescript · Tailwind · GraphQL </span>
      </div>
    </header>

    <div class="flex-grow bg-neutral-light">
      <div class="container p-32">
        <slot />
      </div>
    </div>

    <footer class="bg-primary p-8 text-white">
      <div class="container">
        <span class="font-mono text-xl uppercase">Monorepo·</span>
      </div>
    </footer>
  </div>
</template>
