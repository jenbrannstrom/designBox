// Navbar.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {t('appName')}
          </Typography>
          <LanguageSwitcher />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;