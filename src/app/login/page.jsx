'use client'

import Link from 'next/link';
import styles from '../../styles/componentsStyles/SignIn.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true); // Управляем режимом внутри компонента
  const router = useRouter(); // Инициализация useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, password };

    try {
      const response = await fetch(isLoginMode ? '/login' : '/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(isLoginMode ? 'Успешный вход:' : 'Успешная регистрация:', data.message);
      } else {
        const errorData = await response.json();
        console.error('Ошибка:', errorData.error || 'Unknown error');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onForgotPassword = () => {
    router.push('/forgot-password'); // Переход на страницу восстановления пароля
  };

  const toggleAuthMode = () => {
    setIsLoginMode(!isLoginMode);
    if (isLoginMode) {
      router.push('/register');
    } else {
      router.push('/login');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles['title']}>{isLoginMode ? 'Sign In To Eatly' : 'Sign Up To Eatly'}</h2>
      <div className={styles['wrapper']}>
        <div className={styles['soc1al-buttons']}>
          <button className={styles['google-button']}>
            <Image src='/assets/modal/google-logo.png' alt='' width={19} height={21} layout='intrinsic' />
          </button>
          <button className={styles['apple-button']}>
            <Image src='/assets/modal/apple-logo.png' alt='' width={19} height={21} layout='intrinsic' />
          </button>
        </div>
        <p className={styles['or-text']}>OR</p>
      </div>
      {/* --------------- form ---------------------------- */}
      <form className={styles['auth-form']} onSubmit={handleSubmit}>
        {!isLoginMode && (
          <div className={styles['form-group']}>
            <label htmlFor="name" className='visually-hidden'>Name</label>
            <input
              className={styles['form-input']}
              type="text"
              id="name"
              name="name"
              placeholder="NAME"
              required
              autoComplete="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setActive(true); 
              }}
              onBlur={() => setActive(false)} 
            />
            <button type="button" className={styles['input-icon']}>
              <Image src={`/assets/modal/${isActive ? 'user-active.png' : 'user.png'}`} alt='' width={20} height={23} layout='intrinsic' />
            </button>
          </div>
        )}
        <div className={styles['form-group']}>
          <label htmlFor="email" className='visually-hidden'>Email</label>
          <input
            className={styles['form-input']}
            type="email"
            id="email"
            name="email"
            placeholder="EMAIL"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setActive(true);
            }}
            onBlur={() => setActive(false)}
          />
          <button type="button" className={styles['input-icon']}>
            <Image src={`/assets/modal/${isActive ? 'email-active.png' : 'email.png'}`} alt='' width={23} height={18} layout='intrinsic' />
          </button>
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password" className='visually-hidden'>Password</label>
          <input
            className={styles['form-input']}
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="PASSWORD"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setActive(true);
            }}
            onBlur={() => setActive(false)}
          />
          <button type="button" className={styles['input-icon']}>
            <Image src={`/assets/modal/${isActive ? 'password-active.png' : 'password.png'}`} alt='' width={19} height={24} layout='intrinsic' />
          </button>
          <button type="button" className={styles['toggle-password']} onClick={togglePasswordVisibility}>
            <Image src='/assets/modal/eye.png' alt='' width={22} height={20} layout='intrinsic' />
          </button>
        </div>

        {isLoginMode && (
          <div className={styles['forgot-password']}>
            <a href="#" onClick={(e) => {
              e.preventDefault();
              onForgotPassword();
              console.log('Переключение на модальное окно сброса пароля');
            }}>Forgot Password?</a>
          </div>
        )}
        <button type="submit" className={styles['submit-button']}>{isLoginMode ? 'Sign In' : 'Sign Up'}</button>
      </form>

      <div className={styles['toggle-auth-mode']}>
        <p>
          {isLoginMode ? 'Create A New Account? ' : 'Already Have An Account? '}
          <Link
            href='#'
            onClick={(e) => {
              e.preventDefault();
              toggleAuthMode();
            }}
            className={styles['toggle-auth-link']}
          >
            {isLoginMode ? 'Sign Up' : 'Log In'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;


