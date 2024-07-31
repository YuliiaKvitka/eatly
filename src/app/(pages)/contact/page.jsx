'use client'

import Image from 'next/image';
import styles from '../../../styles/sectionsStyles/contactPage/ContactPage.module.scss'
import AnimatedForm from '@/react/components/AnimatedForm';
import Breadcrumbs from '@/react/components/Breadcrumbs';
import { useEffect } from 'react';
import { metadata } from "./constants.js";

const Contact = () => {

   useEffect(() => {
    document.title = `${metadata.title} - Eatly`;
    document.querySelector('meta[name="description"]').setAttribute("content", metadata.description);
  }, []);
  

    //   const { ref, inView } = useInView({
    // triggerOnce: true,  // Анимация срабатывает только один раз
    // threshold: 0.1,     // Процент видимости элемента для срабатывания анимации
    // });
  return (

    <>
      <Breadcrumbs/>
      <section className={styles['contact']}>
        <h1 className='visually-hidden'>Contact</h1>
        <div className="container">
        
          <div className={styles["contact__inner"]}>
            
          <div className={styles["contact__wrapper-left"]}>
              <span className={styles['contact__text-left']}>Just Contact</span>
              <Image className={styles['contact__wrapper-left-img-desktop']}  src='/assets/contact/arrow.png' alt='arrow' width={336} height={127} />
  
              <span className={styles['contact__text-left-mobile']}>Contact Us</span>
              <Image className={styles['contact__wrapper-left-img-mobile']} src='/assets/contact/arrow-white.png' alt='' width={80} height={85} />
            
            
            <div className={styles["contact__wrapper-left-after"]}>
                <div className={styles['contact__wrapper-image']}><Image src='/assets/contact/mobile-screen.png' alt='mobile screen' width={304} height={609} loading='lazy'/></div>
            </div>
          </div>
  
          <div className={styles["contact__wrapper-right"]}>
            <h2   className= 'section-title-contact'>Customer <span className='accent'>Support</span></h2>
            <div className={styles['contact__contact-form']}>
              <AnimatedForm />
            </div>
            </div>
            
          </div>
        </div>
        
  
        </section>
    </>
  )
}

export default Contact
