'use client'

import React from 'react';
import styles from './HeaderRightButton.module.scss'

const HeaderRightButton = () => {

    return (
        <div style={{display: "block"}}>
            <div className={styles.HeaderRightButton}>
                <div className={styles._1}/>
                <div className={styles._2}/>
                <div className={styles._3}/>
            </div>
            <h1>{size}</h1>
        </div>
    );
};

export default HeaderRightButton;