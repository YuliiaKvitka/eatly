import Image from 'next/image';
import styles from '../../../styles/sectionsStyles/pricing/PricingSection.module.scss';

const PricingSection = () => {
  return (
    <section className={styles['pricing']}>
      <div className={styles['pricing__container']}>

        <div className={styles['pricing__header-inner']}>

          <div className={styles['pricing__header']}>
            <h2 className={styles['pricing__title']}>Pricing</h2>
            <p className={styles['pricing__subtitle']}>Affordable Basic<br/> & Pro Plans</p>
          </div>

          <div className={styles['pricing__plans']}>

            <div className={styles['pricing__plan']}>
              <h3>Basic</h3>
              <p className={styles['pricing__subtitle']}>Completely 100% Free Plan</p>
              
            </div>
            <div className={styles['pricing__plan']}>
              <h3>Premium</h3>
              <p className={styles['pricing__subtitle']}>Amazing Premium Features Plan</p>
            </div>
        </div>

        </div>

        <hr />
        
        <div className={styles['pricing__header-inner']}>
          <div className={styles['pricing__header']}></div>
        <div className={styles['pricing__plans-price']}>
            <div className={styles['pricing__price']}><span className={styles['pricing__sign']}>$</span>0<span className={styles['pricing__month']}>/month</span></div>
            
            <div className={styles['pricing__price']}>
              <span className={styles['pricing__sign']}>$</span>
              <div className={styles['pricing__amount']}>
                5
                <span className={styles['pricing__month']}>/month</span>
              </div>
            </div>
        </div>
        </div>

        <hr/>

        <div className={styles['pricing__core-features']}>
          <h3 className={styles['pricing__core-features-title']}>Core features</h3>
          <ul className={styles['pricing__list']}>
            <li className={styles['pricing__item']}>
              Support 24/7
              <div className={styles['pricing__ticks']}>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
              </div>
            </li>
            <li className={styles['pricing__item']}>
              Fast Delivery
              <div className={styles['pricing__ticks']}>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
              </div>
            </li>
            <li className={styles['pricing__item']}>
              20% Off Food Deals
             <div className={styles['pricing__ticks']}>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
             </div>
            </li>
            <li className={styles['pricing__item']}>
              Transaction History
              <div className={styles['pricing__ticks']}>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
              </div>
            </li>
            <li className={styles['pricing__item']}>
              Weekend Deals
              <div className={styles['pricing__ticks']}>
                <Image src='/assets/pricing/cross.png' alt='' width={35} height={35}/>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
              </div>
            </li>
            <li className={styles['pricing__item']}>
              Dashboard Access
              <div className={styles['pricing__ticks']}>
                <Image src='/assets/pricing/cross.png' alt='' width={35} height={35}/>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
              </div>
            </li>
            <li className={styles['pricing__item']}>
              Premium Group Access
              <div className={styles['pricing__ticks']}>
                <Image src='/assets/pricing/cross.png' alt='' width={35} height={35}/>
                <Image src='/assets/pricing/tick.png' alt='' width={35} height={35}/>
              </div>
            </li>
          </ul>
        </div>

        <hr />
        
        <div className={styles['pricing__buttons']}>
          <div></div>
          <div className={styles['pricing__buttons-wrapper']}>
            <button className={styles['pricing__btn']}>START FREE</button>
            <button className={styles['pricing__btn']}>START PRO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

