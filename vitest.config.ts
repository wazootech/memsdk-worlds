import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    alias: {
      "@memsdk-worlds": fileURLToPath(new URL("./src/index.ts", import.meta.url)),
    },
    include: ["test/**/*.test.ts"],
  },
})
