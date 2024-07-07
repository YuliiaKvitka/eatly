import Image from 'next/image';
import styles from '../../../styles/sectionsStyles/homePageStyles/Features.module.scss';

const Features = () => {
    return (
        <section className={styles['features']}>
            <div className='container'>
                <div className={styles['features__wrapper']}>
                    <div className={styles["features__inner"]}>
    
                        <div className={styles["features__inner-left"]}>
                            <div className={styles['features__wrapper-image']}>
                                <Image className={styles['features__image']} src='/assets/features/mobile-screen.jpeg' alt='' width={304} height={609} loading='lazy'/>
                            </div>
                        </div>
    
                        <div className={styles['features__inner-right']}>
                            <div className={styles['features__wrapper-content']}>
                                <h2 className='section-title'>Premium <span className='accent'>Quality</span><br />For Your Health</h2>
                                <ul className={styles["features__list"]}>
                                    <li className={`${styles["features__item"]} section-text`}>Premium quality food is made with ingredients that are packed with essential vitamins, minerals.</li>
                                    <li  className={`${styles["features__item"]} section-text`}>These foods promote overall wellness by support healthy digestion and boosting immunity</li>
                                </ul>
                                <div className={styles['features__wrapper-button']}>
                                    <button className={`${styles['features__button']} text-button`} type='button'>Download
                                        <Image className={styles['features__button-arrow']} src='/assets/features/arrow-btn.png' alt='' width={27} height={27}/>
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        
                    </div>
                    <hr className='section-line'/>
                </div>
                
        </div>
        </section>
    )
}

export default Features
