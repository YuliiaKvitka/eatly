'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Изменено на 'next/navigation'
import styles from '../../styles/componentsStyles/Menu.module.scss';

const Menu = () => {
    const pathname = usePathname();

    return (
        <ul className={styles['list']}>
            <li className={`${styles['item']} ${pathname === '/' ? styles['active'] : ''}`}>
                <Link href="/" legacyBehavior>
                    <a>menu</a>
                </Link>
            </li>
            <li className={`${styles['item']} ${pathname === '/blog' ? styles['active'] : ''}`}>
                <Link href="/blog" legacyBehavior>
                    <a>blog</a>
                </Link>
            </li>
            <li className={`${styles['item']} ${pathname === '/pricing' ? styles['active'] : ''}`}>
                <Link href="/pricing" legacyBehavior>
                    <a>pricing</a>
                </Link>
            </li>
            <li className={`${styles['item']} ${pathname === '/contact' ? styles['active'] : ''}`}>
                <Link href="/contact" legacyBehavior>
                    <a>contact</a>
                </Link>
            </li>
        </ul>
    );
};

export default Menu;



