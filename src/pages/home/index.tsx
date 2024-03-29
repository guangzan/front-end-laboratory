import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <p className='text-blue-500'>test</p>
      <div className={styles.container}>
        {name}
      </div>
    </PageContainer>
  );
};

export default HomePage;
