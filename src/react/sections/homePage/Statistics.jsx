import Image from 'next/image'
import styles from '../../../styles/sectionsStyles/homePageStyles/Statistics.module.scss'

const Statistics = () => {
    return (
        <section className={styles['statistics']}>
            
                <div className="container">
                    <div className={styles["statistics__inner"]}>
                        <ul className={styles["statistics__list"]}>
    
                            <li className={styles["statistics__item"]}>
                                <span>10K+</span>
                                <p>Satisfied Costumers</p>
                                <p>All Great Over The World </p>
                            </li>
    
                            <li className={styles["statistics__item"]}>
                                <span>4M</span>
                                <p>Healthy Dishes Sold</p>
                                <p>Including Milk Shakes Smooth</p>
                            </li>
    
                            <li className={styles["statistics__item"]}>
                                <span>99.99%</span>
                                <p>Reliable Customer Support</p>
                                <p>We Provide Great Experiences</p>
                            </li>
    
                        </ul>
                    </div>
                </div>
            </section>
    )
}

export default Statistics


