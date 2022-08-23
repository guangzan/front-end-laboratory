import { defineConfig } from '@umijs/max';

export default defineConfig({
  base: './',
  publicPath: './',
  outputPath: 'dist',
  devtool: false,
  fastRefresh: true,
  npmClient: 'pnpm',

  antd: {
    dark: true,
  },

  apiRoute: {
    platform: 'vercel',
  },

  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
  },

  scripts:
    process.env.NODE_ENV === 'development'
      ? [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.development.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.development.js',
        ]
      : [
          'https://gw.alipayobjects.com/os/lib/react/16.13.1/umd/react.production.min.js',
          'https://gw.alipayobjects.com/os/lib/react-dom/16.13.1/umd/react-dom.production.min.js',
        ],

  access: {},

  model: {},

  initialState: {},

  request: {},

  layout: {
    title: 'FE Labs',
  },

  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: '@/pages/Home',
    },
    {
      name: '工具',
      path: '/tools',
      component: '@/pages/tools',
    },
    {
      name: '权限演示',
      path: '/access',
      component: '@/pages/Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: '@/pages/Table',
    },
  ],

  mfsu: {
    esbuild: true,
  },

  tailwindcss: {},

  targets: {
    chrome: 87,
  },
});
