import { applyMiddleware, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';

import rootSagas from '../sagas';
import rootReducer from '../reducers';

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer
});
const sagaMiddleware = createSagaMiddleware();

export default(initialState = {}) => {
  const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory))(createStore);
  const store = createStoreWithMiddleware(reducer, initialState);
  sagaMiddleware.run(rootSagas);

  return store;
};
