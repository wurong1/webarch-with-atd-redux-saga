import React, { Component } from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Users from './containers/Users';
import Tasks from './containers/Tasks';
import NotFound from './containers/NotFound';

class Routes extends Component {
  onEnter() {
    // put some init opertions here
  }

  render() {
    return (
      <Router {...this.props}>
        <Route path="/" component={ App } onEnter={ this.onEnter }>
          <IndexRoute component={ Users } />
          <Route path="overview/users" component={ Users } />
          <Route path="overview/tasks" component={ Tasks } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
    );
  }
}

export default Routes;
