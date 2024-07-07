
import FormSubscribe from '@/react/components/FormSubscribe'
import styles from '../../../styles/sectionsStyles/homePageStyles/Subscribe.module.scss'

const Subscribe = () => {
    return (
        <section className={styles['subscribe']}>
            <div className="container">
                <div className={styles["subscribe__inner"]}>
                    <h2 className='visually-hidden'>Subscribe</h2>
                    <span className={styles['subscribe__action']}>GET 50%</span>
                    <div className={styles['subscribe__form']}><FormSubscribe/></div>
                </div>
            </div>
        
        </section>
    )
}   

export default Subscribe
