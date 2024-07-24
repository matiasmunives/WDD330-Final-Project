import { resolve } from "path";
import { defineConfig } from "vite";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        temples: resolve(__dirname, "src/temples/index.html"),
        rooms: resolve(__dirname, "src/rooms/index.html"),
        properties: resolve(__dirname, "src/properties/index.html"),
        items: resolve(__dirname, "src/items/index.html"),
        header: resolve(__dirname, "src/partials/header.html"),
        footer: resolve(__dirname, "src/partials/footer.html"),
        login: resolve(__dirname, "src/login/index.html"),
      },
    },
  },
});
