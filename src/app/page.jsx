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

export default function Home() {
  return (
    <div > 
      <Hero />
      <Statistics />
      <Features />
      <div className={styles['top-restaurants']}>
        <h2 className='section-title-second'>Our Top 
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
