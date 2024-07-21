// src/app/blog/[slug]/page.jsx

'use client'; // Для клиентского компонента

import { useEffect, useState } from 'react';
import posts from '../../../data/posts'; // Используем объединенный массив постов
import styles from '../../../styles/sectionsStyles/blogPage/Post.module.scss'
import Link from 'next/link';
import cards from '../../../data/postsCard'
import { motion } from 'framer-motion';

const BlogPostPage = ({ params: { id } }) => {
  const [post, setPost] = useState(null);
  const [nextPostId, setNextPostId] = useState(null);

  useEffect(() => {
    if (id) {
      console.log('Id value:', id); // Лог для проверки
      const foundPost = posts.find((post) => post.id === parseInt(id)); // Преобразуем id в число
      console.log('Found post:', foundPost); // Лог для проверки
      setPost(foundPost);

      // Определяем следующий пост
      const currentIndex = posts.findIndex((post) => post.id === parseInt(id));
      const nextIndex = (currentIndex + 1) % posts.length; // Обеспечиваем цикличность
      setNextPostId(posts[nextIndex].id);
    }
  }, [id]);

  if (!id) {
    console.log('Slug is not defined yet');
    return <div>Loading...</div>;
  }

  if (!post) {
    console.log('Post not found');
    return <div>Post not found</div>;
  }


  return (
    <div className={styles['post']}>
      <div className='container'>

        <div className={styles['post__inner']}>
          <h1 className='visually-hidden'> Post {id}</h1>

          <h2 className='post-title'>{post.title}</h2>
          
          <div className={styles['post__author']}>
            <img className={styles['post__avatar']} src={post.avatar} alt='' />
            <div className={styles['post__wrapper-author']}>
              <span className={styles['post-written']}>Written By</span>
              <p className='post-author'>{post.author}</p>
            </div>
        </div>
          
          <div className={styles['post__image']}>
            <img src={post.image} alt={post.title} />
          </div>

          <div className={styles['post__wrapper']}>

            <article className={styles['post__container']}>

              <div className={styles['post__article']}>
                <h3 className='article-title'>{post.articleTitle1}</h3>
                <p className='post-description'>{post.description1}</p>
              </div>
    
              <div className={styles['post__article']}>
                <ul className={styles['post__list']}>
                  <li className='post-description'>{post.item1}</li>
                  <li className='post-description'>{post.item2}</li>
                </ul>
              </div>
              
              <div className={styles['post__article']}>
                <h3 className='article-title'>{post.articleTitle2}</h3>
                <p className='post-description'>{post.description2}</p>
              </div>
    
              <div className={styles['post__article']}>
                <h3 className='article-title'>{post.articleTitle3}</h3>
                <p className='post-description'>{post.description3}</p>
              </div>
    
              <Link href={`/blog/${nextPostId}`} className={styles['post__button']}>
                Next article
                <img src='/assets/posts/arrow-btn.png' alt=''/>
              </Link>
            </article>
  
            <aside className={styles['post__aside']}>
              <div className={styles['post__aside-title']}><h4 className='sidebar-title'>Top Articles</h4></div>
{/* --------------------------------------- */}
              
                <div className={styles.cardsContainer}>
          {cards.slice(0, 3).map((card, index) => (
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

{/* ----------------------------------------------- */}

            </aside>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default BlogPostPage;






