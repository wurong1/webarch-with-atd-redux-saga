import { fork } from 'redux-saga/effects';

import tasks from './tasks';
import users from './users';

export default function* root() {
  yield fork(tasks);
  yield fork(users);
}
