<template>
  <div class="grid grid-cols-1 gap-y-4">
    <div class="w-full flex justify-center px-4">
      <button
        v-if="currentCard"
        class="btn btn-primary btn-block hover:btn-outline"
        @click="increment()"
      >
        Draw
      </button>
    </div>
    <LazySorryCard v-if="currentCard" :card="currentCard" />
    <div v-else class="w-full grid grid-cols-1 px-4">
      <h1 class="text-xl text-center">You are out of cards!</h1>
      <button class="btn btn-error btn-lg" @click="reshuffle()">
        Reshuffle
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { SorryDeck } from "~/types/types";
// const deck = computed(() => {
//   return sorryDeck();
// });
const { data: deck, refresh } = await useAsyncData(async () => {
  return (await useShuffle(sorryDeck())) as SorryDeck[];
});
const index = ref(0);
const currentCard = computed(() => {
  if (deck.value) {
    if (index.value <= deck.value.length) return deck.value[index.value];
  }
});
const increment = () => {
  if (index.value <= deck.value.length - 1) index.value++;
};
const reshuffle = () => {
  refresh();
  index.value = 0;
};
</script>

<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
