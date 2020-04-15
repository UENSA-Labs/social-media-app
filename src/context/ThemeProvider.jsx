// @flow
import React, { useState } from 'react';
import type { Node } from 'react';

export const ThemeContext = React.createContext(null);

export const ThemeProviderProps = { 
  children: Node
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const [theme, setTheme] = useState('light');
  const nextTheme = theme === 'light' ? 'dark' : 'light';

  const lightTheme = {
    backgroundColor: '#FFF',
    color: '#2f1ba0',
  }

  const darkTheme = {
    backgroundColor: '#2f1ba0',
  }

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  const value = {
    theme: theme,
    themeStyles: themeStyles,
    toggleTheme: () => {
      setTheme(nextTheme)
    }
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;