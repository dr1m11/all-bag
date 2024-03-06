import React from 'react';
import styles from './Order.module.scss'
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import CartOrder from "./../components/CartOrder";
import DeliveryBtn from "@/app/components/buttons/DeliveryBtn";
import CartBig from "@/app/components/CartBig";

const Order = () => {
    return (
        <div>
            <div className={styles.root}>
                <div className={styles.data}>
                    <div className={styles.data__root}>
                        <div className={styles.heading}>
                            <h1 className={styles.number}>1</h1>
                            <h1 className={styles.title}>Адрес и доставка</h1>
                        </div>
                        <div className={styles.blocks}>
                            <div className={styles.block}>
                                <h4 className={styles.li}>Населенный пункт:</h4>
                                <div className={styles.block__right}>
                                    <button className={styles.myBtn}>Выбрать город</button>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <h4 className={styles.li}>Cпособ доставки:</h4>
                                <div className={styles.block__right}>
                                    <div className={styles.delivery__select}>
                                        <DeliveryBtn />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <h4 className={styles.li}>Пункт выдачи:</h4>
                                <div className={styles.block__right}>
                                    <div className={styles.post__adress__select}>
                                        <div className={styles.adress__select__top}>
                                            <div className={styles.adress__select__left}>
                                                <input type={'radio'} className={styles.radio}/>
                                                <h6 className={styles.sdek}>СДЭК</h6>
                                            </div>
                                            <img className={styles.sdek__img} src='/img/Ordering/SDEK.svg' alt={'СДЭК'}/>
                                        </div>
                                        <button className={styles.myBtn}>Выберите пункт выдачи</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <h4 className={styles.li}>Адресс пункта выдачи:</h4>
                                <div className={styles.block__right}>
                                    <p className={styles.del__adress}>г. Москва, ул. Дальневосточная, влд. 2а, кв. 23,
                                        подъезд
                                        2, этаж 3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.data__root}>
                        <div className={styles.heading}>
                            <h1 className={styles.number}>2</h1>
                            <div className={styles.heading__right}>
                                <h1 className={styles.title}>Контактная информация</h1>
                                <h6 className={styles.disclaimer}>Для получения предоплаченного заказа будет необходим
                                    паспорт</h6>
                            </div>
                        </div>
                        <div className={styles.blocks2}>
                            <div className={styles.block}>
                                <h4 className={styles.li}>Ваши данные:</h4>
                                <div className={styles.block__right}>
                                    <form className={styles.form}>
                                        <input placeholder={"Город"} className={styles.personal__data} type={'text'}/>
                                        <input placeholder={"Имя"} className={styles.personal__data} type={'text'}/>
                                        <div>
                                            <input placeholder={"Отчество (при наличии)"}
                                                   className={styles.personal__data} type={'text'}/>
                                            <p className={styles.email__disc}>обязательно при доставке почтой</p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={styles.block}>
                                <h4 className={styles.li}>Контакты:</h4>
                                <div className={styles.block__right}>
                                    <form className={styles.contact__form}>
                                        <input placeholder={"Номер телефона"} className={styles.personal__data}
                                               type={'tel'}/>
                                        <div>
                                            <input placeholder={"Е-mail"} className={styles.personal__data}
                                                   type={'email'}/>
                                            <p className={styles.email__disc}>обязательно при доставке почтой</p>
                                        </div>
                                        <label className={styles.checkbox__label} form={'checkbox'}>
                                            <input type={'checkbox'} className={styles.checkbox} id={'checkbox'}/>
                                            <p className={styles.disc}>я согласен получать новости об акциях и
                                                специальных предложениях</p>
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.data__root}>
                        <div className={styles.heading}>
                            <h1 className={styles.number} style={{paddingBottom: 5}}>3</h1>
                            <div className={styles.heading__right}>
                                <h1 className={styles.title}>Оплата</h1>
                                <h6 className={styles.disclaimer}>Другие способы оплаты вы всегда можете узнать,
                                    позвонив нам</h6>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <h4 className={styles.li}>Способ оплаты:</h4>
                            <div className={styles.block__right}>
                                <div className={styles.payment}>
                                    <div className={styles.payment__option}>
                                        <div className={styles.adress__select__left}>
                                            <input type={'radio'} className={styles.radio}/>
                                            <h6 className={styles.sdek}>Картой</h6>
                                        </div>
                                        <img src='/img/Ordering/Credit.svg' alt={'Credit card'}/>
                                    </div>
                                    <div className={styles.payment__option}>
                                        <div className={styles.adress__select__left}>
                                            <input type={'radio'} className={styles.radio}/>
                                            <h6 className={styles.sdek}>CБП</h6>
                                        </div>
                                        <img src='/img/Ordering/SBP.svg' alt={'СБП'}/>
                                    </div>
                                    <div className={styles.payment__option}>
                                        <div className={styles.adress__select__left}>
                                            <input type={'radio'} className={styles.radio}/>
                                            <h6 className={styles.sdek}>Наличными</h6>
                                        </div>
                                        <img src='/img/Ordering/Cash.svg' alt={'Cash'}/>
                                    </div>
                                </div>
                                <button className={styles.myBtn} style={{marginTop: 20}}>Подтвердить</button>
                            </div>
                        </div>
                    </div>
                </div>
                <CartBig />
            </div>
        </div>
    );
};

export default Order;