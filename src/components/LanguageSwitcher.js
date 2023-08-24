// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => changeLanguage('en')}>English</Button>
      <Button variant="contained" color="primary" onClick={() => changeLanguage('he')}>עִברִית</Button>
    </div>
  );
};

export default LanguageSwitcher;
