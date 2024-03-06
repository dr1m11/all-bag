import React from 'react';
import styles from './Cart.module.scss'
import CartItem from "../CartItem";
import Link from "next/link";

const Cart = ({close}) => {

    document.body.style.overflow = "hidden";

    return (
        <div className={styles.root}>
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <div className={styles.top}>
                        <Link onClick={() => close()} className={styles.link__to__cart} href={'/Order'}>Перейти в корзину</Link>
                        <button className={styles.close} onClick={() => close()}>
                            <img src='/img/Cart/CloseBtn.svg' alt={'Close'}/>
                        </button>
                    </div>
                    <div className={styles.items}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className={styles.summary}>
                        <h1>Итого:</h1>
                        <span>205 900Р</span>
                        <span className={styles.crossed}>265 900Р</span>
                    </div>
                    <Link href={'/Order'} className={styles.confirm} onClick={() => close()}>Оформить заказ</Link>
                </div>
                <div style={{width: 100 + "vw", height: 100 + 'vh'}} onClick={() => close()}/>
            </div>
        </div>
    );
};

export default Cart;