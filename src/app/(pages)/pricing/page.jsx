
'use client'
import Image from 'next/image'
import styles from '../../../styles/sectionsStyles/pricing/Pricing.module.scss'
import PricingSection from '@/react/sections/pricing/PricingSection'
import Dashboard from '@/react/sections/homePage/Dashboard'
import CustomerSay from '@/react/sections/homePage/CustomerSay'
import Breadcrumbs from '@/react/components/Breadcrumbs'
import { useEffect } from 'react'
import { metadata } from "./constants.js";

const Pricing = () => {

     useEffect(() => {
    document.title = `${metadata.title} - Eatly`;
    document.querySelector('meta[name="description"]').setAttribute("content", metadata.description);
  }, []);
  return (
    <section className={styles['pricing']}>
      <Breadcrumbs/>
      <div className='container'>
        <h1 className='visually-hidden'> Pricing</h1>

      <div className={styles['pricing__inner']}>
          <div className={styles['pricing__container-first']}>
            <div className={styles['pricing__header']}>
              <h2 className={styles['pricing__header-title']}>Our Pricing</h2>
              <div className={['pricing__header-image']}>
                <Image src='/assets/pricing/dashboard-image.png' alt='' width={887} height={631} loading='lazy' layout='responsive' /></div>
            </div>
          </div>
  
          <div className={styles['pricing__container-second']}>
            <PricingSection/>
          </div>

          <div className={styles['pricing__dashboard']}>
            <Dashboard />
          </div>
          <div className={styles['pricing__customer-say']}>
            <CustomerSay />
          </div>

      </div>
      </div>
    </section>
  )
}

export default Pricing
