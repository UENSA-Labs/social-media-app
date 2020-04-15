// @flow
import React, { useState } from 'react';
import type { Node } from 'react';

export const LocaleContext = React.createContext(null);

export const LocaleProviderProps = { 
  children: Node
};

const LocaleProvider = ({ children }: LocaleProviderProps) => {

  const [locale, setLocale] = useState('es');

  const value = {
    locale: locale,
  }

  return (
    <LocaleContext.Provider value={value}>
      {children}
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;