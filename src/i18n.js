// i18n.js
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './translations/en.json'; // import your translation files
import heTranslations from './translations/he.json';

i18next
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: enTranslations },
      he: { translation: heTranslations }
    },
    lng: "en", // language to use
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18next;
