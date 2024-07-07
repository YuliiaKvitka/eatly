'use client'
import React, { useState } from 'react';
import styles from '../../styles/componentsStyles/SelectComponent.module.scss';

const SelectComponent = () => {
    const texts = ['Today', 'This week', 'This month', 'Last month'];
    const [value, setValue] = useState('');

    const options = texts.map((text, index) => {
        return <option className={styles['option']} key={index} value={text}>{text}</option>;
    });

    return (
    
                <div className={styles['select']}>
                    <select className={styles['select-list']} value={value} onChange={(event) => setValue(event.target.value)}>
                        {options}
                </select>
                
                </div>
    );
};

export default SelectComponent;


