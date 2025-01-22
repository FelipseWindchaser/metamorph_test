// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    rootAttrs: {
      class: "main",
    },
  },

  components: [
    {
      path: "src/components",
      pathPrefix: false,
    },
    {
      path: "src/pages",
      pathPrefix: false,
    },
  ],

  alias: {
    "@src": resolve(projectRootDir, "src/"),
    "@img": resolve(projectRootDir, "static/img"),
    "@style": resolve(projectRootDir, "static/css"),
  },
});
