import React from 'react';
import request from 'umi-request';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Three: React.FC = () => {
  const handleUpload = async ({ file, onSuccess, onError }: any) => {
    const form = new FormData();
    form.append('file', file);
    request
      .post('http://yapi.smart-xwork.cn/mock/66005/upload', {
        data: form,
      })
      .then((res) => {
        console.log(res);
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
        onError();
      });
  };

  return (
    <Upload customRequest={handleUpload}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};

export default Three;
