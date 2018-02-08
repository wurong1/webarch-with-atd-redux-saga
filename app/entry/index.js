import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from '../containers/Root';
import store from '../store/configureStore';

const appHistory = syncHistoryWithStore(hashHistory, store);

function renderApp(RootComponent) {
  const target = document.getElementById('root');

  if (target) {
    ReactDOM.render(
      <AppContainer>
        <RootComponent store={store} history={appHistory} />
      </AppContainer>,
      target
    );
  }
}

renderApp(Root);

if (module.hot) {
  module.hot.accept(
    '../containers/Root',
    () => renderApp(require('../containers/Root'))
  );
}
