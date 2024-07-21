


// src/app/forgot-password/page.jsx
'use client';

import { useState } from 'react';
import styles from '../../styles/componentsStyles/SignIn.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isActive, setActive] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

   const handleSubmit = async (e) => {
    e.preventDefault();
    // Добавьте логику отправки запроса на сброс пароля
    try {
      // Здесь вы можете отправить запрос на сервер
      console.log('A password reset request has been sent for:', email); //Запрос на сброс пароля отправлен для:

      // Установите сообщение после успешной отправки
      setMessage('We have sent password reset instructions to your email.'); //Мы отправили инструкции по сбросу пароля на вашу электронную почту.
      
      // Переход на страницу входа
      setTimeout(() => {
        router.push('/login');
      }, 5000); // Задержка в 2 секунды перед переходом
    } catch (error) {
      console.error('Error sending a password reset request:', error);  //Ошибка при отправке запроса на сброс пароля:
      setMessage('An error occurred while sending the request. Please try again.'); //Произошла ошибка при отправке запроса. Пожалуйста, попробуйте еще раз.
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={`${styles['title']} ${styles['forgot-title']}`}>Forget Password</h2>
      <p className={styles['subtitle']}>Enter Your Mail To Reset</p>
      <form className={styles['auth-form']} onSubmit={handleSubmit}>
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
        <button className={`${styles['submit-button']} ${styles['forgot-btn']}`} type="submit">Verify</button>
      </form>

      {message && <p className={styles['message']}>{message}</p>}

    </div>
  );
};

export default ForgotPassword;
