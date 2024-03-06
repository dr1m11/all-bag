import {useState} from 'react';
import styles from './CharPopup.module.scss'

const Index = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    return (
        <div className={styles.root}>
            <div className={styles.size}>
                <div className={styles.heading}>
                    <h4>Размер</h4>
                    <button tabIndex={1} className={styles.plus} onClick={() => setIsOpen(!isOpen)}>
                        <div className={styles.plusX}/>
                        <div className={`${styles.plusY} ${isOpen ? styles.active : ''}`}/>
                    </button>
                </div>
                <div className={styles.desc}>
                    <h2 style={isOpen ? {marginTop: 25} : {}}>16х37х7 см</h2>
                </div>
            </div>
            <div className={styles.hr}/>
            <div>
                <div className={styles.heading}>
                    <h4>Характеристики</h4>
                    <button tabIndex={1} className={styles.plus} onClick={() => setIsOpen2(!isOpen2)}>
                        <div className={styles.plusX}/>
                        <div className={`${styles.plusY} ${isOpen2 ? styles.active : ''}`}/>
                    </button>
                </div>
                <div className={styles.desc2}>
                    <div style={isOpen2 ? {marginTop: 30} : {}} className={styles.descrip}>
                        <div className={styles.descr__item}>
                            <h5>Материал</h5>
                            <p>наименование Коллекция наименованиеКоллКоллекция наименование Коллекция наименованиеКоллекция</p>
                        </div>
                        <div className={styles.descr__item}>
                            <h5>Прокладка</h5>
                            <p>наименование Коллекция наименованиеКоллКоллекция наименование Коллекция наименованиеКоллекция</p>
                        </div>
                        <div className={styles.descr__item}>
                            <h5>Внутри</h5>
                            <p>наименование Коллекция наименованиеКоллКоллекция наименование Коллекция наименованиеКоллекция</p>
                        </div>
                        <div className={styles.descr__item}>
                            <h5>Снаружи</h5>
                            <p>наименование Коллекция наименованиеКоллКоллекция наименование Коллекция наименованиеКоллекция</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;