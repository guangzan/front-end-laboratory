import {
  PictureOutlined,
  BgColorsOutlined,
  CodeOutlined,
} from '@ant-design/icons';

export interface CardItem {
  title: string;
  desc: string;
  path: string;
  icon: any;
}

export const toolList: Array<CardItem> = [
  {
    title: '调色板',
    desc: '中性色板',
    path: '/tools/colorPicker',
    icon: BgColorsOutlined,
  },
  {
    title: '代码格式化',
    desc: 'CSS、JavaScript 代码格式化',
    path: '/tools/formater',
    icon: CodeOutlined,
  },
  {
    title: '图片转 Base64',
    desc: '将图片转换为 Base64 编码',
    path: '/tools/imgToBase64',
    icon: PictureOutlined,
  },
  {
    title: '头像生成',
    desc: '生成不同风格的头像',
    path: '/tools/avatarBuilder',
    icon: PictureOutlined,
  },
  {
    title: 'Markdown 编辑器',
    desc: '在线 Markdown 编辑器',
    path: '/tools/markdown',
    icon: PictureOutlined,
  },
  {
    title: '图片压缩',
    desc: '在线图片压缩',
    path: '/tools/imageCompressor',
    icon: PictureOutlined,
  },
  {
    title: '二维码生成器',
    desc: '在线图片压缩',
    path: '/tools/qrcode',
    icon: PictureOutlined,
  },
];
