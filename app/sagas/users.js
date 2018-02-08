import { takeEvery, put, call, fork } from 'redux-saga/effects';

import { GET_USERS } from '../constants/actionType';
import UserService from '../services/user';

export function* getUsers() {
  try {
    const [ users ] = yield [
      call(UserService.getUsers)
    ];

    yield put({
      type: GET_USERS.SUCCESS,
      payload: {
        users: users.result
      }
    });
  } catch (err) {
    yield put({ type: GET_USERS.FAILED });
  }
}

export function* watchGetUsers() {
  yield takeEvery(GET_USERS.ACTION, getUsers);
}

export default function* users() {
  yield fork(watchGetUsers);
}
