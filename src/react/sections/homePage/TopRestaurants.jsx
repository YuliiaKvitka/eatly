'use client'

import RestaurantCard from '@/react/components/RestaurantCard';
import styles from '../../../styles/sectionsStyles/homePageStyles/TopRestaurants.module.scss';
import restaurants from '../../../data/restaurants.js';
import ArrowView from '@/react/components/ArrowView';

const TopRestaurants = () => {


    return (
        <section className={styles['top-restaurants']}>

            <div className='container'>
                <div className={styles['top-restaurants__wrapper']}>
                    <div className={styles['top-restaurants__inner']}>
                        {/* <h2 className='section-title-second'>Our Top
                            <span className='accent'>Restaurants</span>
                        </h2> */}
                    
                        <div className={styles['top-restaurants__cards']}>
    
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
                    {/* <hr className='section-line'/> */}
                </div>
            </div>
        </section>
    )
}

export default TopRestaurants
