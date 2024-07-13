import Link from 'next/link'
import styles from '../../styles/componentsStyles/MenuFooter.module.scss'

const MenuFooter = () => {
    return (
            <ul className={styles['list']}>
                <li className={styles['item']}><Link href='/menu'>menu</Link></li>
                <li className={styles['item']}><Link href='/blog'>blog</Link></li>
                <li className={styles['item']}><Link href='/pricing'>pricing</Link></li>
                <li className={styles['item']}><Link href='/contact'>contact</Link></li>
            </ul>
    )
}

export default MenuFooter
