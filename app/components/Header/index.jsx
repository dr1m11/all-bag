'use client'

import React, {useState} from 'react';
import styles from './Header.module.scss'
import Cart from "../Cart";
import Link from "next/link";
import NavLowRes from "@/app/components/NavLowRes";
import useResize from "@/app/hooks/useResize";
import Burger from "@/app/components/buttons/Burger";

const Header = () => {

    const [isCartOpen, setIsCartOpen] = useState(true)
    const [isNavOpen, setIsNavOpen] = useState(false)

    const setCartOpen = () => {
        setIsCartOpen(true)
        document.body.style.overflow = "unset";
    }

    const setNavOpen = () => {
        setIsNavOpen(!isNavOpen)
    }

    const width = useResize()

    return (
        isCartOpen ?
        <div className={styles.header}>
            <NavLowRes style={{left: (isNavOpen && (width < 780)) ? '' : -100 + 'vw'}}/>
            <div className={styles.header__topWrapper}>
                <div className={styles.header__top}>
                    <nav className={styles.nav}>
                        <Link href={'/'} className={styles.link}>Главная</Link>
                        <Link href={'/AllCategories'} className={styles.link}>Каталог</Link>
                        <Link href={'/AboutUs'} className={styles.link}>О нас</Link>
                        <Link href={'/PaymentDelivery'} className={styles.link}>Оплата и доставка</Link>
                        <Link className={styles.link} href={'/Confidential'}>Политика конфиденциальности</Link>
                        <Link className={styles.link} href={'/Refund'}>Возврат товара</Link>
                        <Link className={styles.link} href={'/FAQ'}>FAQ</Link>
                        <Link className={styles.link} href={'/Contacts'}>Контакты</Link>
                    </nav>
                    <div className={styles.nav__lowRes}>
                        <Burger isOpen={isNavOpen} setNavOpen={setNavOpen}/>
                        <img src='/img/Header/SearchWhite.svg' alt={"Search"} className={styles.searchWhite}/>
                    </div>

                    <div className={styles.header__right}>
                        <div className={styles.search}>
                            <input type="search" placeholder={"Поиск..."} className={styles.input}/>
                            <img src='/img/Header/Search_alt_light.svg' className={styles.searchBtn} alt={'search'}/>
                        </div>
                        <Link href={'/Profile'} className={styles.header__btns}><img className={styles.header__btns} src='/img/Header/ProfileBtn.svg' width={48} height={48} alt={""}/></Link>
                        <img className={styles.header__btns} onClick={() => setIsCartOpen(false)} src='/img/Header/CartBtn.svg' width={48}
                             height={48} alt={""}/>
                    </div>
                </div>
            </div>
            <div className={styles.header__bottom}>
            {/*<img src={Logo} alt={"logo"} className={styles.header__bottomImg}/>*/}
            </div>
        </div>
:
            <div style={{overflow: 'hidden', maxHeight: '110vh'}}>
                <Cart close={setCartOpen}/>
                <div className={styles.header}>
                    <div className={styles.header__topWrapper}>
                        <div className={styles.header__top}>
                            <nav className={styles.nav}>
                                <Link href={'/AboutUs'} className={styles.link}>О нас</Link>
                                <Link href={'/PaymentDelivery'} className={styles.link}>Оплата и доставка</Link>
                                <Link className={styles.link} href={'/Confidential'}>Политика конфиденциальности</Link>
                                <Link className={styles.link} href={'/Refund'}>Возврат товара</Link>
                                <Link className={styles.link} href={'/FAQ'}>FAQ</Link>
                                <Link className={styles.link} href={'/Contacts'}>Контакты</Link>
                            </nav>
                            <div className={styles.nav__lowRes}>
                                <img src='/img/Header/3poloskiNav.svg' alt={"Nav"} className={styles.lowResBtn}/>
                                <img src='/img/Header/SearchWhite.svg' alt={"Search"} className={styles.searchWhite}/>
                            </div>

                            <div className={styles.header__right}>
                                <div className={styles.search}>'
                                    <input type="search" placeholder={"Поиск..."}/>
                                    <img src='/img/Header/Search_alt_light.svg' className={styles.searchBtn}/>
                                </div>
                                <img className={styles.header__btns} src='/img/Header/ProfileBtn.svg' width={'48px'} height={'48px'} alt={""}/>
                                <img className={styles.header__btns} src='/img/Header/CartBtn.svg' width={'48px'} height={'48px'} alt={""}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.header__bottom}>
                        {/*<img src={Logo} alt={"logo"} className={styles.header__bottomImg}/>*/}
                    </div>
                </div>
            </div>
    )
};

export default Header;