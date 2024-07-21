'use client'

//src/app/page.js
import Hero from "@/react/sections/homePage/Hero";
import Statistics from "@/react/sections/homePage/Statistics";
import Features from "@/react/sections/homePage/Features";
import TopRestaurants from "@/react/sections/homePage/TopRestaurants";
import TopDishes from "@/react/sections/homePage/TopDishes";
import Dashboard from "@/react/sections/homePage/Dashboard";
import Subscribe from "@/react/sections/homePage/Subscribe";
import CustomerSay from "@/react/sections/homePage/CustomerSay";
import styles from './page.module.scss'
import { useInView } from 'react-intersection-observer';

export default function Home() {

   const { ref, inView } = useInView({
    triggerOnce: true,  // Анимация срабатывает только один раз
    threshold: 0.1,     // Процент видимости элемента для срабатывания анимации
    });
  return (
    <div > 
      <Hero />
      <Statistics />
      <Features />
      <div className={styles['top-restaurants']}>
        <h2 ref={ref} className={`${styles.title} section-title-second ${inView ? styles.fadeIn : ''}`}>Our Top 
            <span className='accent'> Restaurants</span>
        </h2>
      </div>
      <TopRestaurants />
      <TopDishes />
      <Dashboard /> 
      <CustomerSay/>
      <Subscribe/>
    </div> 
  );
}

