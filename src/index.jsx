// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { initializeApp }  from 'firebase';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ThemeProvider from './context/ThemeProvider';
import LocaleProvider from './context/LocaleProvider';
import App from './containers/App/index';
import Home from './containers/Home/Home';
import Profile from './containers/Profile/index';
import './styles.scss';
import { firebaseConfig } from './helpers/config';

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route
              path="/es"
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
      </ThemeProvider>
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
