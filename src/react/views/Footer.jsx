
import styles from '../../styles/viewsStyles/Footer.module.scss'
import Logo from '../components/Logo'
import MenuFooter from '../components/MenuFooter'
import Soc1als from '../components/Soc1als'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className='container'>
        <div className={styles["footer__inner"]}>
  
          <div className={styles['footer__wrapper']}>
            <div className={styles['footer__wrapper-left']}>
              <div className={styles['footer__logo']}>
                <Logo/>
              </div>
              <nav className={styles["footer__menu"]}>
                <MenuFooter/>
              </nav>
            </div>

            <div className={styles['footer__soc1als-mobile']}>
              <Soc1als/>
            </div>
          </div>
          <div className={styles["footer__wrapper-extra"]}>
            <div className={styles['footer__copyright']}>
              <p >&copy; <date>2023</date> EATLY All Rights Reserved.</p>
            </div>
            <div className={styles['footer__soc1als']}>
              <Soc1als/>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
