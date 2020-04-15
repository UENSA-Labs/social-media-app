// @flow
import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import { IntlProvider } from 'react-intl';
import translations from '../../i18n/translations';
import Header from '../../components/Header';
import * as firebase from 'firebase';

export type AppProps = {
  children: Node,
};

const App = ({ children }: AppProps) => {
  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState({});
  const [locale, setLocale] = useState('es');

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      setUser(user);
      setLogged(true);

      console.log(user);

      // ...
    }).catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
      setError({ errorCode, errorMessage, email, credential });
      setLogged(false);

      console.log(error);
    });

  };

  const changeLocale = (lang: string) => setLocale(lang);
  const localesArray = Object.keys(translations);

  return (
    <IntlProvider 
      locale={locale}
      messages={translations[`${locale}`]}
    >
      <div>
        <Header login={login} logged={logged} locale={locale} handleLocale={changeLocale} localesArray={localesArray}/>
        <div>
          {children}
        </div>
      </div>
    </IntlProvider>
  );
};

export default App;
