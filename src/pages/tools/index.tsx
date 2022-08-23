import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Anchor } from 'antd';
import style from './style/index.css'

export default function ToolsPage() {
  const { Link } = Anchor

  return (
    <PageContainer
      ghost
      header={{
        title: '工具',
      }}
    >
      <ProCard style={{ marginTop: 8 }} gutter={[16, 16]} wrap title="换行">
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
          Col
        </ProCard>
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
          Col
        </ProCard>
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
          Col
        </ProCard>
        <ProCard colSpan={{ xs: 24, sm: 12, md: 12, lg: 12, xl: 12 }} layout="center" bordered>
          Col
        </ProCard>
      </ProCard>


      <Anchor className={style.anchor}>
        <Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
        <Link href="#API" title="API">
          <Link href="#Anchor-Props" title="Anchor Props" />
          <Link href="#Link-Props" title="Link Props" />
        </Link>
      </Anchor>
    </PageContainer>
  );
}
