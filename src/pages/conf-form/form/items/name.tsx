import React from 'react';
import { ProFormText } from '@ant-design/pro-form';

import type { ProFormItemProps } from '@ant-design/pro-form';

const NameFormItem: React.FC = (props: ProFormItemProps) => {
  return (
    <ProFormText
      {...props}
      label="名称"
      name="name"
      rules={[{ required: true, message: '请输入名称' }]}
    />
  );
};

export default NameFormItem;
