import React, { useState } from 'react';
import intl from 'react-intl-universal';
import useForceUpdate from 'use-force-update';
import { Button, ButtonGroup } from '@mui/material';
import enUS from './en.json';
import zhCN from './ch.json';

const LOCALE_DATA = {
  "en-US": enUS,
  "zh-CN": zhCN
}


const ReactIntlUniversalExample: React.FC<any> = (props) => {
  const forceUpdate = useForceUpdate();
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
      <div className="react-intl-universal-example">
        <ButtonGroup size="small" sx={{
          'button': { fontSize: '.8rem !important' }
        }} aria-label="small button group">
          {buttons}
        </ButtonGroup>
      </div>
    </div>
  );
}

export default ReactIntlUniversalExample;