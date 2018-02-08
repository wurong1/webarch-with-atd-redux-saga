import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { browserHistory } from 'react-router';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';

import rootSagas from '../sagas';
import rootReducer from '../reducers';

const reducer = combineReducers({
  ...rootReducer,
  routing: routerReducer
});
const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
  collapsed: true
});

/* istanbul ignore next */
const newStore = (initialState = {}) => {
  const createStoreWithMiddleware = compose(applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory), logger))(createStore);

  const store = createStoreWithMiddleware(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  sagaMiddleware.run(rootSagas);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(require('../reducers').default);
    });
  }

  return store;
};

export default newStore;
