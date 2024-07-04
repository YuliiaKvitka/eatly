//src/app/page.js
import Hero from "@/react/sections/homePage/Hero";
import styles from "./page.module.css";
import Statistics from "@/react/sections/homePage/Statistics";

export default function Home() {
  return (
    <div > 
      <Hero />
      <Statistics/>
    </div>
  );
}
