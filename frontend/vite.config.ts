import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const REACT_APP_BACKEND_URL = process.env.VITE_REACT_APP_BACKEND_URL;
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/backend": {
        target: REACT_APP_BACKEND_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, ""),
      },
    },
  },
});
