import React, { useRef } from 'react';
import { Space } from 'antd';
import ConfForm from './form';

import type { ProFormInstance } from '@ant-design/pro-form';

const ConfFormDemo: React.FC = () => {
  const formRef = useRef<ProFormInstance>();

  return (
    <ConfForm
      formRef={formRef}
      layout="horizontal"
      labelCol={{
        span: 4,
      }}
      submitter={{
        render: (_, dom) => (
          <div style={{ textAlign: 'right' }}>
            <Space>{dom}</Space>
          </div>
        ),
      }}
      formItems={[
        {
          key: 'name',
          props: { fieldProps: { allowClear: false } },
        },
        // 'pwd',
        // 'pwdConfirm',
        'source',
        'target',
      ]}
    />
  );
};

export default ConfFormDemo;
