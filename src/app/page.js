//src/app/page.js
import Hero from "@/react/sections/homePage/Hero";
import styles from "./page.module.css";
import Statistics from "@/react/sections/homePage/Statistics";
import Features from "@/react/sections/homePage/Features";

export default function Home() {
  return (
    <div > 
      <Hero />
      <Statistics />
      <Features/>
    </div>
  );
}
