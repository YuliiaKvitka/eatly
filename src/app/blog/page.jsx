// src/app/blog/page.jsx
'use client'
import BlogList from "../blog/BlogList.jsx";
import styles from '../../styles/sectionsStyles/blogPage/BlogPage.module.scss'
import Accordion from "@/react/components/Accordion.jsx";
import { metadata } from "./constants.js";
import { useEffect } from "react";
import Subscribe from "@/react/sections/homePage/Subscribe.jsx";
import Breadcrumbs from "@/react/components/Breadcrumbs.jsx";



export default function BlogPage() {

  useEffect(() => {
    document.title = `${metadata.title} - Eatly`;
    document.querySelector('meta[name="description"]').setAttribute("content", metadata.description);
  }, []);
  
  return (
    <>
      <Breadcrumbs />
        <div className={styles['blog']}>
        
                <h1 className="visually-hidden">Blog</h1>
          
        <div className={styles['blog__subscribe-blog']}>
          <Subscribe/>
        </div>
                  
                <div className={styles['blog__wrapper-posts']}>
                  <div className={styles['blog__title']}>
                    <h2 className="section-title-second ">Latest <span className="accent">Articles</span></h2>
                  </div>
                  <BlogList />
                </div>
            
                <div className={styles['blog__wrapper-accordion']}>
                  
                  <Accordion/>
                </div>
              </div>
    </>
      
  );
}




