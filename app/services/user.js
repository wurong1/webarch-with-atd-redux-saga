import * as Fetch from '../utils/fetch';

import { GET_USERS } from '../constants/api';

const UserService = {
  getUsers() {
    return Fetch.get(GET_USERS);
  }
};

export default UserService;
