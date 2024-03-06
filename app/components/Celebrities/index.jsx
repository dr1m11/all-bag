'use client'
import React from 'react';
import styles from './Celebrities.module.scss'
import useResize from "@/app/hooks/useResize";
const Celebrities = ({img, brand, name, text, left}) => {
    const width = useResize()
    return (
        left && (width >= 780)?
            <div className={styles.wrapper}>
                <img src={img} alt={"Celebrity"}/>
                <div className={styles.second}>
                    <div className={styles.desc}>
                        <h5 className={styles.brand}>{brand}</h5>
                        <p className={styles.parag}>{text}</p>
                    </div>
                    <h3 className={styles.name}>{name}</h3>
                </div>
            </div>
            :
            <div className={styles.wrapper}>
                <div className={styles.second} style={{textAlign: "right", alignItems: "flex-end"}}>
                    <div className={styles.desc}>
                        <h5 className={styles.brand}>{brand}</h5>
                        <p className={styles.parag}>{text}</p>
                    </div>
                    <h3 className={styles.name} style={{alignSelf: left}}>{name}</h3>
                </div>
                <img src={img} alt={"Celebrity"}/>
            </div>
    );
};

export default Celebrities;