import React from 'react';
import styles from './Profile.module.scss'
import MyButton from "@/app/components/buttons/MyButton";
import MyInput from "@/app/components/MyInput";
import Image from "next/image";
import Link from "next/link";
import CartBig from "@/app/components/CartBig";

const Profile = () => {
    return (
        <>
            <div className={styles.root}>
                <div className={styles.wrapper}>
                    <div className={styles.middle}>
                        <div className={styles.middle__content}>
                            <div className={styles.middle__block}>
                                <div className={styles.middle__left}>
                                    <h5 className={styles.personal__data}>Личные данные</h5>
                                    <div className={styles.data}>
                                        <MyInput data={'Улесов А. А.'}/>
                                        <MyInput data={'artemules@mail.ru'}/>
                                        <MyInput data={'+7 (917) 265-06-35'}/>
                                        <MyInput data={'Даурская 92, 90'}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.middle__block}>
                                <div className={styles.middle__right}>
                                    <h5 className={styles.personal__data} style={{borderBottom: 'none', marginBottom: 0}}>Корзина</h5>
                                    <CartBig />
                                    <Link href={"/Order"}><MyButton>Перейти в корзину</MyButton></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.bottom__content}>
                            <h2 className={styles.bottom__heading}>Хотите получать красочные материалы и первыми
                                узнавать о событиях бренда?</h2>
                            <p className={styles.bottom__text}>Подписывайтесь на нас в социальных сетях
                                и получайте информацию о новых коллекциях первыми!</p>
                            <MyButton>Подписаться на нас</MyButton>
                        </div>
                        <Image width={848} height={490} src='/img/Profile/Bag.svg' alt={'Bag'}
                               className={styles.bottom__img}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;