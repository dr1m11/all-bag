import React from 'react';
import Header from "../components/Header";
import styles from './AboutUs.module.scss'
import Footer from "../components/Footer";
const AboutUs = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h4 className={styles.current}>Главная/О нас</h4>
                    <div className={styles.content__box}>
                        <div className={styles.about}>
                            <h1>О нас</h1>
                            <h2>Ваш текст Ваш текст Ваш текст Ваш текст</h2>
                        </div>
                        <img src='/img/AllCategories/BGBag.svg' alt={'image'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;