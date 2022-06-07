import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'umi';
import {
  PictureOutlined,
  BgColorsOutlined,
  CodeOutlined,
  ProfileOutlined,
  QrcodeOutlined,
} from '@ant-design/icons';

interface Tool {
  title: string;
  desc: string;
  path: string;
  icon: any;
  type: 'native' | 'iframe';
}

interface ToolListItem {
  classification: string;
  tools: Tool[];
}

const toolDataList: ToolListItem[] = [
  {
    classification: '开发工具',
    tools: [
      {
        title: '调色板',
        desc: '中性色板',
        path: '/tools/colorPicker',
        icon: BgColorsOutlined,
        type: 'native',
      },
      {
        title: '代码格式化',
        desc: 'CSS、JavaScript 代码格式化',
        path: '/tools/formater',
        icon: CodeOutlined,
        type: 'native',
      },
      {
        title: '图片转 Base64',
        desc: '将图片转换为 Base64 编码',
        path: '/tools/imgToBase64',
        icon: PictureOutlined,
        type: 'native',
      },
      {
        title: '头像生成',
        desc: '生成不同风格的头像',
        path: '/tools/avatarBuilder',
        icon: ProfileOutlined,
        type: 'native',
      },
      {
        title: '二维码生成',
        desc: '把链接或一段文本制作成二维码',
        path: '/tools/qrcode-maker',
        icon: QrcodeOutlined,
        type: 'native',
      },
    ],
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

const ToolCard: React.FC<{ toolData: Tool }> = ({ toolData }) => (
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
      {toolDataList.map((toolData) => (
        <div>
          <h1>{toolData.classification}</h1>
          <Row gutter={[16, 16]}>
            {toolData.tools.map((tool) => (
              <Col xs={24} sm={12} md={8} lg={6} key={tool.title}>
                <ToolCard toolData={tool}></ToolCard>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </>
  );
};

export default Index;
