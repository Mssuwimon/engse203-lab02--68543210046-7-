import { defineConfig } from "vite";

const repositoryName = "engse203-lab02--68543210046-7-";

export default defineConfig({
  base: `/${repositoryName}/`,
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});