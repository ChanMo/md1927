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

import LocalProvider, { useLocal } from './i18n/LocalProvider';
import { Button, ButtonGroup } from '@mui/material';


const App = () => {
  const { intl, buttons } = useLocal()
  return <LocalProvider>
    <Navbar
      buttons={
        <ButtonGroup size="small" sx={{
          'button': { fontSize: '.8rem !important' }
        }} aria-label="small button group">
          {buttons}
        </ButtonGroup>
      }
    />
    <RouterProvider router={router} />
    <Footer intl={intl} />
  </LocalProvider>
}

ReactDOM.render(
  <React.StrictMode>
    <LocalProvider>
      <App />
    </LocalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
