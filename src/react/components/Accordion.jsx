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
            <div className={styles['accordion__container']}>
                {items.map((item, index) => (
                    <div className={styles["accordion__item"]} key={index}>
                        <button 
                            id={`accordion-button-${index}`} 
                            aria-expanded={expanded === index}
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className={styles["accordion__title"]}>{item.title}</span>
                            <span className={styles["accordion__icon"]} aria-hidden="true"></span>
                        </button>
                        <div className={`${styles["accordion__content"]} ${expanded === index ? styles["expanded"] : ""}`}>
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;


