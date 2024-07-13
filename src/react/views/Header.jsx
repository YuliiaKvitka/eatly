
import styles from '../../styles/viewsStyles/Header.module.scss'
import Link from 'next/link'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className='container'>
        <div className={styles['header__wrapper']}>
          <div className={styles["header__inner"]}>
            
              <>
                <div className={styles['header__logo']}>
                  <Logo />
                </div>
                <nav className={styles["header__menu"]}>
                  <Menu />
                </nav>
                <nav className={styles['header__burger']}>
                  <div className={styles["header__burger--item"]} tabIndex="1">
                      <div className={`${styles["header__burger-line"]} ${styles['line']}`}></div>
                      <div className={`${styles["header__burger-line"]} ${styles['line']}`}></div>
                      <div className={`${styles["header__burger-line"]} ${styles['line']}`}></div>
                  </div>
                </nav>
      
                <div className={styles["buttons-actions"]}>
                  <Link className={styles['buttons-actions__login']} href='##'>login</Link>
                  <Link className={styles['buttons-actions__sign-up']} href='##'>sign up</Link>
              </div>
              </>
          </div>
          <hr className='section-line'/>
        </div>
        </div>
    </header>
  )
}

export default Header
