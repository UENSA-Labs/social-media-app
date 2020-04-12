// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/index';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route
          path={`/es`}
          render={({ match }) => (
            <App>
              <Switch>
                <Route exact path={`${match.url}`} component={Home} />
                <Route exact path={`${match.url}/profile`} component={Home} />
                <Route
                  path={`${match.url}/profile/:username`}
                  component={Profile}
                />
              </Switch>
            </App>
          )}
        />
      </Switch>
      <Redirect to="/es" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
