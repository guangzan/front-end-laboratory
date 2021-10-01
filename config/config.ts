import { defineConfig } from 'umi';
import { routes } from './router';
import { theme } from './theme';

const __DEV__ = process.env.NODE_ENV === 'development';

export default defineConfig({
  theme,
  routes,
  title: 'Lab',
  base: __DEV__ ? '/' : '/acnb-docs/',
  publicPath: __DEV__ ? '/' : '/acnb-docs/',
  outputPath: 'dist',
  dynamicImport: {},
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
});
