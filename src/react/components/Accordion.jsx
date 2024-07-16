
"use client"
import { useState } from 'react';
import styles from '../../styles/componentsStyles/Accordion.module.scss';
import items from '../../data/items.js'

const Accordion = () => {
    const [expanded, setExpanded] = useState(null);

    const toggleAccordion = (index) => {
        setExpanded(expanded === index ? null : index);
    };



    return (
        <div className={styles['accordion']}>
            <div className={styles['accordion__title-main']}>
                <h2 className="section-title-second">Frequently Asked <span className="accent">Questions</span></h2>
            </div>
            <div className={styles['accordion__container']}>
                {items.map((item, index) => (
                    <div className={styles["accordion__item"]} key={index}>
                        <button className={styles['accordion__button']}
                            id={`accordion-button-${index}`} 
                            aria-expanded={expanded === index}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className={styles["accordion__title"]}>{item.title}</span>
                            <span className={styles["accordion__icon"]} aria-hidden="true"></span>
                        </button>
                        <div className={`${styles["accordion__content"]} ${expanded === index ? styles["expanded"] : ""}`}>
                            <p className={styles['accordion__answer']}>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;


