import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routers from '../routes';

class Root extends Component {
  render() {
    let { store, history } = this.props;
    return (
      <Provider store={ store }>
        <div>
          <Routers history={ history }/>
        </div>
      </Provider>
    );
  }
}

export default Root;
