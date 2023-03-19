import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            '/wisey': {
                target: 'https://api.wisey.app',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/wisey/, ''),
            },
            '/video': {
                target: 'https://wisey.app',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/video/, ''),
            },
        },
        host: true,
        port: 4308,
    },
    plugins: [react()],
    resolve: {
        alias: {
            components: 'src/components',
            app: 'src/app',
            assets: 'src/assets',
            utils: 'src/utils',
            pages: 'src/pages',
        },
    },
})
