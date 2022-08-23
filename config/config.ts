import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {
    dark: true,
  },
  apiRoute: {
    platform: 'vercel'
  },

  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "FE Labs",
  },

  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      name: "首页",
      path: "/home",
      component: "./Home",
    },
    {
      name: "工具",
      path: "/tools",
      component: "./tools",
    },
    {
      name: "权限演示",
      path: "/access",
      component: "./Access",
    },
    {
      name: " CRUD 示例",
      path: "/table",
      component: "./Table",
    },
  ],

  npmClient: "pnpm",
  mfsu: {
    esbuild: true,
  },
  tailwindcss: {},
});
