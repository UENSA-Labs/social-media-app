// @flow
import React from 'react';
import type { Node } from 'react';
import Header from '../../components/Header';

export type AppProps = {
  children: Node,
};

const App = ({ children }: AppProps) => (
  <div>
    <Header />
    <div>
      {children}
    </div>
  </div>
);

export default App;
