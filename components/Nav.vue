<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div>
    <!-- Mobile -->
    <div class="sm:hidden">
      <label for="games" class="sr-only">Select a Game</label>
      <select
        id="games"
        name="games"
        class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
      >
        <option
          v-for="game in games"
          :key="game.title"
          :selected="currentGame === `/${game.page}`"
        >
          {{ game.image }}
        </option>
      </select>
    </div>
    <!-- Desktop -->
    <div class="hidden sm:block">
      <div class="border-b border-gray-200 dark:border-gray-700">
        <nav class="-mb-px flex space-x-8 justify-center" aria-label="Games">
          <a
            v-for="game in games"
            :key="game.title"
            href="#"
            :class="[
              currentGame === `/${game.page}`
                ? 'border-teal-500 text-teal-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200',
              'whitespace-nowrap flex py-2 px-1 border-b-2 font-medium text-sm'
            ]"
            :aria-current="currentGame === `/${game.page}` ? 'page' : undefined"
          >
            <img :src="game.image" class="h-4" />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["games"]);
const currentGame = useRoute().path;
</script>
