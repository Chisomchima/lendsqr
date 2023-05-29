import type { NextPage } from 'next'
import Image from 'next/image';
import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/login.module.scss'

const Login: NextPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
    };
    return (
        <div className={styles.containers}>
            <div className={styles.imageContainer}>
                <div style={{
                    position: "absolute",
                    width: "30px",
                    height: "30px",
                    left: "97px",
                    top: "107.67px", display: "flex", alignItems: 'center'
                }}>
                    <Image src="/union.svg" alt="My Image" width={30} height={30} style={{ marginRight: '10px', }} />
                    <Image src="/lendsqr.svg" alt="My Image" width={100} height={30} />
                </div>
                <div style={{ position: 'relative', width: '95%', height: '100%' }}>
                    <Image src="/pablo-sign-in.svg" alt="My Image" layout="fill" objectFit="contain" />
                </div>
            </div>
            <div className={styles.formContainer}>
                <div className={styles.formWrap}>
                    <div className={styles.formHeading}>
                        <h1>Welcome</h1>
                        <span className={styles.dets}>Enter details to login.</span>
                    </div>
                    <div className={styles.formInputs}>
                        <input className={styles.email} type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
                        <div className={styles.passwordInput}>
                            <input
                                className={styles.password}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <span className={styles.show}>show</span>
                        </div>
                        <span className={styles.forgotPassword}>Forgot PASSWORD?</span>
                        <div className={styles.buttonContainer}>
                            <span> LOG IN</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
