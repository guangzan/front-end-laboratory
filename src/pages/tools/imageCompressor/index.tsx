import { useState } from 'react';
import { Upload, message, Button } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import imageCompression from 'browser-image-compression';

function getBase64(img: any, callback: any) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default function ImageCompressor() {
  const [imageUrl, setImageUrl] = useState('');

  function beforeUpload(file: any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 8;
    if (!isLt2M) {
      message.error('图片大小不能超过 8MB!');
    }
    return isJpgOrPng && isLt2M;
  }

  function handleChange(info: any) {
    getBase64(info.file.originFileObj, (imageUrl: any) => {
      setImageUrl(imageUrl);
    });
  }

  function handleDownload() {}

  function handleCompress() {
    // const options = {
    //   maxSizeMB: number,          // (default: Number.POSITIVE_INFINITY)
    //   maxWidthOrHeight: number,   // compressedFile will scale down by ratio to a point that width or height is smaller than maxWidthOrHeight (default: undefined)
    //                               // but, automatically reduce the size to smaller than the maximum Canvas size supported by each browser.
    //                               // Please check the Caveat part for details.
    //   onProgress: Function,       // optional, a function takes one progress argument (percentage from 0 to 100)
    //   useWebWorker: boolean,      // optional, use multi-thread web worker, fallback to run in main-thread (default: true)
    //   // following options are for advanced users
    //   maxIteration: number,       // optional, max number of iteration to compress the image (default: 10)
    //   exifOrientation: number,    // optional, see https://stackoverflow.com/a/32490603/10395024
    //   fileType: string,           // optional, fileType override
    //   initialQuality: number      // optional, initial quality value between 0 and 1 (default: 1)
    // }
    // imageCompression(file: File, options): Promise<File>
  }

  return (
    <div>
      <h1 className="text-red-400 text-center">图片压缩</h1>
      <Upload
        name="avatar"
        listType="picture-card"
        className="w-96"
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />
        ) : (
          <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
          </div>
        )}
      </Upload>
      <div className="flex">
        <Button onClick={handleCompress}>开始压缩</Button>
        <Button onClick={handleDownload}>下载图片</Button>
      </div>
    </div>
  );
}
