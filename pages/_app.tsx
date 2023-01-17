import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../util/theme';
import createEmotionCache from '../util/createEmotionCache';

import '../styles/globals.css'
import Sidenav from '../components/sidenav';
import Link from 'next/link';
//import { stack as Menu } from 'react-burger-menu';
//import { scaleDown as Menu } from 'react-burger-menu';
import { scaleRotate as Menu } from 'react-burger-menu';
import SettingsIcon from '@mui/icons-material/Settings';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div id="outer-container">
          <Menu right pageWrapId={'page-wrap'} outerContainerId={'outer-container'} customBurgerIcon=<SettingsIcon/>>
            <Link href="/" className="menu-item">Settings</Link>
            <Link href="/" className="menu-item">User Info</Link>
            <Link href="/" className="menu-item">Server Logs</Link>
          </Menu>
          <div id="page-wrap">
            <div className="appPane">
              <Sidenav />
              <div className="appContent">
                <Component {...pageProps} />
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
