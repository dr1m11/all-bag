import React from 'react';
import styles from './Cartitem.module.scss'

const CartItem = () => {
    return (
        <div className={styles.root}>
            <img src='/img/Slider/Bag.svg' alt={'Bag'}/>
            <div className={styles.content}>
                <div className={styles.top}>
                    <h5 className={styles.heading}>Женская сумка LOULOU из кожи от SAINT LAURENT</h5>
                    <h5 className={styles.delete}>Удалить товар</h5>
                </div>
                <div className={styles.middle}>
                    <h5 className={styles.color__name}>Цвет:</h5>
                    <span className={styles.color}>Наименование</span>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.bottom__left}>
                        <h6 className={styles.count}>1 шт.</h6>
                        <div className={styles.buttons}>
                            <div className={styles.minus}>
                                <div className={styles.minus__content}/>
                            </div>
                            <div className={styles.plus}>
                                <div className={styles.plus__contentX}/>
                                <div className={styles.plus__contentY}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom__right}>
                        <h4 className={styles.price}>205 900Р</h4>
                        <h4 className={styles.crossed}>265 900Р</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;