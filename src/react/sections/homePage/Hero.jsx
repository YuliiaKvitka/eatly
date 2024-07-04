import Image from 'next/image'
import styles from '../../../styles/sectionsStyles/homePageStyles/Hero.module.scss'

const Hero = () => {
    return (
        <div className={styles['hero']}>

           <div className='container'>
                <div className={styles['hero__inner']}>
                    <div className={styles['hero__wrapper-left']}>
                        <div className={styles['hero__wrapper-subtitle']}>
                            <hr/>
                            <p className={`${styles['hero__subtitle']} hero-subtitle`}>OVER 1000 USERS</p>
                        </div>
                        <h1 className={`${styles['hero__title']} hero-title`}>Enjoy Foods All Over The <span>World</span></h1>
                        <div className={`${styles['hero__text']} text`}>
                            <p>EatLy help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span>$20 bonus</span>.</p>
                        </div>
                        <div className={styles['hero__wrapper-buttons']}>
                            <button className={styles["hero__btn-get-started"]}>Get Started</button>
                            <button className={styles["hero__btn-go-pro"]}>Go Pro</button>
                        </div>
    
                        <div className={styles['hero__rating']}>
                            <Image className={styles['hero__rating-trustpilot']} src='/assets/hero/trustpilot.png' alt='star' width={123} height={30} />
                            <Image className={styles['hero__rating-stars']} src='/assets/hero/star.png' alt='star' width={96} height={16} />
                            <span>4900+</span>
                        </div>
                    </div>
        
                    <div className={styles['hero__wrapper-right']}>
        
                        <div className={styles['hero__ellipse-container']}>
                            <div className={styles["hero__ellipse"]}>
                                <Image src="/assets/hero/food-image.png" width={430} height={444} loading='lazy' alt="Food Image" className={styles["food-image"]} />
                                
                            </div>
                            <Image src="/assets/hero/graph.png" alt="graph-image" className={styles["graph-image"]} width={208} height={206} />
                            <Image src='/assets/hero/illustration-02.png' alt='' className={styles['stroke-image']} width={38} height={33}/>
                            
                            <Image src="/assets/hero/1st.png" alt="note-image" className={styles["note-image"]} width={329} height={90} />
                            <Image src='/assets/hero/illustration-01.png' alt='' className={styles['wave-image']} width={38} height={33} />
                            <Image src='/assets/hero/arrow.png' alt='' width={101} height={98} className={styles['arrow-image']} />
                            
                        </div>
        
        
                    </div>
                </div>
    
           </div>
        </div>
    )
}

export default Hero
