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
import { Button, ButtonGroup } from '@mui/material';

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
  const forceUpdate = useForceUpdate();
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
  const onLocaleChange = (value) => {
    setCurrentLocale(value);
    forceUpdate();
  }
  const buttons = [
    <Button key="en"
      variant={intl.get("local") == 'en-US' ? 'contained' : 'outlined'}
      onClick={() => onLocaleChange('en-US')}>EN</Button>,
    <Button key="ch"
      variant={intl.get("local") == 'zh-CN' ? 'contained' : 'outlined'}
      onClick={() => onLocaleChange('zh-CN')}>中</Button>,
  ];
  return <>
    {initDone && <>
      <Navbar buttons={
        <ButtonGroup size="small" sx={{
          'button': { fontSize: '.8rem !important' }
        }} aria-label="small button group">
          {buttons}
        </ButtonGroup>
      } />
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
