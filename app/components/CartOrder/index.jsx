import React from 'react';
import styles from './CartOrder.module.scss'

const CartOrder = () => {
    return (
        <tr className={styles.root}>
            <td>
                <div className={styles.img__td}>
                    <img src='/img/Slider/Bag.svg' alt={'Bag'} className={styles.img}/>
                </div>
            </td>
            <td>
                <div className={styles.description}>
                    <h3 className={styles.description__title}>Описание товара:</h3>
                    <p className={styles.description__desc}>наименование Коллекция наименованиеКоллКоллекция
                        наименование Коллекция наименованиеКоллекция </p>
                </div>
            </td>
            <td className={styles.counts}>
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
            </td>
            <td>
                <div className={styles.dengi}>
                    <h5 className={styles.price}>205 900Р</h5>
                    <h5 className={styles.crossed}>205 900Р</h5>
                </div>
            </td>
            <td className={styles.close}>
                <div className={styles.x}>
                    <img src='/img/Ordering/X.svg' alt={'Close'}/>
                </div>
            </td>
        </tr>
    );
};

export default CartOrder;