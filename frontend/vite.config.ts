import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const backendURL = "http://localhost:8000";
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/backend": {
        target: backendURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/backend/, ""),
      },
    },
  },
});
