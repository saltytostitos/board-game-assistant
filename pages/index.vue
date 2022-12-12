<template>
  <div class="grid grid-cols-1 mt-10">
    <nuxt-link
      :to="game.page"
      class="card w-96 bg-neutral-content shadow-xl image-full mx-auto"
      v-for="game in games"
      :key="`cards${game.title}`"
    >
      <div class="card-body">
        <h2><img :src="game.image" class="h-10" /></h2>
        <p></p>
        <div class="card-actions justify-end">
          <!-- <button class="btn btn-primary">Card Draw</button> -->
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
const games = useGamesList;
</script>
