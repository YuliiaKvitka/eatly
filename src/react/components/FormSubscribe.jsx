'use client'

import styles from '../../styles/componentsStyles/FormSubscribe.module.scss'; 

// Form.jsx


const Form = () => {


  return (
    <form>
    <input className={styles['input__email']} id="useremail" type="email" placeholder=" Enter Your Email Address" required/>
    <input className={styles['input__submit']} id="submit" type="submit" value="Ssubscribe"/>
  </form>
  );
};

export default Form;

