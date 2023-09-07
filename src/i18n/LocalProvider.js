/**
 * 
 */
import React, { useState, useEffect, createContext } from 'react'
import intl from 'react-intl-universal'
import useForceUpdate from 'use-force-update';
import enUS from './en.json';
import zhCN from './ch.json';
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

export const LocalContext = createContext({
  intl: null,
  buttons: null
})

export default function LocalProvider({ children }) {

  const forceUpdate = useForceUpdate();
  const [initDone, setInitDone] = useState(false);

  useEffect(() => {
    initializeIntl();
  }, []);

  const initializeIntl = () => {
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang',
      cookieLocaleKey: 'lang',
    });
    const localStorge = localStorage.getItem('currentLocale')
    if (localStorge) currentLocale = localStorge
    if (!LOCALES_LIST.some(item => item.value === currentLocale)) {
      currentLocale = "zh-CN"
    }
    setCurrentLocale(currentLocale);
    setInitDone(true);
  }

  const setCurrentLocale = (currentLocale: string) => {
    intl.init({
      currentLocale,
      locales: LOCALE_DATA,
    });
    localStorage.setItem('currentLocale',currentLocale)
  };
  const onLocaleChange = (value) => {
    setCurrentLocale(value);
    forceUpdate();
  }
  const isCN = intl.get("local") == 'zh-CN'
  const buttons = [
    <Button key="en"
      variant={!isCN ? 'contained' : 'outlined'}
      onClick={() => onLocaleChange('en-US')}>EN</Button>,
    <Button key="ch"
      variant={isCN ? 'contained' : 'outlined'}
      onClick={() => onLocaleChange('zh-CN')}>中</Button>,
  ];
  const contextValue = {
    intl,
    buttons,
    isCN
  }
  return (
    <>
      {initDone && <LocalContext.Provider value={contextValue}>
        {children}
      </LocalContext.Provider>}
    </>
  )
}

export const useLocal = () => {
  return React.useContext(LocalContext);
};
