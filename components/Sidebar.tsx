import type { NextPage } from 'next'
import {
  customers,
  business,
  settings
} from '../data'
import { MdHomeRepairService, MdPeopleAlt } from 'react-icons/md'
import { AiOutlineDown, AiOutlineReconciliation } from 'react-icons/ai'
import { FaHome, FaRegHandshake, FaHandHoldingUsd, FaCoins, FaChartBar } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import {TbMoneybag, TbPigMoney, TbWindmill} from 'react-icons/tb'
import {BsFillPersonCheckFill, BsFillPersonDashFill, BsPersonGear} from 'react-icons/bs'
import {BiHomeHeart, BiSlider, BiBadge} from 'react-icons/bi'
import {GrTransaction} from 'react-icons/gr'
import {RiFilePaper2Line} from 'react-icons/ri'
import styles from '../styles/sidebar.module.scss'

const SideBar: NextPage = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.wrap}>
        <div className={styles.iconWrap} style={{marginBottom: "25px", color: "#213F7D",}}>
          <span className={styles.icon}><MdHomeRepairService /></span>
          <span className={styles.name} style={{paddingRight: "10px",}}>Switch Organization</span>
          <span className={styles.icon2} style={{fontSize: "12px", paddingTop: '5px', fontWeight:'bolder',}}><AiOutlineDown /></span>
        </div>
        <div className={styles.iconWrap} style={{marginBottom: "20px",}}>
          <span className={styles.icon}><FaHome /></span>
          <span className={styles.name}>Dashboard</span>
        </div>
        <span className={styles.sectionHeader}>CUSTOMERS</span>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><MdPeopleAlt /></span>
          <span className={styles.name}>Users</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><IoIosPeople /></span>
          <span className={styles.name}>Guarantors</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><TbMoneybag /></span>
          <span className={styles.name}>Loans</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><FaRegHandshake /></span>
          <span className={styles.name}>Decision Models</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><TbPigMoney /></span>
          <span className={styles.name}>Savings</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><FaHandHoldingUsd /></span>
          <span className={styles.name}>Loan Requests</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><BsFillPersonCheckFill /></span>
          <span className={styles.name}>Whitelist</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><BsFillPersonDashFill /></span>
          <span className={styles.name}>Karma</span>
        </div>
        <span  className={styles.sectionHeader}>BUSINESSES</span>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><MdHomeRepairService /></span>
          <span className={styles.name}>Organization</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><TbMoneybag /></span>
          <span className={styles.name}>Loan Products</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><BiHomeHeart /></span>
          <span className={styles.name}>Savings Products</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><FaCoins /></span>
          <span className={styles.name}>Fees and Charges</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><GrTransaction /></span>
          <span className={styles.name}>Transactions</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><TbWindmill /></span>
          <span className={styles.name}>Services</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><BsPersonGear /></span>
          <span className={styles.name}>Service Account</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><RiFilePaper2Line /></span>
          <span className={styles.name}>Settlements</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><FaChartBar /></span>
          <span className={styles.name}>Reports</span>
        </div>
        <span  className={styles.sectionHeader}>SETTINGS</span>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><BiSlider /></span>
          <span className={styles.name}>Preferences</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><BiBadge /></span>
          <span className={styles.name}>Fees and Pricing</span>
        </div>
        <div className={styles.iconWrap}>
          <span className={styles.icon}><AiOutlineReconciliation /></span>
          <span className={styles.name}>Audit Logs</span>
        </div>
      </div>
    </div>
  )
}

export default SideBar
