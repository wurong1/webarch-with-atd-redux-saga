import { takeEvery, put, call, fork } from 'redux-saga/effects';

import { GET_TASKS } from '../constants/actionType';
import TaskService from '../services/task';

export function* getTasks() {
  try {
    const [ tasks ] = yield [
      call(TaskService.getTasks)
    ];

    yield put({
      type: GET_TASKS.SUCCESS,
      payload: {
        tasks: tasks.result
      }
    });
  } catch (err) {
    yield put({ type: GET_TASKS.FAILED });
  }
}

export function* watchGetTasks() {
  yield takeEvery(GET_TASKS.ACTION, getTasks);
}

export default function* tasks() {
  yield fork(watchGetTasks);
}
