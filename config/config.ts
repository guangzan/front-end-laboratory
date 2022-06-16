import { defineConfig } from 'umi';
import { routes } from './router';
import { theme } from './theme';

export default defineConfig({
  theme,
  routes,
  title: 'Lab',
  outputPath: 'dist',
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
});
