'use client'

import React, { useState } from 'react';
import styles from '../../../styles/sectionsStyles/pricing/PricingCard.module.scss';
import Image from 'next/image';

const PricingCard = ({ plan, price, description, features }) => {
    const [showFeatures, setShowFeatures] = useState(false);

    const toggleFeatures = () => {
        setShowFeatures(!showFeatures);
    };

    return (
        <div className={styles.card}>
        <h3>{plan}</h3>
        <div className={styles.price}>
            <span className={styles.currency}>$</span>
            <span className={styles.amount}>{price}</span>
            <span className={styles.period}>/month</span>
        </div>

            <hr className={styles['line']} />

            <p className={styles.description}>{description}</p>
            
            <button className={styles.button}>
                {plan === 'Basic' ? 'START FREE' : 'START PRO'}
            </button>
            
        <div className={styles.featuresToggle} onClick={toggleFeatures}>
            <span>See features</span>
                <Image
                    src={showFeatures ? '/assets/pricing/up-arrow.png' : '/assets/pricing/down-arrow.png'}
                    alt='Toggle features'
                    width={12}
                    height={6}
                />
                
        </div>
        {showFeatures && (
            <ul className={styles.features}>
            {features.map((feature, index) => (
                <li key={index}>
                    <Image src='/assets/pricing/tick.png' alt='' width={19} height={19}/>
                {feature}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default PricingCard;
