import styles from '../../styles/componentsStyles/MenuMobile.module.scss';

const MenuMobile = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.closeButton} onClick={onClose}>×</button>
        <ul className={styles.nav__menu} aria-label="main navigation">
          <li className={styles.nav__item}><a href="/menu" className={styles.nav__link}>Menu</a></li>
          <li className={styles.nav__item}><a href="/blog" className={styles.nav__link}>Blog</a></li>
          <li className={styles.nav__item}><a href="/pricing" className={styles.nav__link}>Pricing</a></li>
          <li className={styles.nav__item}><a href="/contact" className={styles.nav__link}>Contact</a></li>
          <li className={styles.nav__item}><a href="/login" className={styles.nav__link}>Login</a></li>
          <li className={styles.nav__item}><a href="/register" className={styles.nav__link}>Sign Up</a></li>
        </ul>
      </div>
    </div>
  )
}

export default MenuMobile

 