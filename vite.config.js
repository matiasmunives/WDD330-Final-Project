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
        add_rooms: resolve(__dirname, "src/rooms/addRooms.html"),
        properties: resolve(__dirname, "src/properties/index.html"),
        inventory: resolve(__dirname, "src/inventory/index.html"),
        add_inventory: resolve(__dirname, "src/inventory/addItems.html"),
        header: resolve(__dirname, "src/partials/header.html"),
        footer: resolve(__dirname, "src/partials/footer.html"),
        login: resolve(__dirname, "src/login/index.html"),
        account: resolve(__dirname, "src/account/index.html"),
        add_account: resolve(__dirname, "src/account/addAccount.html"),
      },
    },
  },
});
