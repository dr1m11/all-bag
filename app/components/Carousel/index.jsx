'use client'

import React, {useRef} from 'react';
import styles from './Slider.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {settings} from "./settings";

const Carousel = () => {

    const arr = [
        {
            id: 1,
            image: '/img/Slider/Bag.svg',
        },
        {
            id: 2,
            image: '/img/Slider/Bag.svg',
        },
        {
            id: 3,
            image: '/img/Slider/Bag.svg',
        },
        {
            id: 4,
            image: '/img/Slider/Bag.svg',
        },
        {
            id: 5,
            image: '/img/Slider/Bag.svg',
        },
        {
            id: 6,
            image: '/img/Slider/Bag.svg',
        },
        {
            id: 7,
            image: '/img/Slider/Bag.svg',
        },
        {
            id: 8,
            image: '/img/Slider/Bag.svg',
        },
        {
            id: 9,
            image: '/img/Slider/Bag.svg',
        },
    ]

    const slider = useRef(null)

    return (
        <div className={styles.main}>
            <div className={styles.arrow__btn} onClick={() => slider?.current?.slickPrev()}>
                <img src='/img/Slider/arrowLeft.svg' alt={"Arrow"} className={styles.arrow__left}/>
            </div>
            <div className={styles.content}>
                <Slider {...settings} ref={slider}>
                    {
                        arr.map(({id, image}) => {
                            return (
                                <img src={image} key={id} className={styles.item}/>
                            )
                        })
                    }
                </Slider>
            </div>
            <div className={styles.arrow__btn} onClick={() => slider?.current?.slickNext()}>
                <img src='/img/Slider/arrowLeft.svg' alt={"Arrow"} className={styles.arrow__right}/>
            </div>
        </div>
    );
};

export default Carousel;