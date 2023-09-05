import React, { useState } from 'react';
import intl from 'react-intl-universal';
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


const ReactIntlUniversalExample: React.FC<any> = (props) => {
  const forceUpdate = useForceUpdate();
  const [initDone, setInitDone] = React.useState(false);

  React.useEffect(() => {
    initializeIntl();
  }, []);

  const initializeIntl = () => {
    // 1. Get the currentLocale from url, cookie, or browser setting
    let currentLocale = intl.determineLocale({
      urlLocaleKey: 'lang', // Example: https://fe-tool.com/react-intl-universal?lang=en-US
      cookieLocaleKey: 'lang', // Example: "lang=en-US" in cookie
    });

    // 2. Fallback to "en-US" if the currentLocale isn't supported in LOCALES_LIST
    if (!LOCALES_LIST.some(item => item.value === currentLocale)) {
      currentLocale = "en-US"
    }

    // 3. Set currentLocale and load locale data 
    setCurrentLocale(currentLocale);

    // 4. After loading locale data, start to render
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

  return (
    <div>
      {initDone && (
        <div className="react-intl-universal-example">
          <ButtonGroup size="small" sx={{
            'button': { fontSize: '.8rem !important' }
          }} aria-label="small button group">
            {buttons}
          </ButtonGroup>
        </div>
      )}
    </div>
  );
}

export default ReactIntlUniversalExample;