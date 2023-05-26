import { NextPage } from 'next';
import styles from '../../styles/userDetails.module.scss'
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import UserInfoHeader from '../../components/UserInfoHeader'
import UserInfo from '../../components/UserInfo'
import { MdOutlineKeyboardBackspace } from "react-icons/md"
import { useEffect, useState } from 'react';
import { getUserById } from '../../Service';
import UserData from '../../types';
import Link from 'next/link';

const UserDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (id) {
        const userData = await getUserById(id as string);
        setUser(userData);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <Layout>
      <div className={styles.details}>
        <div className={styles.detailsBackNavigation}>
          <span className={styles.backNavigationIcon}><MdOutlineKeyboardBackspace /></span>
          <Link className={styles.backNavigationText} href={`/dashboard`}>Back to Users</Link>
        </div>
        <div className={styles.detailsHeader}>
          <h2 className={styles.detailsTitle}>Users</h2>
          <div className={styles.detailButtons}>
            <button className={styles.blacklist}>Blacklist User</button>
            <button className={styles.activate}>Activate User</button>
          </div>
        </div>
        <div className={styles.userInfo}>
        <UserInfoHeader User={user}/>
        <UserInfo User={user}/>
        </div>

      </div>
    </Layout>
  );
};

export default UserDetails;
