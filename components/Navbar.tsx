import type { NextPage } from 'next'
import Image from 'next/image';
import styles from '../styles/navbar.module.scss'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {BiSearch, BiBell, BiCaretDown} from "react-icons/bi"

const NavBar: NextPage = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.wrap}>
                <div className={styles.logo} style={{
                    width: "30px",
                    flex: 1,
                    height: "30px",
                    display: "flex"
                }}>
                    <Image src="/union.svg" alt="My Image" width={20} height={20}/>
                    <Image src="/lendsqr.svg" alt="My Image" width={100} height={20} />
                </div>
                <div className={styles.search}>
                    <div className={styles.inputGroup}>
                        <input
                            placeholder="Search for anything"
                        />
                        <span><BiSearch/></span>
                    </div>
                </div>
                <div className={styles.links}>
                    <div className={styles.linksWrap}>
                    <a href="#">Docs</a>
                    <span className={styles.notification}><BiBell /></span>
                   <Image src="/avatar.png" alt="My Image" width={50} height={50} className={styles.avatar}/>
                    <span className={styles.name}>Adedeji <span><BiCaretDown /></span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
