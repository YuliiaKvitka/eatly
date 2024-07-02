import Image from 'next/image'
import styles from '../../styles/viewsStyles/Footer.module.scss'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className='container'>
        <div className={styles["footer__inner"]}>
  
          <div className={styles['footer__wrapper']}>
            <div className={styles['footer__logo']}>
              <Logo/>
            </div>
            <nav className={styles["footer__menu"]}>
              <Menu/>
            </nav>
          </div>
          <div className={styles["footer__wrapper-extra"]}>
            <div className={styles['footer__copyright']}>
              <p >&copy; <date>2023</date> EATLY All Rights Reserved.</p>
            </div>
            <div className={styles['footer__soc1als']}>
              <ul className={styles['soc1als__list']}>
                <li><Link href='##'><Image src='/assets/soc1als/instagram.png' alt='' width={22} height={22}/></Link></li>
                <li><Link href='##'><Image src='/assets/soc1als/linkedln.png' alt='' width={22} height={22}/></Link></li>
                <li><Link href='##'><Image src='/assets/soc1als/facebook.png' alt='' width={22} height={22}/></Link></li>
                <li><Link href='##'><Image src='/assets/soc1als/twitter.png' alt='' width={22} height={22}/></Link></li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer
