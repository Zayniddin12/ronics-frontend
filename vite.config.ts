import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import generateSitemap from 'vite-ssg-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/',
    plugins: [vue(), eslintPlugin()],
    ssgOptions: {
        onFinished() {
            generateSitemap({
                exclude: [
                    '/',
                    '/company',
                    '/blog',
                    '/blog/:slug',
                    '/vacancy',
                    '/vacancy/:slug',
                    '/brief',
                    '/gallery',
                    '/gallery/:slug',
                ],
            })
        },
    },
    build: {
        minify: true,
        cssCodeSplit: true,
        manifest: true,
        target: 'esnext',
        sourcemap: true,
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
})
