import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'umi';
import { toolList, CardItem } from './list';

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
