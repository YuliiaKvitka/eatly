// src/app/blog/page.jsx
'use client'
import BlogList from "../blog/BlogList.jsx";
import SubscribeBlog from "@/react/sections/blogPage/SubscribeBlog.jsx";
import styles from '../../styles/sectionsStyles/blogPage/BlogPage.module.scss'
import Accordion from "@/react/components/Accordion.jsx";
import { metadata } from "./constants.js";
import { useEffect } from "react";



export default function BlogPage() {

  useEffect(() => {
    document.title = `${metadata.title} - Eatly`;
    document.querySelector('meta[name="description"]').setAttribute("content", metadata.description);
  }, []);
  
  return (

      <div className={styles['blog']}>
            <h1 className="visually-hidden">Blog</h1>
      
            <SubscribeBlog />
              
            <div className={styles['blog__wrapper-posts']}>
              <div className={styles['blog__title']}>
                <h2 className="section-title-second">Latest <span className="accent">Articles</span></h2>
              </div>
              <BlogList />
            </div>
        
            <div className={styles['blog__wrapper-accordion']}>
              <div className={styles['blog__accordion-title']}>
                <h2 className="section-title-second">Frequently Asked <span className="accent">Questions</span></h2>
              </div>
              <Accordion/>
            </div>
          </div>
  );
}




