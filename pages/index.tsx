// pages/index.tsx
import { NextPage } from 'next';
import  React from 'react'
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

const Home: NextPage  = () => {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Lendsqr Test By Chisom Chima</h1>
        <p>Click on the links below to view pages</p>
        <nav className={styles.nav}>
          <Link href="/login" className={styles.link}>
            Login
          </Link>
          <Link href="/dashboard" className={styles.link}>
            Dashboard
          </Link>
          <Link href="/user" className={styles.link}>
            User
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
