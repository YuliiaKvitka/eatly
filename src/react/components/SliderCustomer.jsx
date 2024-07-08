'use client'

import styles from '../../styles/componentsStyles/SliderCustomer.module.scss';
import { useState, useRef } from 'react';
import testimonials from '@/data/testimonials.js';
import { motion } from 'framer-motion';

const SliderCustomer = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleScroll = () => {
        const scrollLeft = sliderRef.current.scrollLeft;
        const slideWidth = sliderRef.current.firstChild.offsetWidth;
        const newSlideIndex = Math.round(scrollLeft / slideWidth);
        setCurrentSlide(newSlideIndex);
    };

    const scrollToSlide = (index) => {
        const slideWidth = sliderRef.current.firstChild.offsetWidth;
        sliderRef.current.scrollTo({ left: index * slideWidth, behavior: 'smooth' });
    };

    return (
        <div className={styles.slider}>
        <div
            className={styles.inner}
            ref={sliderRef}
            onScroll={handleScroll}
        >
            {testimonials.map((testimonial, index) => {
            const hasHeader = testimonial.avatar && testimonial.name && testimonial.duration;
            return (
                <motion.div
                className={`${styles.slide} ${!hasHeader ? styles['slide--no-header'] : ''}`}
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                >
                {hasHeader && (
                    <div className={styles['slide-header']}>
                    <img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} />
                    <div className={styles['slide-header-wrap']}>
                        <h3>{testimonial.name}</h3>
                        <p>{testimonial.duration}</p>
                    </div>
                    <img src='/assets/testimonials/blockquote.png' alt='' className={styles['img-blockqoute']} />
                    </div>
                )}
                <blockquote>
                    &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className={styles.rating}>
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i}>⭐</span>
                    ))}
                </div>
                </motion.div>
            );
            })}
        </div>
        <div className={styles.pagination}>
            <div
            className={styles['pagination-indicator']}
            style={{
                width: `${(100 / testimonials.length) * (currentSlide + 1)}%`,
            }}
            />
        </div>
        </div>
    );
};

export default SliderCustomer;









