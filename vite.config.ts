import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  return {
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      proxy: {
        '/api/apod': {
          target: 'https://api.nasa.gov',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api\/apod/, '/planetary/apod'),
          configure: proxy => {
            proxy.on('proxyReq', proxyReq => {
              const url = new URL(proxyReq.path, 'https://api.nasa.gov')
              url.searchParams.set('api_key', env.VITE_API_KEY)
              proxyReq.path = url.pathname + url.search
            })
          },
        },

        '/api/mars': {
          target: 'https://mars.nasa.gov',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api\/mars/, '/rss/api/'),
          configure: proxy => {
            proxy.on('proxyReq', proxyReq => {
              const url = new URL(proxyReq.path, 'https://mars.nasa.gov')
              url.searchParams.set('api_key', env.VITE_API_KEY)
              proxyReq.path = url.pathname + url.search
            })
          },
        },
      },
    },
  }
})
