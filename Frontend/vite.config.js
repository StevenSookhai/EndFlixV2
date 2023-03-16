import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// const { createProxyMiddleware } = require("http-proxy-middleware");

// module.exports = {
//   server: {
//     middleware: createProxyMiddleware("/api", {
//       target: "http://localhost:5000", // Change this to your backend API URL
//       changeOrigin: true,
//       secure: false,
//       cookieDomainRewrite: "localhost", // Change this to your cookie domain
//     }),
//   },
// };
