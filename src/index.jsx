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
import translations from './i18n/translations';

const availableLocales = Object.keys(translations).join('|');
const app = initializeApp(firebaseConfig);

const redirectLocale= localStorage.getItem('locale') || 'es';

ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider>
      <ThemeProvider>
        <Router>
          <Switch>
            <Route
              exact
              path={`/:locale(${availableLocales})`}     
              render={({ match }) => (
                <App>
                  <Switch>
                    <Route exact path={`${match.url}`} component={Home} />
                    <Route exact path={`${match.url}/profile`} component={Home} />
                    <Route path={`${match.url}/profile/:username`} component={Profile} />
                  </Switch>
                </App>
              )}
            />
          </Switch>
          <Redirect to={redirectLocale} />
        </Router>
      </ThemeProvider>
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
