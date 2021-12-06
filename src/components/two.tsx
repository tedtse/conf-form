import React from 'react';
import { connect } from 'dva';
import { useRequest } from 'umi';

import type { Dispatch } from 'redux';
import type { userType } from '@/models/user';

export type TwoProps = {
  dispatch: Dispatch<any>;
  user: userType;
};
const Two: React.FC<TwoProps> = ({ dispatch, user }) => {
  useRequest(async () => {
    dispatch({
      type: 'user/getCurrentUser',
    });
  });
  return <div>{user.usrId}</div>;
};

export default connect(({ user }: any) => ({
  user: user.data,
}))(Two);
