import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },
  nitro: {
    preset: process.env.NITRO_PRESET || "vercel",
  },
});
