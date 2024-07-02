import Link from 'next/link'
import styles from '../../styles/componentsStyles/Menu.module.scss'

const Menu = () => {
    return (
            <ul className={styles['list']}>
                <li className={styles['item']}><Link href='##'>menu</Link></li>
                <li className={styles['item']}><Link href='##'>blog</Link></li>
                <li className={styles['item']}><Link href='##'>pricing</Link></li>
                <li className={styles['item']}><Link href='##'>contact</Link></li>
            </ul>
    )
}

export default Menu
