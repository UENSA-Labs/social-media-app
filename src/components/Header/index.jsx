// @flow
import React, { useContext, useState }  from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import type { LocationType } from '../../types/router';
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
  FormControl,
  InputBase,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  label:{
    color: 'white',
    active: {
      color: 'white'
    }
  },
  title: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  link: {
    textDecoration: 'none',
    color: '#3F51B5',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(47, 27, 160, 0.5)',
    '&:hover': {
      backgroundColor: 'rgba(47, 27, 160, 0.5)',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export type HeaderProps = {
  intl: any,
  login: Function,
  logged: boolean,
  handleLocale: Function,
  locale: string,
  localesArray: Array<string>,
  location: LocationType,
};

function Header({ 
  login, 
  logged, 
  handleLocale, 
  locale, 
  intl, 
  localesArray,
  location 
}: HeaderProps) {
  const classes = useStyles();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { formatMessage } = intl;
  const path = location.pathname;

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

          {/* SearchBar */}
          {/* TODO: Convert to stateless Components */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />

          {/* ThemeToggle */}
          {/* TODO: Convert to stateless Components */}
          <Switch
            color="secondary"
            onChange={toggleTheme}
            inputProps={{ 'aria-label': 'ThemeToggle' }}
          />

          {/* LocaleSelector */}
          {/* TODO: Convert to stateless Components */}
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="language-selector" className={classes.label}>Idioma</InputLabel>
            <Select
              labelId="language-selector"
              id="demo-simple-select-filled"
              onChange={changeLocale}
            >
             {localesArray.map(lang => <Link key={lang} to={`/${lang}${path.substring(3)}`} className={classes.link}><MenuItem value={lang}>{formatMessage({ id: `language.${lang}`})}</MenuItem></Link>)}
            </Select>
          </FormControl>

          {/* Login */}
          {/* TODO: Convert to stateless Components */}
          <Button color="inherit" onClick={login}>{ logged ? 'Welcome' : 'Login'}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(injectIntl(Header));

