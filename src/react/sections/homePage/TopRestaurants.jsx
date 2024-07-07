'use client'

import RestaurantCard from '@/react/components/RestaurantCard';
import styles from '../../../styles/sectionsStyles/homePageStyles/TopRestaurants.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import restaurants from '../../../data/restaurants.js';
import { useEffect, useState } from 'react';
import ArrowView from '@/react/components/ArrowView';

const TopRestaurants = () => {

    // const [visibleCount, setVisibleCount] = useState(3);

    // const updateVisibleCount = () => {
    //     if (window.innerWidth <= 480) {
    //         setVisibleCount(3);
    //     } else if (window.innerWidth <= 992) {
    //         setVisibleCount(2);
    //     } else {
    //         setVisibleCount(3);
    //     }
    // };

    // useEffect(() => {
    //     updateVisibleCount(); // Initial check
    //     window.addEventListener('resize', updateVisibleCount);
    //     return () => window.removeEventListener('resize', updateVisibleCount);
    // }, []);


    return (
        <section className={styles['top-restaurants']}>

            <div className='container'>
                <div className={styles['top-restaurants__wrapper']}>
                    <div className={styles['top-restaurants__inner']}>
                        <h2 className='section-title-second'>Our Top <span className='accent'>Restaurants</span></h2>
                    
                        <div className={styles['top-restaurants__cards']}>
    
                            {/* {restaurants.slice(0, visibleCount).map((restaurant, index) => (
                                <RestaurantCard
                                    key={index}
                                    name={restaurant.name}
                                    status={restaurant.status}
                                    rating={restaurant.rating}
                                    time={restaurant.time}
                                    image={restaurant.image}
                                />
                            ))} */}
    
                            {restaurants.map((restaurant, index) => (
                                <RestaurantCard
                                    key={index}
                                    name={restaurant.name}
                                    status={restaurant.status}
                                    rating={restaurant.rating}
                                    time={restaurant.time}
                                    image={restaurant.image}
                                />
                            ))}
                        </div>
    
                        <div className={styles['top-restaurants__wrapper-link']}>
                            <ArrowView />
                        </div>
                    </div>
                    <hr className='section-line'/>
                </div>
        </div>
        </section>
    )
}

export default TopRestaurants
