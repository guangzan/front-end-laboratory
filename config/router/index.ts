import { IRoute } from 'umi';
import { tools } from './tools';

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
      ...tools,
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
