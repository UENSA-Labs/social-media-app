// @flow
import React, { useContext }  from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Switch 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export type HeaderProps = {
  login: Function,
  logged: boolean,
};

export default function Header({ login, logged }: HeaderProps) {
  const classes = useStyles();

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> 
          <Typography variant="h6" className={classes.title}>
            Social Media App
          </Typography>
          <Switch
            color="secondary"
            onChange={toggleTheme}
            inputProps={{ 'aria-label': 'ThemeToggle' }}
          />
          <Button color="inherit" onClick={login}>{ logged ? 'Welcome' : 'Login'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

