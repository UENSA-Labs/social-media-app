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
      {children}
    </div>
  );
};

export default App;
