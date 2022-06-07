import { QRCodeSVG } from 'qrcode.react';
import { Empty, Row, Col, Input, Button } from 'antd';
import { useState } from 'react';
import { func } from '@umijs/deps/compiled/@hapi/joi';

export default function QrcodeMaker() {
  const [inputValue, setInputValue] = useState('');
  const [qrcodeValue, setQrcodeValue] = useState('');

  function handleTextAreaChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setInputValue(e.currentTarget.value);
  }

  function makeQrcode() {
    setQrcodeValue(inputValue);
  }

  return (
    <div className="w-3/4 mx-auto">
      <Row>
        <Col span={12} className="text-center">
          {qrcodeValue.length ? (
            <QRCodeSVG value={qrcodeValue} />
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </Col>
        <Col span={12}>
          <Input.TextArea
            allowClear
            showCount
            rows={6}
            placeholder="请输入链接"
            maxLength={300}
            onChange={handleTextAreaChange}
            onPressEnter={makeQrcode}
          />
          <Button
            className="mt-2"
            type="primary"
            block
            size="large"
            onClick={makeQrcode}
            disabled={!inputValue.length}
          >
            生成二维码
          </Button>
        </Col>
      </Row>
    </div>
  );
}
