import Link from 'next/link';
import styles from '../../styles/componentsStyles/Soc1als.module.scss';
import Image from 'next/image';

const Soc1als = () => {
    return (
        <ul className={styles['wrapper']}>
            <li >
                <Link className={`${styles['icon']} ${styles['instagram']}`} href='##'><Image className={styles['image']}  src='/assets/soc1als/instagram.png' alt='' width={22} height={22} /></Link>
            </li>
            <li >
                <Link className={`${styles['icon']} ${styles['linkedln']}`} href='##'><Image className={styles['image']}  src='/assets/soc1als/linkedln.png' alt='' width={22} height={22} /></Link>
            </li>
            <li >
                <Link className={`${styles['icon']} ${styles['facebook']}`} href='##'><Image className={styles['image']} src='/assets/soc1als/facebook.png' alt='' width={22} height={22} /></Link>
            </li>
            <li >
                <Link className={`${styles['icon']} ${styles['twitter']}`} href='##'><Image className={styles['image']}  src='/assets/soc1als/twitter.png' alt='' width={22} height={22} /></Link>
            </li>
        </ul>
    )
}

export default Soc1als
