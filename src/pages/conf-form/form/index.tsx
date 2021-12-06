import React, { useRef, useImperativeHandle } from 'react';
import ProForm from '@ant-design/pro-form';
import { Form } from 'antd';
import { itemMaps } from './items';
import FormContext from './context';

import type { FormInstance } from 'antd';
import type { ProFormProps } from '@ant-design/pro-form';
import type { itemMapsKey } from './items';

export type confItemKey =
  | itemMapsKey
  | {
      key: itemMapsKey;
      props: Record<string, any>;
    };

export type ConfFormProps = ProFormProps & {
  formItems?: confItemKey[];
};

const ConfForm: React.FC<ConfFormProps> = ({ formItems, ...formProps }) => {
  const [form] = Form.useForm();
  const { form: userForm, formRef: propsFormRef } = formProps;
  const formRef = useRef<FormInstance>(userForm || form);
  useImperativeHandle(propsFormRef, () => ({
    ...formRef.current,
  }));
  return (
    <FormContext.Provider value={{ formRef }}>
      <ProForm {...formProps} form={userForm || form} formRef={formRef}>
        {formItems?.map((el) => {
          let _key: itemMapsKey;
          let _props: Record<string, any>;
          if (typeof el === 'object') {
            const { key, props } = el as { key: itemMapsKey; props: Record<string, any> };
            _key = key;
            _props = props;
          } else {
            _key = el;
            _props = {};
          }
          const DynamicFormItem = itemMaps[_key];
          return <DynamicFormItem key={_key} {..._props} />;
        })}
      </ProForm>
    </FormContext.Provider>
  );
};

export default ConfForm;
