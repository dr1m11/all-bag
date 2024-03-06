'use client'
import React, {useEffect, useState} from 'react';
import styles from './AllCategories.module.scss'
import useResize from "../hooks/useResize";
import Filter from "./Filter";
import SingleProduct from "../components/SingleProduct";
import Link from "next/link";

const AllCategories = () => {
    const width = useResize()

    const [bags, setBags] = useState([
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        fetch('https://654798f6902874dff3ac8749.mockapi.io/bags').then((item) => {
            return item.json()
        }).then(json => {
            setBags(json)
            setIsLoading(false)
        })
    }, []);


    return (
        <div>
            <div className={styles.top__wrapper}>
                {
                    width <= 780 ?
                        <div className={styles.content__top}>
                            <div className={styles.sidebar}>
                                <h3>Главная / все категории</h3>
                            </div>
                            <div className={styles.blackBag}>
                                <img src='/img/AllCategories/BlackBag.svg' alt={'Black bag'}/>
                            </div>
                            <div className={styles.smallbar}>
                                <p>Текстовое описание Текстовое описание Текстовое описаниеТекстовое описаниеТекстов
                                    Текстовое
                                    описаниеТеое описание
                                </p>
                                <img src='/img/AllCategories/BGBag.svg' alt={'Bag'}/>
                            </div>
                        </div>
                        :
                        <div className={styles.content__top}>
                            <div className={styles.sidebar}>
                                <h3>Главная / все категории</h3>
                                <p>Текстовое описание Текстовое описание Текстовое описаниеТекстовое описаниеТекстов
                                    Текстовое
                                    описаниеТеое описание
                                </p>
                                <img src='/img/AllCategories/BGBag.svg' alt={'Bag'}/>
                            </div>
                            <div className={styles.blackBag}>
                                <img src='/img/AllCategories/BlackBag.svg' alt={'Black bag'}/>
                            </div>
                        </div>
                }
            </div>
            <div className={styles.content}>
                <div className={styles.wrapper}>
                    {width >= 780 ? <Filter/> : ''}
                    <div className={styles.filter}>
                        <button>фильтры<img src='/img/AllCategories/FilterBtn.png' alt={'Filter'}/></button>
                    </div>
                    <div className={styles.all__content}>
                        <div className={styles.products}>
                            {
                                bags.map(({image, title, price, id}) => {
                                    return (
                                        <div className={styles.item} key={id}>
                                            {
                                                <Link href={`/AllCategories/${id}`}
                                                      className={styles.link}><SingleProduct title={title} image={image}
                                                                                             price={price} isLoading={isLoading}/></Link>
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button>
                            Смотреть больше
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCategories;