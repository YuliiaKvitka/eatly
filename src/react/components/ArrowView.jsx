import Link from 'next/link'
import styles from '../../styles/componentsStyles/ArrowView.module.scss'

const ArrowView = () => {
    return (
        <Link href='##' className={`${styles['link']} ${styles["arrow-btn"]}`}>View All</Link>
    )
}

export default ArrowView
