import React from 'react';
import { ProFormSelect } from '@ant-design/pro-form';
import emitter from './emitter';

const Source: React.FC = () => {
  return (
    <ProFormSelect
      label="级联源"
      name="source"
      options={['a', 'b']}
      fieldProps={{
        onChange(val) {
          emitter.emit('cascade/source-change', val);
        },
      }}
    />
  );
};

export default Source;
