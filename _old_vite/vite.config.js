// Vite configuration for production build
export default {
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
}