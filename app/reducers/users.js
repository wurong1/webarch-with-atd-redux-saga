import { GET_USERS } from '../constants/actionType';
import { createReducer } from '../utils/createReducer';

const initialState = {
  list: []
};

export default createReducer(initialState, {
  [GET_USERS.SUCCESS]: (state, payload) => {
    return {
      ...state,
      list: payload.users
    };
  }
});
