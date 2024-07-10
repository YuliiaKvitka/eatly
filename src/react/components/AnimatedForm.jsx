'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/componentsStyles/AnimatedForm.module.scss';

const AnimatedForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Остановка стандартного действия отправки формы

        // Включение состояния отправки
        setIsSubmitting(true);

        try {
            // Здесь может быть логика отправки данных (например, AJAX запрос)
            await sendFormDataToServer();

            // Установка состояния "отправлено"
            setIsSubmitted(true);

            // Сброс формы и состояний после успешной отправки
            resetForm();
        } catch (error) {
            console.error('Failed to submit the form:', error);
            // Обработка ошибок при отправке, если необходимо
        } finally {
            // Выключение состояния отправки после завершения запроса
            setIsSubmitting(false);
        }
    };

    const sendFormDataToServer = async () => {
        // Здесь может быть реализация отправки данных на сервер
        return new Promise((resolve, reject) => {
            // Пример задержки перед "отправкой"
            setTimeout(() => {
                resolve();
            }, 2000); // Симулируем задержку отправки на 2 секунды
        });
    };

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
        setIsSubmitted(true); // Установка состояния "отправлено" здесь для тестирования
        // setIsSubmitted(false); // Раскомментируйте эту строку для реального сброса формы
    };


    return (
        <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <form className={styles.form} onSubmit={handleSubmit}>

                <motion.div
                    className={`${styles.formGroup} ${name ? styles.active : ''}`}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <label htmlFor="name">full name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </motion.div>

                <motion.div
                    className={`${styles.formGroup} ${email ? styles.active : ''}`}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <label htmlFor="email">enter your email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </motion.div>

                <motion.div
                    className={`${styles.formGroup} ${message ? styles.active : ''}`}
                    whileFocus={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    <label htmlFor="message">your message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={handleMessageChange}
                        required
                    />
                </motion.div>

                <motion.button
                    className={styles.submitButton}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    disabled={isSubmitting}
                    type="submit" // Установка типа кнопки submit
                >
                    {isSubmitting ? 'sending...' : (isSubmitted ? 'sent!' : 'send now')}
                </motion.button>

                {isSubmitted && <p className={styles.messageSent}>Message sent!</p>}
                
            </form>
        </motion.div>
    );
};

export default AnimatedForm;
