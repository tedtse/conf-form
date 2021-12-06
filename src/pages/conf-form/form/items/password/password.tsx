import React from 'react';
import { ProFormText } from '@ant-design/pro-form';

import type { ProFormItemProps } from '@ant-design/pro-form';

const PwdFormItem: React.FC = (props: ProFormItemProps) => {
  return (
    <ProFormText.Password
      {...props}
      label="密码"
      name="pwd"
      rules={[{ required: true, message: '请输入密码' }]}
    />
  );
};

export default PwdFormItem;
