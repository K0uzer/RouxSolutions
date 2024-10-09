import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
    server: {
        port: 3000,
    },
    css: {
        devSourcemap: true,
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src'),
        },
    },
})
