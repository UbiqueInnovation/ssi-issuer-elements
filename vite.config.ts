import { isAbsolute, resolve } from "path";
import { defineConfig } from "vite";

function isExternal(id: string) {
  return !id.startsWith(".") && !isAbsolute(id);
}

type LibTypes = "transfer-proof" | "react";

const LIB: LibTypes = (process.env.LIB as LibTypes) ?? "react";

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
    },
  },
});
