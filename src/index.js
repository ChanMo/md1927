import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import router from './routers/router';
import { RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import useForceUpdate from 'use-force-update';
import intl from 'react-intl-universal'

import enUS from './i18n/en.json';
import zhCN from './i18n/ch.json';

const LOCALES_LIST = [
  {
    label: "English",
    value: "en-US",
  },
  {
    label: "简体中文",
    value: "zh-CN",
  }
];

const LOCALE_DATA = {
  "en-US": enUS,
  "zh-CN": zhCN
}

const App = () => {
  const [initDone, setInitDone] = React.useState(false);

  React.useEffect(() => {
    initializeIntl();
  }, []);

  const initializeIntl = () => {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang',
      cookieLocaleKey: 'lang',
    });
    if (!LOCALES_LIST.some(item => item.value === currentLocale)) {
      currentLocale = "en-US"
    }
    setCurrentLocale(currentLocale);
    setInitDone(true);
  }

  const setCurrentLocale = (currentLocale: string) => {
    intl.init({
      currentLocale,
      locales: LOCALE_DATA,
    });
  };
  return <>
    {initDone && <>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </>}
  </>
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
