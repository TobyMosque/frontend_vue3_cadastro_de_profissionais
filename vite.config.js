import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/frontend_vue3_cadastro_de_profissionais/dist/",
  plugins: [vue()],
})
