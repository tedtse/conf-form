import React, { useContext } from 'react';
import { ProFormText } from '@ant-design/pro-form';
import FormContext from '../../context';

import type { ProFormItemProps } from '@ant-design/pro-form';

const PwdConfirmFormItem: React.FC = (props: ProFormItemProps) => {
  const { formRef } = useContext(FormContext);
  return (
    <ProFormText.Password
      {...props}
      label="确认密码"
      name="pwd_confirm"
      validateTrigger="onBlur"
      rules={[
        { required: true, message: '请输入密码' },
        {
          validator: (rule, value) => {
            const pwdValue = formRef?.current?.getFieldValue('pwd');
            if (value !== pwdValue) {
              return Promise.reject('Something wrong!');
            }
            return Promise.resolve();
          },
        },
      ]}
    />
  );
};

export default PwdConfirmFormItem;
