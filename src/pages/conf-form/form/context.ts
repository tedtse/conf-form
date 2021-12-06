import React from 'react';

import type { FormInstance } from 'antd';

const FormContext = React.createContext<{
  formRef?: React.MutableRefObject<FormInstance<any> | undefined>;
}>({});

export default FormContext;
