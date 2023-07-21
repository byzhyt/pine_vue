import { defineConfig } from 'vite';
import plugins from './plugin';
import proxy from './proxy';
import { resolve } from 'path';
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', 'vue', 'scss']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/scss/variables.scss';`
      }
    }
  },
  plugins,
  preview: {
    port: 9230,
    proxy
  },
  server: {
    strictPort: true,
    port: 1030,
    proxy
  },
  build: {
    manifest: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      },
      format: {
        comments: true
      }
    }
  }
});
