import { defineConfig } from "@umijs/max";

export default defineConfig({
  base: './',
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
      component: "@/pages/Home",
    },
    {
      name: "工具",
      path: "/tools",
      component: "@/pages/tools",
    },
    {
      name: "权限演示",
      path: "/access",
      component: "@/pages/Access",
    },
    {
      name: " CRUD 示例",
      path: "/table",
      component: "@/pages/Table",
    },
  ],

  npmClient: "pnpm",
  mfsu: {
    esbuild: true,
  },
  tailwindcss: {},
});
