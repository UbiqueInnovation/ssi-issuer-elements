import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

type LibTypes = "main" | "transfer-proof" | "react";

const LIB: LibTypes = (process.env.LIB as LibTypes) ?? "main";

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: true,
    emptyOutDir: false,
    lib: {
      fileName: LIB,
      entry: resolve(__dirname, `lib/${LIB}.ts`),
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  plugins: [react(), dts()],
});
