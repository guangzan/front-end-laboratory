import { BackTop } from 'antd';
import { paletteDataList } from './paletteDataList';
import Palette from './palette';

export default function () {
  return (
    <div className="flex flex-col items-center my-0 mx-auto pt-8 min-h-full bg-gray-200 rounded-lg">
      <div className="m-4 text-gray-400 text-4xl">中性色版</div>
      {paletteDataList.map((item) => (
        <Palette
          v-for="item in paletteDataList"
          key={item.title}
          title={item.title}
          color={item.color}
        />
      ))}
      <BackTop style={{ right: '40px' }} />
    </div>
  );
}
