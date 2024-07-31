'use client'
import FormSubscribe from '@/react/components/FormSubscribe';
import styles from '../../../styles/sectionsStyles/homePageStyles/Subscribe.module.scss';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Subscribe = () => {

    const controls = useAnimation();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3, // Процент видимости элемента для активации анимации
    });

    useEffect(() => {
        if (inView) {
        controls.start('visible');
        }
    }, [controls, inView]);
        
        const textVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' , delay: 0.5 } }
    };

    const imageVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut', delay: 1 } }
    };

    return (
        <section className={styles['subscribe']}>
        <div className="container start">
            <div ref={ref} className={styles["subscribe__inner"]}>
            <h2 className='visually-hidden'>Subscribe</h2>
        <motion.span
            className={styles['subscribe__action']}
            initial="hidden"
            animate={controls}
            variants={textVariants}
        >
            GET 50%
        </motion.span>
            <div className={styles['subscribe__form']}>
                <FormSubscribe />
            </div>
            <motion.div
                className={styles['subscribe__image']}
                initial="hidden"
                animate={controls}
                variants={imageVariants}
                layout
            />
            </div>
        </div>
        </section>
    );
};

export default Subscribe;

