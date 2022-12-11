import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    cors: false
  },
  plugins: [visualizer()]
});
