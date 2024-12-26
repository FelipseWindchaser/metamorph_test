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
      path: "src/content",
      pathPrefix: false,
    },
  ],

  alias: {
    "@src": resolve(projectRootDir, "src/"),
    "@img": resolve(projectRootDir, "static/img"),
    "@style": resolve(projectRootDir, "static/css"),
  },

  runtimeConfig: {
    strapi: {
      url: process.env.BASE_URL || "http://localhost:1337",
    },
    public: {
      apiToken: process.env.STRAPI_TOKEN || "",
      baseURL: process.env.BASE_URL || "",
      strapi: {
        url: process.env.BASE_URL || "http://localhost:1337",
      },
    },
  },

  modules: ["@nuxtjs/strapi"],
  strapi: {
    url: process.env.BASE_URL || "http://localhost:1337",
    prefix: "/api",
    admin: "/admin",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
});
