import { defineConfig } from "tsup";

export default defineConfig({
  entry: {"oraksoft-ui":"src/index.ts"},
  clean: true,
  format: ["esm"],
  d: true,
  minify:false,
  minifyIdentifiers:false
});
