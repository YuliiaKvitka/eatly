//src/app/page.js
import Hero from "@/react/sections/homePage/Hero";
import styles from "./page.module.scss";
import Statistics from "@/react/sections/homePage/Statistics";
import Features from "@/react/sections/homePage/Features";
import TopRestaurants from "@/react/sections/homePage/TopRestaurants";
import TopDishes from "@/react/sections/homePage/TopDishes";
import Dashboard from "@/react/sections/homePage/Dashboard";
import FormSubscribe from "@/react/components/FormSubscribe";
import Subscribe from "@/react/sections/homePage/Subscribe";
import CustomerSay from "@/react/sections/homePage/CustomerSay";

export default function Home() {
  return (
    <div > 
      
      <Hero />
      <Statistics />
      <Features />
      <TopRestaurants />
      <TopDishes />
      <Dashboard />
      <CustomerSay/>
      <Subscribe/>
    </div>
  );
}
