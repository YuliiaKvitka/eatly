'use client'

import styles from '../../../styles/sectionsStyles/homePageStyles/Dashboard.module.scss';
import purchases from '../../../data/purchases.js';
import stats from '../../../data/stats.js';
import { useInView } from 'react-intersection-observer';
import SelectComponent from '@/react/components/SelectComponent';
import ProgressBar from '@/react/components/ProgressBar';

const Dashboard = () => {
    const { ref, inView } = useInView({
    triggerOnce: true,  // Анимация срабатывает только один раз
    threshold: 0.1,     // Процент видимости элемента для срабатывания анимации
    });

    return (
        <section className={styles['dashboard ']}>
            <div className='container'>
                <div className={styles['dashboard__wrapper']}>
                    <div className={styles['dashboard__inner']}>
    
                        <div className={styles['dashboard__purchases']}>
                            <h2  ref={ref} className={`${styles.features__title} section-title ${inView ? styles.fadeIn : ''}`}>Control <span className='accent'>Purchases</span><br />Via Dashboard</h2>
    
                            <div className={styles['dashboard__list']}>
                                {purchases.map((purchase, index) => (
                                    <div key={index} className={styles['dashboard__item']}>
                                    <div className={styles['dashboard__item-info']}>
                                        <img src={purchase.image} alt={purchase.name} className={styles['dashboard__item-image']} />
                                        <div className={styles['dashboard__item-text']}>
                                        <span className={styles['dashboard__item-name']}>{purchase.name}</span>
                                        <span className={styles['dashboard__item-status']}>{purchase.status}</span>
                                        </div>
                                    </div>
                                        <div className={styles['dashboard__time']}>
                                            <span className={styles['dashboard__item-time']}>{purchase.time}</span></div>
                                        </div>
                                ))}
                            </div>
                        </div>
    
                        <div className={styles['dashboard__stats']}>
                            <div className={styles['dashboard__stats-header']}>
                                <h3 className={styles['dashboard__stats-title']}>Purchases</h3>
                                
                            <SelectComponent/>
    
                            </div>
                        
                            <div className={styles['dashboard__stats-list']}>
                                {stats.map((stat, index) => (
                                    <div className={styles['dashboard__stats-wrapper']}>
                                        
                                            <div key={index} className={styles['dashboard__stats-item']}>
            
                                                    <div className={styles['dashboard__stats-info']}>
                                                        <div className={styles['dashboard__stats-icon']} >
                                                            <img src={stat.icon} alt={stat.label} />
                                                    </div>
                                                    <div className={styles['dashboard__stats-text']}>
                                                        <span className={styles['dashboard__stats-label']}>{stat.label}</span>
                                                        <span className={styles['dashboard__stats-subtext']}>{stat.subtext}</span>
                                                    </div>
                                                
                                                </div>
                                                
                                            <span className={styles['dashboard__stats-value']}>{stat.value}</span>
                                                
                                        </div>
                                        <ProgressBar progress={stat.progress} color={stat.color} />
                                        
                                    </div>
    
                                ))}
                            </div>
                        </div>
    
                    </div>
                    <hr className='section-line'/>
                </div>
                
                </div>
        </section>
    )
}

export default Dashboard
