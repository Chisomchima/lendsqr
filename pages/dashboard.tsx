import  React from 'react'
import styles from '../styles/dashboard.module.scss'
import Layout from '../components/Layout';
import Cards from '../components/Cards';
import Table from '../components/Table';
import { useState } from 'react';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className={styles.dashboard}>
      <h2  className={styles.dashboardtitle}>Users</h2>
        <Cards />
        <Table showFilter={false}/>
      </div>
    </Layout>
  )
}

export default Dashboard
