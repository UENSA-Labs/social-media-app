// flow
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider'; 
import { Button } from '@material-ui/core';
import logo from '../../logo.svg';
import styles from './styles.module.scss';

function Home() {
  const { themeStyles } = useContext(ThemeContext);
  
  return (
    <div className={styles.app}>
      <header className={styles.appHeader} style={themeStyles}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className={styles.appLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button color="primary">Hello World</Button>
      </header>
    </div>
  );
}

export default Home;
