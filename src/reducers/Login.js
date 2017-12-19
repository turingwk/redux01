'use strict';

import * as types from '../constants/ActionTypes';
import Immutable from 'immutable'

const initialState = Immutable.fromJS({
  status: 'init',
  isSuccess: false,
  user: null,
})

export default function loginIn(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_IN_INIT: // 初始状态
      return state.set('status', 'init');
    case types.LOGIN_IN_DOING: // 正在登录
      return state.set('status', 'doing');      
    case types.LOGIN_IN_DONE: // 登录完成
    return state.set('status', 'done').set('isSuccess', action.isSuccess).set('user', action.user);
    default:
      return state;
  }
}
