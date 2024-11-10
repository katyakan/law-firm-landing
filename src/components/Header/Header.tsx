import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>LIR</div>
            <nav className={styles.nav}>
                <a href="#">Главная</a>
                <a href="#">Услуги</a>
                <a href="#">Сопровождение</a>
                <a href="#">Полезное</a>
                <a href="#">О компании</a>
                <a href="#">Контакты</a>
            </nav>
            <div className={styles.contact}>+7 (999) 890 09 98</div>
        </header>
    );
};

export default Header;
