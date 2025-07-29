import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // this is important for correct asset paths on Render
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
