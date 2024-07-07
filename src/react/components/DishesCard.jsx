import Image from 'next/image';
import styles from '../../styles/componentsStyles/DishesCard.module.scss';
import classNames from 'classnames'; //npm install classnames

const DishesCard = ({ name, status, rating, time, price, image }) => {
    
    // Разделяем цену на целую и дробную части
    const [integerPart, decimalPart] = price.toFixed(2).split('.');
    
    return (
        <div className={styles['card']}>

            <div className={styles['card__aside']}>
                <div className={styles['card__figure']}>
                    <Image className={styles['card__image']} src={image} alt='' width={396} height={176} loading='lazy'/>
                </div>
            </div>

            <div className={styles['card__header']}>
                <h5 className={classNames(styles.card__status, {
                    [styles.healthy]: status === 'Healthy',
                    [styles.trending]: status === 'Trending',
                    [styles.supreme]: status === 'Supreme',
        })} >
                    {status}
                </h5>
                <h4 className={styles['card__title']}>{name}</h4>
            </div>

            <div className={styles['card__footer']}>
                <div className={styles['card__actions']}>

                    <div className={styles['card__footer-top']}>
                        <div className={styles['card__deadline-wrapper']}>
                            <h6 className={styles['card__deadline']}>{time} min</h6>
                            <span className={styles.dot}></span>
                        </div>
    
                        <div className={styles['card__rating-wrapper']}>
                            <Image className={styles['card__rating-image']} src='/assets/restaurant-cards/star.png' alt='' width={26} height={26} />
                            <span className={styles['card__rating']}> {rating}</span>
                        </div>
                    </div>

                    <div className={styles['card__footer-bottom']}>
                        <div className={styles['card__price']}>
                            <h6 className={styles['integer-part']}>${integerPart}.<span className={styles['decimal-part']}>{decimalPart}</span></h6>
                        </div>
                        
                        <div>
                            <Image className={styles['card__bookmark']} src='/assets/dishes/add.png' alt='' width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default DishesCard
