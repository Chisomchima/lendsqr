import  React from 'react'
import Image from 'next/image'
import { RxPerson } from 'react-icons/rx'
import { BsStar, BsStarFill } from 'react-icons/bs'
import styles from '../styles/userInfoHeader.module.scss'
import UserData from '../types'
import currency from 'currency.js';


interface UserInfoProps {
    User: UserData;
}
const UserInfoHeader: React.FC<UserInfoProps> = ({ User }) => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.userInfoWrap}>
                {User.profile.avatar ? <span className={styles.personAvatar}><Image src={User.profile.avatar} alt={''} width={100} height={100} className={styles.photo} /></span> : <span className={styles.personLogo}><RxPerson /></span>}
                <div className={styles.person}>
                    <span className={styles.name}>{User.profile.firstName} {User.profile.lastName}</span>
                    <span className={styles.userNumber}>{User.accountNumber}</span>
                </div>
                <div className={styles.tier}>
                    <span className={styles.tierText}>User’s Tier</span>
                    <span className={styles.stars}><BsStarFill /> <BsStar /> <BsStar /></span>
                </div>
                <div className={styles.person}>

                    <span className={styles.name}>{currency(User.accountBalance, {
                        symbol: '₦',
                        decimal: '.',
                        separator: ',',
                        precision: 2,
                    }).format()}</span>
                    <span className={styles.userNumber}>{User.profile.bvn}/Providus Bank</span>
                </div>
            </div>
            <div  className={styles.omo}>
                <span>General Details</span>
                <span>Documents</span>
                <span>Bank Details</span>
                <span>Loans</span>
                <span>Savings</span>
                <span>App and System</span>
            </div>
        </div>
    )
}

export default UserInfoHeader
