import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['src\\assets\\Realisatiedocument - steff dierckx.zip'],
  // Relative asset URLs work for both the repository Pages URL and the custom domain.
  base: './',
})
