// @flow
import React, { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
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
  Select,
  FormControl
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  }
}));

export type HeaderProps = {
  intl: any,
  login: Function,
  logged: boolean,
  handleLocale: Function,
  locale: string,
  localesArray: Array<string>,
};

function Header({ login, logged, handleLocale, locale, intl, localesArray }: HeaderProps) {
  const classes = useStyles();

  const { theme, toggleTheme } = useContext(ThemeContext);

  const { formatMessage } = intl;

  const changeLocale = (e) => {
    handleLocale(e.target.value);
  };

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
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="language-selector">{formatMessage({ id: `language.${locale}`})}</InputLabel>
            <Select
              labelId="language-selector"
              id="demo-simple-select-filled"
              onChange={changeLocale}
            >
             {localesArray.map(lang => <Link key={lang} to="de"><MenuItem value={lang}>{formatMessage({ id: `language.${lang}`})}</MenuItem></Link>)}
            </Select>
          </FormControl>
          <Button color="inherit" onClick={login}>{ logged ? 'Welcome' : 'Login'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default injectIntl(Header);

