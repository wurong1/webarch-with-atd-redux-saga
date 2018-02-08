import * as Fetch from '../utils/fetch';

import { GET_TASKS } from '../constants/api';

const TaskService = {
  getTasks() {
    return Fetch.get(GET_TASKS);
  }
};

export default TaskService;
