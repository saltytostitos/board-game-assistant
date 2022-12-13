// https://nuxt.com/docs/api/configuration/nuxt-config
import presetAttributify from "@unocss/preset-attributify";
import presetUno from "@unocss/preset-uno";

export default defineNuxtConfig({
  telemetry: false,
  experimental: {
    payloadExtraction: true,
    reactivityTransform: true
  },
  css: ["@/assets/css/css.css"],
  modules: ["@vueuse/nuxt", "@unocss/nuxt"],
  unocss: {
    presets: [presetAttributify, presetUno()],
    shortcuts: [
      {
        btn: "inline-flex items-center rounded-md border border-transparent bg-teal-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      },
      [
        /^btn-(.*)$/,
        ([, c]) =>
          `inline-flex items-center rounded-md border border-transparent bg-${c}-600 px-6 py-3 font-medium text-white shadow-sm hover:bg-${c}-700 focus:outline-none focus:ring-2 focus:ring-${c}-500 focus:ring-offset-2`
      ]
    ]
  }
});
