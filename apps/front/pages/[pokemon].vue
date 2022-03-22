<template>
  <div>
    <MDMTitle>Pokemon page</MDMTitle>

    <MDMContent>Visiting : {{ route.params.pokemon }} page</MDMContent>
  </div>
</template>

<script setup lang="ts">
import { MDMTitle, MDMContent } from '@mdm/uikit'
const route = useRoute()
</script>
