import React, {Component} from 'react';
import {
  Router,
  Route,
  IndexRoute,
  Redirect,
  browserHistory
} from 'react-router';

import App from './app';

class AppRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
      </Router>
    );
  }
}

export default AppRoutes;
