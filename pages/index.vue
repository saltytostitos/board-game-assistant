<template>
  <div class="grid grid-cols-1 mt-10">
    <ul role="list" class="space-y-3 w-lg mx-auto">
      <nuxt-link :to="game.page" v-for="game in games" :key="game.title"
        ><li class="bg-gray-700 px-4 py-4 shadow sm:rounded-md sm:px-6">
          <img :src="game.image" class="h-12 mx-auto" />
        </li>
      </nuxt-link>
    </ul>
  </div>
</template>

<script setup lang="ts">
const games = useGamesList;
</script>
