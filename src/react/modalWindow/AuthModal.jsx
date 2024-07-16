'use client'

import Image from 'next/image'
import styles from '../../styles/modalWindowStyles/AuthModal.module.scss'
import Link from 'next/link';
import { useState } from 'react';
import { loginUser } from '../../app/api/auth/login.js';
import { registerUser } from '../../app/api/auth/register.js';

const AuthModal = ({ isOpen, onClose, mode, setMode,  onForgotPassword  }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
     const [isActive, setActive] = useState(false);

    const [showPassword, setShowPassword] = useState(false); // Состояние для отображения пароля

    const [isForgotPassword, setIsForgotPassword] = useState(false); // Состояние для отображения модального окна сброса пароля



    if (!isOpen) return null;

    const isLoginMode = mode === 'login';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, password };

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Успешная регистрация:', data.message);
                onClose(); // Закрываем модальное окно после успешной регистрации
            } else {
                const errorData = await response.json();
                console.error('Ошибка во время регистрации:', errorData.error || 'Unknown error');
            }
        } catch (error) {
            console.error('Ошибка во время регистрации:', error);
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); // Изменяем состояние для отображения пароля
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

                        <h2 className={styles['modal__title']}>{isLoginMode ? 'Sign In To Eatly' : 'Sign Up To Eatly'}</h2>
                        <div className={styles['modal__soc1al-buttons']}>
                            <button className={styles['modal__google-button']}>
                                <Image src ='/assets/modal/google-logo.png' alt='' width={19} height={21}/>
                                </button>
                            <button className={styles['modal__apple-button']}>
                                <Image src='/assets/modal/apple-logo.png' alt='' width={19} height={21} />
                            </button>
                        </div>
                        <p className={styles['modal__or-text']}>OR</p>
{/* --------------------------------------------form---------------------------------------------------------- */}
                        <form className={styles['modal__auth-form']} onSubmit={handleSubmit}>
                            {!isLoginMode && (
                            <div className={styles['modal__form-group']}>
                                <label htmlFor="name" className='visually-hidden'>Name</label>
                                    <input
                                        className={styles['modal__form-input']}
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="NAME"
                                        required
                                        autoComplete="current-password" // Добавить autocomplete атрибут
                                        value={name}
                                        onChange={(e) => {
                                        setName(e.target.value);
                                        setActive(true); // Установка состояния isActive в true при фокусировке или вводе данных
                                    }}
                                    onBlur={() => setActive(false)} // Сброс состояния isActive в false при потере фокуса 
                                    />
                                    <button type="button" className={styles['modal__input-icon']} >
                                    <img src={`/assets/modal/${isActive ? 'user-active.png' : 'user.png'}`} alt='' width={20} height={23} />
                                </button>
                            </div>
                            )}

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

                            <div className={styles['modal__form-group']}>
                                <label htmlFor="password" className='visually-hidden'>Password</label>
                                <input
                                    className={styles['modal__form-input']}
                                    type={showPassword ? 'text' : 'password'} // Изменяем тип поля ввода
                                    id="password"
                                    name="password"
                                    placeholder="PASSWORD"
                                    required
                                    autoComplete="current-password" // Добавить autocomplete атрибут
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setActive(true); // Установка состояния isActive в true при фокусировке или вводе данных
                                    }}
                                    onBlur={() => setActive(false)} // Сброс состояния isActive в false при потере фокуса 
                                />
                                <button type="button" className={styles['modal__input-icon']} >
                                    <img src={`/assets/modal/${isActive ? 'password-active.png' : 'password.png'}`} alt='' width={19} height={24} />
                                </button>
                                
                                <button type="button" className={styles['modal__toggle-password']} onClick={togglePasswordVisibility}>
                                    <Image src='/assets/modal/eye.png' alt='' width={22} height={20} />
                                </button>
                            </div>

                            {isLoginMode && (
                                <div className={styles['modal__forgot-password']}>
                                <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        onForgotPassword(); // Переключение на модальное окно сброса пароля
                                    }}>Forgot Password?</a>
                                </div>
                            )}

                            <button type="submit" className={styles['modal__submit-button']}>{isLoginMode ? 'Sign In' : 'Sign Up'}</button>
                        </form>
{/* ------------------------------------------end form--------------------------------------------------------- */}

                        <div className={styles['modal__toggle-auth-mode']}>
                            <p>
                                {isLoginMode ? 'Create A New Account? ' : 'Already Have An Account? '}
                                <Link
                                href='##'
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMode(isLoginMode ? 'signup' : 'login');
                                }}
                                className={styles['modal__toggle-auth-link']}
                                >
                                {isLoginMode ? 'Sign Up' : 'Log In'}
                                </Link>
                            </p>
                        </div>

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

export default AuthModal
