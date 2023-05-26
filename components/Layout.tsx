import React, { ReactNode } from 'react';
import NavBar from './Navbar';
import SideBar from './Sidebar';
import styles from '../styles/layout.module.scss'

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='layout'>
      {/* Navbar */}
      <header>
        <NavBar />
      </header>
      <div className={styles.divider}>
        {/* Sidebar */}
        <aside>
          <SideBar />
        </aside>

        {/* Main content */}
        <main>
          {children}
        </main>
      </div>

    </div>
  );
};

export default Layout;
