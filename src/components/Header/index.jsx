// @flow
import React, { useContext }  from 'react';
import { FormattedMessage } from 'react-intl';
import { ThemeContext } from '../../context/ThemeProvider';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Switch,
  InputLabel,
  MenuItem,
  Select
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
  handleLocale: Function,
};

export default function Header({ login, logged, handleLocale }: HeaderProps) {
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
          <InputLabel id="language-selector"><FormattedMessage id="language.es" default="default" /></InputLabel>
          <Select
            labelId="language-selector"
            id="demo-simple-select-filled"
            value="Idioma"
            onChange={(e) => handleLocale(e.target.value)}
          >
            <MenuItem value="es">Español</MenuItem>
            <MenuItem value="en">Ingles</MenuItem>
            <MenuItem value="de">Aleman</MenuItem>
            <MenuItem value="fr">Frances</MenuItem>
            <MenuItem value="pt">Portugues</MenuItem>
          </Select>
          <Button color="inherit" onClick={login}>{ logged ? 'Welcome' : 'Login'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

