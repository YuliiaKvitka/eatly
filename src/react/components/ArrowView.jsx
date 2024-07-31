import Link from 'next/link'
import styles from '../../styles/componentsStyles/ArrowView.module.scss'

const ArrowView = () => {
    return (
        <Link
            className={
                `${styles['link']} 
                ${styles["arrow-btn"]} `}
            href='##' >
            View All
        </Link>
    )
}

export default ArrowView
