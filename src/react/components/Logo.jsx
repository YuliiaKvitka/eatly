import Image from 'next/image'
import styles from '../../styles/componentsStyles/Logo.module.scss'
import Link from 'next/link'

const Logo = () => {
    return (
        <div className={styles["logo"]}>

            <Link href='/'><Image className={styles['logo__image']} src='/assets/logo/logo.png' alt='logo' width={46} height={43} loading='lazy' /></Link>
            
            <p className={styles['logo__text']}>eatly</p>
            
        </div>
    )
}

export default Logo
