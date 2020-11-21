import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import {initReactI18next} from 'react-i18next';

i18n
  // load translations using http
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(HttpApi)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    backend: {
      overrideMimeType: true
    },
    ns: 'common',
    defaultNS: 'common',
    react: {
      wait: true
    }
  });

export default i18n;
