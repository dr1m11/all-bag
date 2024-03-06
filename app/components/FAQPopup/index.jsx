'use client'
import styles from './FAQPopup.module.scss'
import {useState} from "react";

const Index = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.root}>
            <div className={styles.body} style={{background: isOpen ? '#1f768b' : ''}}>
                <h4 className={styles.heading}>Какой-либо вопрос?</h4>
                <div className={styles.button} onClick={() => setIsOpen(!isOpen)}>
                    <div className={styles.x}/>
                    <div className={styles.y} style={{transform: isOpen ? 'rotateZ(0deg)' : ''}}/>
                </div>
            </div>
            <div className={styles.info}>
                <p className={styles.info__text} style={{marginTop: isOpen ? '0' : ''}}>Ответ на вопрос Ответ на вопросОтвет на вопросОтвет на вопросОтвет на вопроснОтвет на вопрос Ответ на вопросОтвет на вопросОтвет на вопросОтвет на вопросОтвет на  </p>
            </div>
        </div>
    );
};

export default Index;