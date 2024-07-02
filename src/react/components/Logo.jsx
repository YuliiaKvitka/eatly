import Image from 'next/image'
import styles from '../../styles/componentsStyles/Logo.module.scss'

const Logo = () => {
    return (
        <div className={styles["logo"]}>
            <Image className={styles['logo__image']}   src='/assets/logo/logo.png' alt='logo' width={46} height={43} loading='lazy' />
            <p className={styles['logo__text']}>eatly</p>
            </div>
    )
}

export default Logo
