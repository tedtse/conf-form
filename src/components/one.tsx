import React from 'react';
import { connect } from 'dva';
import { useRequest } from 'umi';

import type { Dispatch } from 'redux';
import type { userType } from '@/models/user';

export type oneProps = {
  dispatch: Dispatch<any>;
  user: userType;
};
const One: React.FC<oneProps> = ({ dispatch, user }) => {
  useRequest(async () => {
    dispatch({
      type: 'user/getCurrentUser',
    });
  });
  return <div>{user.name}</div>;
};

export default connect(({ user }: any) => ({
  user: user.data,
}))(One);
