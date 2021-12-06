import React, { useState, useEffect, useContext } from 'react';
import { ProFormSelect } from '@ant-design/pro-form';
import emitter from './emitter';
import FormContext from '../../context';

const optionsMap = {
  a: ['a1', 'a2'],
  b: ['b1', 'b2'],
};

const Target: React.FC = () => {
  const name = 'target';
  const { formRef } = useContext(FormContext);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const handleCascade = (val: string) => {
      formRef?.current?.setFieldsValue({ [name]: '' });
      setOptions(optionsMap[val] ?? []);
    };
    emitter.on('form/cascade/source-change', handleCascade);
    return () => {
      emitter.off('form/cascade/source-change', handleCascade);
    };
  }, [formRef]);
  return <ProFormSelect label="级联目标" name={name} options={options} />;
};

export default Target;
