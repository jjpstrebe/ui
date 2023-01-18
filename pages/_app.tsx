import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../styles/globals.css'
import Sidenav from '../components/sidenav';
import Link from 'next/link';
//import { stack as Menu } from 'react-burger-menu';
//import { scaleDown as Menu } from 'react-burger-menu';
import { scaleRotate as Menu } from 'react-burger-menu';
import SettingsIcon from '@mui/icons-material/Settings';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

interface ThemeInterface {
  colors: {
    primary: string
  }
}

const theme: ThemeInterface = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
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
    </>
  )
}
