import { IRoute } from 'umi';

export const tools: IRoute[] = [
  {
    path: '/tools',
    component: '@/pages/tools/index',
    title: 'Lab · 在线工具',
  },
  {
    path: '/tools/colorPicker',
    component: '@/pages/tools/colorPicker/index',
    title: 'Lab · 颜色选择器',
  },
  {
    path: '/tools/imgToBase64',
    component: '@/pages/tools/imgToBase64/index',
    title: 'Lab · 图片转Base64',
  },
  {
    path: '/tools/formater',
    component: '@/pages/tools/formater/index',
    title: 'Lab · 代码格式化',
  },
  {
    path: '/tools/markdown',
    component: '@/pages/tools/markdown/index',
    title: 'Lab · Markdown',
  },
  {
    path: '/tools/imageCompressor',
    component: '@/pages/tools/imageCompressor/index',
    title: 'Lab · 图片压缩',
  },
  {
    path: '/tools/qrcode',
    component: '@/pages/tools/qrcode/index',
    title: 'Lab · 二维码生成器',
  },
];
