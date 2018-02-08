import { GET_TASKS } from '../constants/actionType';
import { createReducer } from '../utils/createReducer';

const initialState = {
  list: []
};

export default createReducer(initialState, {
  [GET_TASKS.SUCCESS]: (state, payload) => {
    return {
      ...state,
      list: payload.tasks
    };
  }
});
