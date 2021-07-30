import { message } from 'antd';
import { useCopyToClipboard } from 'react-use';

interface IProps {
  color: string[];
  title?: string;
}

export default function Palette(props: IProps) {
  const [state, copyToClipboard] = useCopyToClipboard();

  function copy(color: string) {
    copyToClipboard(color);
    // TODO undefined
    // console.log(state.value);

    state.error
      ? message.error(state.error.message)
      : message.success(`${color} 已复制`);
  }

  return (
    <div className="m-8 max-w-3/4 <sm:(max-w-full m-4) bg-gray-50 p-4 rounded-lg shadow-lg">
      <div className="ml-4 w-full text-xl text-gray-400">{props.title}</div>
      {props.color.map((item, index) => (
        <div
          className="inline-block m-4 w-16 h-16 rounded-md shadow-lg cursor-pointer"
          key={index}
          style={{ background: item }}
          onClick={() => copy(item)}
        ></div>
      ))}
    </div>
  );
}
