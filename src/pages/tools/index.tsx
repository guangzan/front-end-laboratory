import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'umi';
import {
  PictureOutlined,
  BgColorsOutlined,
  CodeOutlined,
} from '@ant-design/icons';

interface CardItem {
  title: string;
  desc: string;
  path: string;
  icon: any;
}

const toolList: Array<CardItem> = [
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
    title: '二维码生成',
    desc: '二维码生成',
    path: '/tools/qrcode-maker',
    icon: PictureOutlined,
  },
];

type CardTitleProps = {
  title: string;
  children: React.ReactNode;
};

const CardTitle: React.FC<CardTitleProps> = (props) => (
  <div className="flex items-center">
    {props.children}
    <span className="ml-2">{props.title}</span>
  </div>
);

const ToolCard: React.FC<{ toolData: CardItem }> = ({ toolData }) => (
  <Link to={toolData.path}>
    <Card
      title={<CardTitle title={toolData.title} children={<toolData.icon />} />}
      bordered={true}
    >
      {toolData.desc}
    </Card>
  </Link>
);

const Index: React.FC = () => {
  return (
    <>
      <Row gutter={[16, 16]}>
        {toolList.map((item) => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.title}>
            <ToolCard toolData={item}></ToolCard>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Index;
