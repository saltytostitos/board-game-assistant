<template>
  <div class="space-y-4">
    <Nav :games="games" />
    <slot />
  </div>
</template>

<script setup lang="ts">
const isDark = useDark({});
const toggleDark = useToggle(isDark);

const games = useGamesList;
</script>
