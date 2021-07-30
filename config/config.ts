import { defineConfig } from 'umi';
import { routes } from './router';
import { theme } from './theme';

export default defineConfig({
  theme,
  routes,
  title: 'Lab',
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
