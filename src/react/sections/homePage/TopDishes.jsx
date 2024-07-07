'use client'


import styles from '../../../styles/sectionsStyles/homePageStyles/TopDishes.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import dishes from '../../../data/dishes.js';
import DishesCard from '@/react/components/DishesCard';
import ArrowView from '@/react/components/ArrowView';

const TopDishes = () => {

 const limitedDishes = dishes.slice(0, 5); //В этом коде создается новая переменная limitedDishes, которая содержит только первые 5 элементов из массива dishes. Именно этот массив затем используется для рендеринга карточек блюд.

    return (
        <section className={styles['top-dishes']}>

            <div className='container'>
                <div className={styles['top-dishes__wrapper']}>
                    <div className={styles['top-dishes__inner']}>
                        <h2 className='section-title-second'>Our Top <span className='accent'>Dishes</span></h2>
                    
                        <div className={styles['top-dishes__cards']}>
    
                            {limitedDishes.map((dish, index) => (
                                <DishesCard
                                    key={index}
                                    name={dish.name}
                                    status={dish.status}
                                    rating={dish.rating}
                                    time={dish.time}
                                    price={dish.price}
                                    image={dish.image}
                                />
                            ))}
                        </div>
    
                        <div className={styles['top-dishes__wrapper-link']}>
                            <ArrowView/>
                        </div>

                    </div>
                    <hr className='section-line'/>
                </div>
        </div>
        </section>
    )
}

export default TopDishes
