'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../styles/sectionsStyles/blogPage/BlogList.module.scss';
import cards from '../../data/postsCard';

const BlogList = () => {
  const [currentPage, setCurrentPage] = useState(0); // Текущая страница пагинации

  // Количество карточек, которые нужно отображать на одной странице
  const cardsPerPage = 6;

  // Вычисление индекса начала и конца отображаемых карточек
  const startIndex = currentPage * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Данные для текущей страницы
  const currentPosts = cards.slice(startIndex, endIndex);

  // Обработчики для навигации
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className='container centered'>
      <div className={styles.blogPostsContainer}>
        <div className={styles.cardsContainer}>
          {currentPosts.map((card, index) => (
            <motion.div
              className={styles.card}
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link href={`/blog/${card.id}`}>
                <img src={card.image} alt={card.title} className={styles['card__image']} />
              </Link>
              <div className={styles.card__content}>
                <h3 className={styles['card__title']}>{card.title}</h3>
                <div className={styles.card__meta}>
                  <div><img src={card.avatar} alt='' className={styles.card__avatar} /></div>
                  <div><h4 className={styles['card__titleAuthor']}>Written By <span className={styles['card__author']}>{card.author}</span></h4></div>
                  <div ><h5 className={styles['card__date']} >{card.date}</h5></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            disabled={currentPage === 0} // Делаем кнопку назад неактивной, если находимся на первой странице
            onClick={goToPrevPage}
          >
            <img
              src='/assets/posts/arrow.png'
              alt='arrow-prev'
              className={styles['arrow-prev']}
            />
          </button>
          <button
            className={styles.navButton}
            disabled={endIndex >= cards.length} // Делаем кнопку вперед неактивной, если достигнут конец списка
            onClick={goToNextPage}
          >
            <img
              src='/assets/posts/arrow.png'
              alt='arrow-next'
              className={styles['arrow-next']}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogList;

