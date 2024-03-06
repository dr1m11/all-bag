import React from 'react';
import styles from './Filter.module.scss'

const Filter = () => {
    return (
        <div className={styles.root}>
            <h1>ФИЛЬТРЫ</h1>
            <div className={styles.wrapper}>
                <ul className={styles.ul}>
                    <li className={styles.li}><span>Категория</span><img src="/img/AllCategories/Arrow.svg" alt={'arrow'}/></li>
                    <li className={styles.li}><span>Цвет</span><img src="/img/AllCategories/Arrow.svg" alt={'arrow'}/></li>
                    <li className={styles.li}><span>Тип</span><img src="/img/AllCategories/Arrow.svg" alt={'arrow'}/></li>
                    <li className={styles.li}><span>Цена</span><img src="/img/AllCategories/Arrow.svg" alt={'arrow'}/></li>
                    <li className={styles.li}><span>Линия</span><img src="/img/AllCategories/Arrow.svg" alt={'arrow'}/></li>
                </ul>
                <button className={styles.button}>Применить</button>
            </div>
        </div>
    );
};

export default Filter;