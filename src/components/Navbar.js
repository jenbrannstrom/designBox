// Navbar.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {t('appName')}
          </Typography>
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
