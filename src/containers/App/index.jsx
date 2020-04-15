// @flow
import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import Header from '../../components/Header';
import * as firebase from 'firebase';

export type AppProps = {
  children: Node,
};

const App = ({ children }: AppProps) => {

  const [logged, setLogged] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState({});

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

  return (
    <div>
      <Header login={login} logged={logged} />
      <div>
        {children}
      </div>
    </div>
  );
};

export default App;
