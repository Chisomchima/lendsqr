import type { NextPage } from 'next'
import Image from 'next/image'
import { RxPerson } from 'react-icons/rx'
import { BsStar, BsStarFill } from 'react-icons/bs'
import styles from '../styles/userInfo.module.scss'
import UserData from '../types'
import currency from 'currency.js';


interface UserInfoProps {
    User: UserData;
}
const UserInfo: React.FC<UserInfoProps> = ({ User }) => {
    return (
        <div className={styles.userInfo}>
            <div className={styles.userInfoWrap}>
                <div className={styles.section}>
                    <span className={styles.sectionName}>Personal Information</span>
                    <div className={styles.content}>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    full Name
                                </span>
                                <span className={styles.value}>
                                    {User.profile.firstName} {User.profile.lastName}
                                </span>
                            </div>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Marital status
                                </span>
                                <span className={styles.value}>
                                    Single
                                </span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Phone Number
                                </span>
                                <span className={styles.value}>
                                    {User.profile.phoneNumber}
                                </span>
                            </div>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Children
                                </span>
                                <span className={styles.value}>
                                    None
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Email Address
                                </span>
                                <span className={styles.value}>
                                    {User.email}
                                </span>
                            </div>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Type of residence
                                </span>
                                <span className={styles.value}>
                                    Parent’s Apartment
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Bvn
                                </span>
                                <span className={styles.value}>
                                    {User.profile.bvn}
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Gender
                                </span>
                                <span className={styles.value}>
                                    {User.profile.gender}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className={styles.section}>
                    <span className={styles.sectionName}>Education and Employment</span>
                    <div className={styles.content}>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    level of education
                                </span>
                                <span className={styles.value}>
                                    {User.education.level}
                                </span>
                            </div>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    office email
                                </span>
                                <span className={styles.value}>
                                    {User.education.officeEmail}
                                </span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    employment status
                                </span>
                                <span className={styles.value}>
                                    {User.education.employmentStatus}
                                </span>
                            </div>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Monthly income
                                </span>
                                <span className={styles.value}>
                                    {currency(User.education.monthlyIncome[0], {
                                        symbol: '₦',
                                        decimal: '.',
                                        separator: ',',
                                        precision: 2,
                                    }).format()} - {currency(User.education.monthlyIncome[1], {
                                        symbol: '₦',
                                        decimal: '.',
                                        separator: ',',
                                        precision: 2,
                                    }).format()}
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    sector of employment
                                </span>
                                <span className={styles.value}>
                                    {User.education.sector}
                                </span>
                            </div>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    loan repayment
                                </span>
                                <span className={styles.value}>
                                    {currency(User.education.loanRepayment, {
                                        symbol: '₦',
                                        decimal: '.',
                                        separator: ',',
                                        precision: 2,
                                    }).format()
                                    }
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Duration of employment
                                </span>
                                <span className={styles.value}>
                                    {User.education.duration}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={styles.section}>
                    <span className={styles.sectionName}>Socials</span>
                    <div className={styles.content}>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Twitter
                                </span>
                                <span className={styles.value}>
                                    {User.socials.twitter}
                                </span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Facebook
                                </span>
                                <span className={styles.value}>
                                    {User.socials.facebook}
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Instagram
                                </span>
                                <span className={styles.value}>
                                    {User.socials.instagram}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <hr />
                <div className={styles.section}>
                    <span className={styles.sectionName}>Guarantor</span>
                    <div className={styles.content}>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    full Name
                                </span>
                                <span className={styles.value}>
                                   {User.guarantor.firstName} {User.guarantor.lastName}
                                </span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Phone Number
                                </span>
                                <span className={styles.value}>
                                {User.guarantor.phoneNumber}
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Email Address
                                </span>
                                <span className={styles.value}>
                                debby@gmail.com
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Relationship
                                </span>
                                <span className={styles.value}>
                                Sister
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <hr />
                <div className={styles.section}>
                    <span className={styles.sectionName}>Guarantor</span>
                    <div className={styles.content}>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    full Name
                                </span>
                                <span className={styles.value}>
                                   {User.guarantor.firstName} {User.guarantor.lastName}
                                </span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Phone Number
                                </span>
                                <span className={styles.value}>
                                {User.guarantor.phoneNumber}
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Email Address
                                </span>
                                <span className={styles.value}>
                                debby@gmail.com
                                </span>
                            </div>
                        </div>

                        <div className={styles.row}>
                            <div className={styles.values}>
                                <span className={styles.name}>
                                    Relationship
                                </span>
                                <span className={styles.value}>
                                Sister
                                </span>
                            </div>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default UserInfo
