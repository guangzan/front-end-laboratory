import { IRoute } from 'umi';

export const tools: Array<IRoute> = [
  {
    path: '/tools',
    component: '@/pages/tools/index',
    title: 'Lab · 在线工具',
  },
  {
    path: '/tools/colorPicker',
    component: '@/pages/tools/colorPicker/index',
    title: 'Lab · 调色板',
  },
  {
    path: '/tools/imgToBase64',
    component: '@/pages/tools/imgToBase64/index',
    title: 'Lab · 图片转 Base64',
  },
  {
    path: '/tools/formater',
    component: '@/pages/tools/formater/index',
    title: 'Lab · 代码格式化',
  },
  {
    path: '/tools/qrcode-maker',
    component: '@/pages/tools/qrcode-maker/index',
    title: 'Lab · 二维码生成',
  },
];
