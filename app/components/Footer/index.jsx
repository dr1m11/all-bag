import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.column1}>
                    <h2>ALL BAGS</h2>
                    <p>Мы всегда здесь, чтобы сделать вашу покупку удивительным опытом. Не забывайте о нас, и мы обещаем
                        дарить вам красоту и стиль. Вы всегда можете отслеживать новую продукцию в наших социальных
                        сетях.
                    </p>
                    <div className={styles.socials}>
                        <img src='/img/Footer/Telegram.svg' alt={'social'} className={styles.socials__icon}/>
                        <img src='/img/Footer/Insta.png' alt={'social'} className={styles.socials__icon}/>
                        <img src='/img/Footer/Insta.png' alt={'social'} className={styles.socials__icon}/>
                        <img src='/img/Footer/Mail.svg' alt={'social'} className={styles.socials__icon}/>
                    </div>
                </div>
                <div className={styles.columns}>
                    <div className={styles.column2}>
                        <h5>Текстовое описание</h5>
                        <a>О нас</a>
                        <a>Оплата и доставка</a>
                        <a>Политика конфиденциальности</a>
                        <a>Возврат товара</a>
                        <a>FAQ</a>
                        <a>Контакты</a>
                    </div>
                    <div className={styles.column3}>
                        <h5>Каталог</h5>
                        <div className={styles.container}>
                            <div className={styles.left}>
                                <a>Все категории</a>
                                <a>Пляжные сумки</a>
                                <a>Бакет-Бэг</a>
                                <a>Клатчи</a>
                                <a>Сумки-кроссбоди</a>
                                <a>Еще</a>
                            </div>
                            <div className={styles.right}>
                                <a>Чемоданы и дорожные сумки</a>
                                <a>Малеькие сумки</a>
                                <a>Сумки на плечо</a>
                                <a>Сумки тоут</a>
                                <a>Новинки</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;