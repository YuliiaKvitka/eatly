'use client'


import styles from '../../../styles/sectionsStyles/homePageStyles/TopDishes.module.scss';
import dishes from '../../../data/dishes.js';
import DishesCard from '@/react/components/DishesCard';
import ArrowView from '@/react/components/ArrowView';
import { useInView } from 'react-intersection-observer';

const TopDishes = () => {

    const { ref, inView } = useInView({
    triggerOnce: true,  // Анимация срабатывает только один раз
    threshold: 0.1,     // Процент видимости элемента для срабатывания анимации
    });

    const limitedDishes = dishes.slice(0, 5); //В этом коде создается новая переменная limitedDishes, которая содержит только первые 5 элементов из массива dishes. Именно этот массив затем используется для рендеринга карточек блюд.

    return (
        <section className={styles['top-dishes']}>

            <div className='container'>
                <div className={styles['top-dishes__wrapper']}>
                    <div className={styles['top-dishes__inner']}>
                        <div className={styles['top-dishes__title']}> <h2  ref={ref} className={`${styles.title} section-title-second ${inView ? styles.fadeIn : ''}`}>Our Top <span className='accent'>Dishes</span></h2></div>
                    
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
                    <hr className={`${styles['line']} section-line`}/>
                </div>
            </div>
        </section>
    )
}

export default TopDishes
