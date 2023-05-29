import type { NextPage } from 'next'
import styles from '../styles/dashboard.module.scss'
import Layout from '../components/Layout';
import Cards from '../components/Cards';
import Table from '../components/Table';

const Dashboard: NextPage = () => {
  return (
    <Layout>
      <div className={styles.dashboard}>
      <h2  className={styles.dashboardtitle}>Users</h2>
        <Cards />
        <Table showFilter={true}/>
      </div>
    </Layout>
  )
}

export default Dashboard
