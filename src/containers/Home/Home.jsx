// flow
import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider'; 
import { FormattedMessage } from 'react-intl';
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
          <FormattedMessage id="welcome" default="Bienvenido"/>
        </p>
        <Button color="primary">
          <a
            className={styles.appLink}
            href="https://github.com/UENSA-Labs/social-media-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FormattedMessage id="github" default="Github Repo"/>
          </a>
        </Button>
      </header>
    </div>
  );
}

export default Home;
