function actionGenerator(key) {
  return {
    ACTION: key,
    SUCCESS: `${key}_SUCCESS`,
    FAILED: `${key}_FAILED`
  };
}

export const GET_TASKS = actionGenerator('GET_TASKS');
export const GET_USERS = actionGenerator('GET_USERS');