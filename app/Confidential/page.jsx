import React from 'react';
import Header from "../components/Header";
import styles from './Confidential.module.scss'
import Footer from "../components/Footer";

const Confidential = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h4 className={styles.current}>Главная/Политика конфиденциальности</h4>
                    <div className={styles.about}>
                        <h1>Политика конфиденциальности</h1>
                        <h2>Ваш текст Ваш текст Ваш текст Ваш текст</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Confidential;