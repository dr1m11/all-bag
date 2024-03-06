import React from 'react';
import Header from "./../components/Header";
import styles from '../AboutUs/AboutUs.module.scss'
import Footer from "./../components/Footer";

const Refund = () => {
    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h4 className={styles.current}>Главная/Возврат товара</h4>
                    <div className={styles.content__box}>
                        <div className={styles.about}>
                            <h1>Возврат товара</h1>
                            <h2>Ваш текст Ваш текст Ваш текст Ваш текст</h2>
                        </div>
                        <img src='/img/AllCategories/BGBag.svg' alt={'image'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Refund;