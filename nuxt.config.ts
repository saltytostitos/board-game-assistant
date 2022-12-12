// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  experimental: {
    payloadExtraction: true,
    reactivityTransform: true
  },
  modules: ["@vueuse/nuxt"],
  css: ["@/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
