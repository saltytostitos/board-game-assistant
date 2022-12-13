<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import "@unocss/reset/tailwind.css";
import "uno.css";
</script>
<style>
html.dark {
  color-scheme: dark;
}
</style>
