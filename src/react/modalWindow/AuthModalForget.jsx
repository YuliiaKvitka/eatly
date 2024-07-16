'use client'

import Image from 'next/image'
import styles from '../../styles/modalWindowStyles/AuthModalForget.module.scss'
import Link from 'next/link';
import { useState } from 'react';


const AuthModalForget = ({ isOpen, onClose }) => {

    const [isActive, setActive] = useState(false);
    
    const [email, setEmail] = useState('');

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Логика обработки формы для сброса пароля
        console.log('Email для сброса пароля:', email);
    };
    
    return (
        <div className={styles['modal__overlay']}>
            <div className={styles['modal__content']}>
                <div className={styles['modal__body']}>
                    
{/* ----------------------------modal left ---------------------------------------------- */}
                    <div className={styles['modal__left']}>
                        <div className={styles['modal__header']}>
                        <div className={styles['modal__logo']} onClick={onClose}>
                                <Link href='/'>
                                    <Image src='/assets/logo/logo.png' alt='logo' width={53} height={49} />
                            </Link>
                        </div>
                        </div>  

                        <h2 className={styles['modal__title']}>Forget Password</h2>
                        <p className={styles['modal__text']}>Enter Your Mail To Reset</p>
{/* --------------------------------------------form---------------------------------------------------------- */}
                        <form className={styles['modal__auth-form']} onSubmit={handleSubmit} >

                            <div className={styles['modal__form-group']}>
                                <label htmlFor="email" className='visually-hidden'>Email</label>
                                <input
                                    className={styles['modal__form-input']}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="EMAIL"
                                    required
                                    autoComplete="current-password" // Добавить autocomplete атрибут
                                    value={email}

                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setActive(true); // Установка состояния isActive в true при фокусировке или вводе данных
                                    }}
                                    onBlur={() => setActive(false)} // Сброс состояния isActive в false при потере фокуса 
                                />
                                <button type="button" className={styles['modal__input-icon']} >
                                    <img src={`/assets/modal/${isActive ? 'email-active.png' : 'email.png'}`} alt='' width={23} height={18} />
                                </button>
                            </div>
                            <button type="submit" className={styles['modal__submit-button']}>Verify</button>
                        </form>
{/* ------------------------------------------end form--------------------------------------------------------- */}

                        <footer className={styles['modal__footer']}>
                            <a href="/privacy-policy">Privacy Policy</a>
                            <span>&copy; 2022</span>
                        </footer>
                    </div>
                    {/* -------------------------------------------end modal-left---------------------------------- */}
                    
                    {/* --------------------------------modal right --------------------------------------- */}
                    <div className={styles['modal__right']}>
                        <div className={styles['modal__right-image-content']}>
                            <img src="/assets/modal/modal-right-image.png" alt="Food" />
                        </div>

                            <div className={styles['modal__right-content']}>
                                <h2 className={styles['modal__right-title']}>Find Foods With Love</h2>
                                <p className={styles['modal__right-text']}>Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.</p>
                        </div>
                        <Image src='/assets/modal/indicator.png' alt='' width={52} height={6}/>
                    </div>
{/* ----------------------------------------------------end modal right */}
                </div>

            </div>
        
        </div>
    )
}

export default AuthModalForget
