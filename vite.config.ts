import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react-mobx-ts",
  resolve: {
    alias: {
      components: '/src/components',
      assets: '/src/assets',
      model: '/src/model',
      stores: '/src/stores',
      api: '/src/api',
    }
  }
})
