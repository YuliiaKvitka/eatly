import Image from 'next/image'
import styles from '../../styles/viewsStyles/Header.module.scss'
import Link from 'next/link'
import Logo from '../components/Logo'
import Menu from '../components/Menu'

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className='container'>
        <div className={styles["header__inner"]}>
          <div className={styles['header__logo']}>
            <Logo />
          </div>
          <nav className={styles["header__menu"]}>
            <Menu />
          </nav>
          <div className={styles["actions"]}>
            <Link className={styles['actions__login']} href='##'>login</Link>
            <Link className={styles['actions__sign-up']} href='##'>sign up</Link>
          </div>
        </div>
      </div>
      
    </header>
  )
}

export default Header
