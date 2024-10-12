import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // depending on your application, base can also be "/"
  base: "",
  plugins: [
    react(),
    viteTsconfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: false,
      workbox: {
        // cache normal assets and cdn.weatherapi.com images
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,json}",
          "cdn.weatherapi.com/**/*.{png}",
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  build: {
    // this sets the directory where the build will be output
    outDir: "build",
  },
  resolve: {
    alias: {
      src: "/src",
    },
  },
  server: {
    // this ensures that the browser opens upon server start
    open: true,
    // this sets a default port to 3000
    port: 3000,
  },
});
