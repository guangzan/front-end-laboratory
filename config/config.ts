import { defineConfig } from 'umi';
import { routes } from './router';
import { theme } from './theme';

export default defineConfig({
  theme,
  routes,
  title: 'Lab',
  outputPath: 'dist',
  devtool: false,
  esbuild: {},
  dynamicImport: {
    loading: '@/components/Loading',
  },
  fastRefresh: {},
  mfsu: {},
  nodeModulesTransform: {
    type: 'none',
  },
  extraPostCSSPlugins: [
    require('tailwindcss')({
      config: './tailwind.config.ts',
    }),
  ],
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
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
  },
});
