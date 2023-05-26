import type { NextPage } from 'next'
import styles from '../styles/cards.module.scss'
import { HiOutlineUsers } from 'react-icons/hi'

const Cards: NextPage = () => {
    return (
        <div className={styles.cards}>
            <div className={styles.cardWrap}>
                <div className={styles.card}>
                    <span className={styles.iconCircle}><HiOutlineUsers /></span>
                    <h2 className={styles.cardName}>Users</h2>
                    <span className={styles.cardNumber}>2,453</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.iconCircle}><HiOutlineUsers /></span>
                    <h2 className={styles.cardName}>Active Users</h2>
                    <span className={styles.cardNumber}>2,453</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.iconCircle}><HiOutlineUsers /></span>
                    <h2 className={styles.cardName}>Users with Loans</h2>
                    <span className={styles.cardNumber}>2,453</span>
                </div>
                <div className={styles.card}>
                    <span className={styles.iconCircle}><HiOutlineUsers /></span>
                    <h2 className={styles.cardName}>Users with Savings</h2>
                    <span className={styles.cardNumber}>2,453</span>
                </div>
            </div>
        </div>
    )
}

export default Cards
