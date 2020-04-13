// @flow
import React from 'react';
import Header from '../../components/Header';

type AppProps = {
  children: Node
};

const App = ({ children }: AppProps) => {
  return (
    <div>
      <Header />
      <div>
      {children}
      </div>
    </div>
  );
};

export default App;
