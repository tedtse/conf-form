import type React from 'react';
import NameFormItem from './name';
import PwdFormItem from './password/password';
import PwdConfirmFormItem from './password/confirm';
import CascadeSource from './cascade/source';
import CascadeTarget from './cascade/target';

export type itemMapsKey = 'name' | 'pwd' | 'pwdConfirm' | 'source' | 'target';

export const itemMaps: Record<itemMapsKey, React.FC> = {
  name: NameFormItem,
  pwd: PwdFormItem,
  pwdConfirm: PwdConfirmFormItem,
  source: CascadeSource,
  target: CascadeTarget,
};
