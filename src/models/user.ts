import { getCurrentUser } from '@/services/user';

import type { Effect } from 'dva';
import type { Reducer } from 'redux';

export type userType = {
  name?: string;
  avatar?: string;
  usrId?: string;
};

export type userModelType = {
  namespace: string;
  state: {
    loading?: boolean;
    data?: userType;
  };
  reducers: {
    setCurrentUserData: Reducer;
    setCurrentUserLoading: Reducer;
  };
  effects: {
    getCurrentUser: Effect;
  };
};

const namespace = 'user';

const userModel: userModelType = {
  namespace,
  state: {
    loading: false,
    data: {},
  },
  reducers: {
    setCurrentUserData(state, { payload: user }) {
      return { ...state, ...{ data: user } };
    },
    setCurrentUserLoading(state, { payload: loading }) {
      return { ...state, ...{ loading } };
    },
  },
  effects: {
    *getCurrentUser(_, { call, put, select }) {
      const { loading } = yield select((state: any) => state[namespace]);
      if (loading) {
        return;
      }
      yield put({
        type: 'setCurrentUserLoading',
        payload: true,
      });
      console.log(123);
      let response;
      try {
        console.log(456);
        response = yield call(getCurrentUser);
        console.log(response);
        yield put({
          type: 'setCurrentUserData',
          payload: response.data,
        });
      } catch (err) {
        console.log(err);
      } finally {
        yield put({
          type: 'setCurrentUserLoading',
          payload: false,
        });
      }
    },
  },
};

export default userModel;
