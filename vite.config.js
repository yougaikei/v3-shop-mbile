import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 调取 path 中的 resolve 方法, 用于拼接绝对路径
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias:[
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  server: {
    host: '0.0.0.0'
  }
})
