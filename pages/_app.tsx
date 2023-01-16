import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidenav from '../components/sidenav';
import Link from 'next/link';
//import { stack as Menu } from 'react-burger-menu';
//import { scaleDown as Menu } from 'react-burger-menu';
import { scaleRotate as Menu } from 'react-burger-menu';
import SettingsIcon from '@mui/icons-material/Settings';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div id="outer-container">
      <Menu right pageWrapId={'page-wrap'} outerContainerId={'outer-container'} customBurgerIcon=<SettingsIcon/>>
        <Link href="/" className="menu-item">Settings</Link>
        <Link href="/salads" className="menu-item">Salads</Link>
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
  );
}
