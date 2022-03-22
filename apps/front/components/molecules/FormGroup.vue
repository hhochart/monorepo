<template>
  <div class="test" @click="test">
    Form group test
  </div>
</template>

<script setup lang="ts">
function test () {
  alert('test called')
}
</script>
