import Accordion from '@/react/components/Accordion'
import styles from '../../styles/sectionsStyles/menuPage/MenuPage.module.scss'
import Image from 'next/image'
import TopRestaurants from '@/react/sections/homePage/TopRestaurants'

const Menu = () => {
    return (
        <div className={styles['menu-page']}>
            <div className='container'>
                <div className={styles['menu-page__inner']}>
                    <h1 className='visually-hidden'>Menu Page</h1>
        
                    <div className={styles['menu-page__card']}>
                        <Image className={styles['menu-pag__card-image']}    src='/assets/menu-page/card-image.png' alt='' width={1237} height={378} loading='lazy'  layout='responsive'/>
                        <div className={styles['menu-page__card-content']}>
                            <h2 className={styles["menu-page__card-title"]}>The Chicken King</h2>
                            <div className={styles['menu-page__card-wrapper']}>
                                <span className={styles['menu-page__time']}>24min</span>
                                <span className={styles['menu-page__card-dot']}></span>
                                <Image className={styles['menu-page__star']} src='/assets/restaurant-cards/star.png' alt='' width={35} height={35}  />
                                <span className={styles['menu-page__rating']}> 4.0</span>
                            </div>
                            <div>
                            <Image className={styles['menu-page__bookmark']} src='/assets/restaurant-cards/bookmark.png' alt='' width={62} height={62} />
                        </div>
                        </div>
                        
                    </div>
    
                    <div className={styles['menu-page__popular']}>
                            <h2>Popular 🔥</h2>
                            <TopRestaurants/>
                    </div>
    
                    <div className={`${styles['menu-page__chicken-vegetables']} ${styles['menu-page__chicken']}`}>
                        <h2>Chicken Vegetables</h2>
                        <TopRestaurants/>
                    </div>
                    <hr className='section-line line'></hr>
                </div>
            </div>
            <div className={styles['menu-page__inner-accordion']}>
                <Accordion/>
                
            </div>
        </div>
    )
}

export default Menu
