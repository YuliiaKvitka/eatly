'use client'

import styles from '../../styles/componentsStyles/SliderCustomer.module.scss';
import { useState, useRef, useEffect } from 'react';
import testimonials from '@/data/testimonials.js';
import { motion } from 'framer-motion';
import Avatar from './Avatar';

const SliderCustomer = () => {
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false); // State для отслеживания состояния перетаскивания
    const [startX, setStartX] = useState(0); // Начальная позиция X при перетаскивании
    const [scrollLeft, setScrollLeft] = useState(0); // Начальная позиция скролла

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

    const handleMouseDown = (e) => {
        setIsDragging(true); // Начало перетаскивания
        setStartX(e.pageX - sliderRef.current.offsetLeft); // Установка начальной позиции X
        setScrollLeft(sliderRef.current.scrollLeft); // Установка начальной позиции скролла
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Умножаем на 2 для ускорения скролла
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false); // Завершение перетаскивания
    };

    const handleMouseLeave = () => {
        setIsDragging(false); // Завершение перетаскивания при выходе курсора
    };

    useEffect(() => {
        const slider = sliderRef.current;
        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mousemove', handleMouseMove);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mousemove', handleMouseMove);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isDragging, startX, scrollLeft]);

    return (
        <div className={`${styles.slider} ${isDragging ? styles.dragging : ''}`}> {/* Добавляем класс при перетаскивании */}
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
                                    <Avatar src={testimonial.avatar}/>
                                    {/* <div className={styles['slide-header__avatar']}><img src={testimonial.avatar} alt={testimonial.name} className={styles.avatar} /></div> */}
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

