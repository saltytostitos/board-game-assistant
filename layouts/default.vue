<template>
  <div>
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li v-for="game in games" :key="game.title">
              <a><img :src="game.image" class="h-4" /></a>
            </li>
          </ul>
        </div>
        <NuxtLink class="btn btn-ghost normal-case text-xl" to="/"
          >Board Game Assistant</NuxtLink
        >
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <NuxtLink
            as="li"
            :to="game.page"
            v-for="game in games"
            :key="`nav${game.title}`"
          >
            <a><img :src="game.image" class="h-5" /></a>
          </NuxtLink>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn" @click="toggleDark()"><LazyIconsDarkMode /></a>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
const isDark = useDark({
  onChanged(isDark) {
    if (process.client) {
      if (isDark)
        document.documentElement.setAttribute("data-theme", "halloween");
      else document.documentElement.setAttribute("data-theme", "bumblebee");
    }
  }
});
const toggleDark = useToggle(isDark);

const games = useGamesList;
</script>
