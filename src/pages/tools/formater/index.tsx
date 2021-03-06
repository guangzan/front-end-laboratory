import { useState } from 'react';
import { useCopyToClipboard } from 'react-use';
import CleanCSS from 'clean-css';
import type { Output } from 'clean-css';
import { CopyOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Row, Col, Space, Input, message, Radio, Empty } from 'antd';

type LanguagesType = 'CSS' | 'JavaScript';
type ActionsType = 'compress' | 'format';

interface CSSActions {
  compress: (strings: string) => Output;
  format: (strings: string) => Output;
}

interface JavaScriptActions {
  compress: (strings: string) => void;
  format: (strings: string) => void;
}

interface ActionsMap {
  CSS: CSSActions;
  JavaScript: JavaScriptActions;
}

const actionsMap: ActionsMap = {
  CSS: {
    compress(strings: string): Output {
      return new CleanCSS().minify(strings);
    },
    format(strings: string): Output {
      return new CleanCSS({
        format: 'beautify',
      }).minify(strings);
    },
  },
  JavaScript: {
    compress(strings: string) {
      return strings;
    },
    format(strings: string) {
      return strings;
    },
  },
};

function CopyButton({ code }: { code: string }) {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  function copyCode() {
    copyToClipboard(code);

    if (state.error) {
      message.error(state.error.message);
    } else {
      message.success(`ε€εΆζε`);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    }
  }

  return (
    <div className="absolute top-3 right-4 cursor-pointer">
      {copied ? (
        <CheckOutlined style={{ color: 'green' }} />
      ) : (
        <CopyOutlined onClick={copyCode} />
      )}
    </div>
  );
}

function RenderCode({ code }: { code: string }) {
  return (
    <div className="relative  w-full h-full">
      <div
        className={[
          'w-full h-full border-2  border-solid rounded-lg p-2 border-gray-300 whitespace-pre',
          code !== '' && 'border-indigo-600',
        ].join(' ')}
      >
        {code}
      </div>
      {code === '' && (
        <div className="absolute top-0 flex justify-center items-center w-full h-full ">
          <Empty></Empty>
        </div>
      )}
      {code !== '' && <CopyButton code={code} />}
    </div>
  );
}

export default function () {
  const [action, setAction] = useState<ActionsType>('compress');
  const [language, setLanguage] = useState<LanguagesType>('CSS');
  const [codeString, setCodeString] = useState('');
  const [handledStrings, setHandledStrings] = useState('');

  function handleStart() {
    const strings = codeString;
    const languageMap = actionsMap[language];
    const { styles } = languageMap[action](strings) as Output;

    setHandledStrings(styles);
    message.success('θ½¬ζ’ζε');
  }

  return (
    <Row gutter={16} style={{ marginTop: '.5rem' }}>
      <Col span={9}>
        <div className="relative h-full w-full">
          <Input.TextArea
            style={{ borderRadius: '0.5rem' }}
            placeholder="θ―·θΎε₯δ»£η "
            rows={16}
            value={codeString}
            onChange={(v) => setCodeString(v.currentTarget.value)}
          />
          {codeString != '' && (
            <div className="absolute top-3 right-4">
              <CloseOutlined
                style={{ color: 'red' }}
                onClick={() => setCodeString('')}
              />
            </div>
          )}
        </div>
      </Col>

      <Col span={9}>
        <RenderCode code={handledStrings} />
      </Col>

      <Col span={6}>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Radio.Group
              defaultValue="CSS"
              buttonStyle="solid"
              onChange={(e) => setLanguage(e.target.value)}
            >
              <Radio.Button value="CSS">CSS</Radio.Button>
              <Radio.Button value="JavaScript" disabled>
                JavaScript
              </Radio.Button>
            </Radio.Group>
          </Col>
          <Col span={24}>
            <Space style={{ width: '100%' }} align="end">
              <Radio.Group
                defaultValue="compress"
                buttonStyle="solid"
                onChange={(e) => setAction(e.target.value)}
              >
                <Radio.Button value="compress">εηΌ©</Radio.Button>
                <Radio.Button value="format">ζ ΌεΌε</Radio.Button>
              </Radio.Group>
            </Space>
          </Col>
          <Col span={24}>
            <Button onClick={handleStart} type="primary" block>
              εΌε§ε€η
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
