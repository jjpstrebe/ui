import './Sidebar.module.css'
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu>
      <Link href="/" className="menu-item">Settings</Link>
      <Link href="/salads" className="menu-item">Salads</Link>
    </Menu>
  );
};
