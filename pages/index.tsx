// pages/index.tsx

import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Welcome to the Home Page</h1>
        <nav className={styles.nav}>
          <Link href="/login" className={styles.link}>
            Login
          </Link>
          <Link href="/dashboard" className={styles.link}>
            Dashboard
          </Link>
          {/* <Link href="/user">
            <a className={styles.link}>User</a>
          </Link>
          <Link href="/user-details">
            <a className={styles.link}>User Details</a>
          </Link> */}
        </nav>
      </div>
    </div>
  );
};

export default Home;
