'use client'
import styles from '../../styles/viewsStyles/Header.module.scss'
import Link from 'next/link'
import Logo from '../components/Logo'
import Menu from '../components/Menu'
import { useState } from 'react'
import AuthModal from '../modalWindow/AuthModal'
import AuthModalForget from '../modalWindow/AuthModalForget'
import MenuMobile from '../components/MenuMobile'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('login'); // 'login' or 'signup'
  const [isForgetModalOpen, setForgetModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false); // Добавлено состояние для мобильного меню

  const openModal = (e, mode) => {
    e.preventDefault();
    setModalMode(mode);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openForgetModal = () => {
    setIsModalOpen(false);
    setForgetModalOpen(true);
  };

  const closeForgetModal = () => {
    setForgetModalOpen(false);
  };

  const toggleMenuModal = () => {
    setIsMenuModalOpen(!isMenuModalOpen);
  };

  return (
    <>
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
                  <div className={styles["header__burger--item"]} tabIndex="1" onClick={toggleMenuModal}>
                    <div className={`${styles["header__burger-line"]} ${styles['line']}`}></div>
                    <div className={`${styles["header__burger-line"]} ${styles['line']}`}></div>
                    <div className={`${styles["header__burger-line"]} ${styles['line']}`}></div>
                  </div>
                </nav>
                <div className={styles["buttons-actions"]}>
                  <Link className={styles['buttons-actions__login']} href='##' onClick={(e) => openModal(e, 'login')}>login</Link>
                  <Link className={styles['buttons-actions__sign-up']} href='##' onClick={(e) => openModal(e, 'signup')}>sign up</Link>
                </div>
              </>
            </div>
            <hr className='section-line' />
          </div>
        </div>
      </header>
      <AuthModal isOpen={isModalOpen} onClose={closeModal} mode={modalMode} setMode={setModalMode} onForgotPassword={openForgetModal} />
      <AuthModalForget isOpen={isForgetModalOpen} onClose={closeForgetModal} />
      <MenuMobile isOpen={isMenuModalOpen} onClose={toggleMenuModal} />
    </>
  )
}

export default Header

