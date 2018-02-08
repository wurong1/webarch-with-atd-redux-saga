import { GET_TASKS } from '../constants/actionType';

export function getTasks() {
  return {
    type: GET_TASKS.ACTION
  };
}
