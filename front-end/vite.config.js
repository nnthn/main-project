import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base:"main-project",
    server:{
	host: '192.168.1.6',
	port:3000,
    }
})