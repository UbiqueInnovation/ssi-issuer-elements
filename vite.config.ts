import { isAbsolute, resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

function isExternal(id: string) {
  return !id.startsWith(".") && !isAbsolute(id);
}

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
      external: isExternal,
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [dts()],
});
