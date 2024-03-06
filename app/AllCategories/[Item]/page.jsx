'use client'

import React, {useEffect, useState} from 'react';
import Header from "../../components/Header";
import styles from './Item.module.scss'
import Footer from "../../components/Footer";
import CharPopup from "../../components/CharPopup";
import Carousel from "../../components/Carousel";
import axios from "axios";

const Item = ({params}) => {

    const [items, setItems] = useState({})

    useEffect(() => {
        fetch('https://654798f6902874dff3ac8749.mockapi.io/bags').then((res) => res.json())
            .then(json => setItems(json[params.Item]))
    }, []);

    const addToCart = (obj) => {
        axios.post('https://654798f6902874dff3ac8749.mockapi.io/cart', obj)
    }


    return (
        <div className={styles.root}>
            <div className={styles.heading__wrapper}>
                <h2 className={styles.heading}>Каталог / Клатчи</h2>
            </div>
            <div className={styles.content}>
            <div className={styles.content__left}>
                    <div className={styles.photoes}>
                        <img src={items.image} alt={'Bag'}/>
                        <img src={items.image} alt={'Bag'}/>
                        <img src={items.image} alt={'Bag'}/>
                        <img src={items.image} alt={'Bag'}/>
                    </div>
                </div>
                <div className={styles.desc}>
                    <div className={styles.desc__wrapper}>
                        <h5 className={styles.collection}>Коллекция</h5>
                        <h1 className={styles.title}>Женская сумка LOULOU из кожи от SAINT LAURENT</h1>
                        <div className={styles.colors}>
                            <img src='/img/Slider/Bag.svg' alt={'Bag'}/>
                            <img src='/img/Slider/Bag.svg' alt={'Bag'}/>
                        </div>
                        <h3 className={styles.price}>205 900Р</h3>
                        <h6 className={styles.item__desc__title}>Описание товара:</h6>
                        <p className={styles.item__desc}>наименование Коллекция наименованиеКоллКоллекция наименование
                            Коллекция наименованиеКоллекция
                        </p>
                        <button className={styles.add__to__cart} onClick={() => addToCart({color: 'black', image: '/img/Slider/Bag.svg', price: 205900, title: 'Женская сумка LOULOU из кожи от SAINT LAURENT'})}>Добавить в корзину</button>
                        <button className={styles.buy__now}>Купить сейчас</button>
                        <div className={styles.in__stock}>
                            <img src='/img/Item/Mail.svg' alt={'Mail'}/>
                            <p>Сообщить о поступлении</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.middle}>
                <h3>Информация</h3>
                <div className={styles.popup}>
                    <CharPopup/>
                </div>
            </div>
            <div className={styles.bottom}>
                <h3>Вам могут понравиться</h3>
                <Carousel/>
            </div>
        </div>
    );
};

export default Item;