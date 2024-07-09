import SliderCustomer from '@/react/components/SliderCustomer'
import styles from '../../../styles/sectionsStyles/homePageStyles/CustomerSay.module.scss'

const CustomerSay = () => {
    return (
        <section className={styles['customer-say']}>
            <div className="container centered"> 
                <div className={styles["customer-say__wrapper"]}>
                <div className={styles["customer-say__inner"]}>
                    <div className={styles['customer-say__title']}> <h2 className='section-title-second'> <span className='accent'>Customer</span> Say</h2></div>
                        
                        <SliderCustomer/>
                    </div>
                    </div>
            </div> 
        
        </section>
    )
}

export default CustomerSay
