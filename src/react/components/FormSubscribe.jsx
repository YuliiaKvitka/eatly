'use client'
// npm install framer-motion
import { motion, useAnimation } from 'framer-motion';
// npm install react-intersection-observer
import styles from '../../styles/componentsStyles/FormSubscribe.module.scss'; 

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


const FormSubscribe = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Процент видимости элемента для активации анимации
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.form
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={formVariants}
      transition={{ duration: 0.5 }}
    >
      <input
        className={styles['input__email']}
        id="useremail"
        type="email"
        placeholder="Enter Your Email Address"
        required
      />
      <motion.input
        className={styles['input__submit']}
        id="submit"
        type="submit"
        value="Subscribe"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      />
    </motion.form>
  );
};

export default FormSubscribe;



