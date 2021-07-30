import { IRoute } from 'umi';

export const routes: Array<IRoute> = [
  {
    path: '/',
    component: '@/layouts/index/index',
    routes: [
      {
        path: '/',
        component: '@/pages/home/index',
        title: 'Lab · 首页',
      },
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
        title: 'Lab · 调色板',
      },
      {
        path: '/tools/formater',
        component: '@/pages/tools/formater/index',
        title: 'Lab · 代码格式化',
      },
      {
        path: '/posts',
        component: '@/pages/posts/index',
        title: 'Lab · 博客',
      },
      {
        path: '/projects',
        component: '@/pages/projects/index',
        title: 'Lab · 项目',
      },
      {
        path: '/software',
        component: '@/pages/software/index',
        title: 'Lab · 软件',
      },
    ],
  },
  { component: '@/pages/404', title: 'GZ · 404 ' },
];
