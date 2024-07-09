// AvatarComponent.js
import React from 'react';
import styles from '../../styles/componentsStyles/Avatar.module.scss';

const Avatar = ({ src }) => {
  return (
    <div className={styles.avatarContainer}>
      <img src={src} alt="Avatar" className={styles.avatar} />
    </div>
  );
};

export default Avatar;