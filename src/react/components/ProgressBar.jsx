import styles from '../../styles/componentsStyles/ProgressBar.module.scss';

const ProgressBar = ({ progress, color }) => {
    const progressBarContainerStyle = {
        '--background-color': color // Установка CSS переменной для цвета фоновой части
    };

    const progressBarStyle = {
        width: `${progress}%`
    };

    return (
        <div className={styles['progress-bar-container']} style={progressBarContainerStyle}>
            <div className={styles['progress-bar']} style={progressBarStyle}></div>
        </div>
    );
};

export default ProgressBar;




