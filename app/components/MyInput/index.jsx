'use client'
import styles from './MyInput.module.scss'
import {useState} from "react";
import {IoPencil} from "react-icons/io5";
import {IoMdClose} from "react-icons/io";
import {FaCheck} from "react-icons/fa6";
const Index = ({data}) => {

    const [isActive, setIsActive] = useState(false)
    const [input, setInput] = useState(data)

    return (
        <div className={styles.root}>
            {
                isActive ?
                    <div className={styles.active}>
                        <input placeholder={'Введите новые данные'} className={styles.input} onChange={(event) => setInput(event.target.value)}/>
                        <div className={styles.buttons}>
                            <IoMdClose className={styles.close} onClick={() => setIsActive(false)}/>
                            <FaCheck className={styles.check} onClick={() => setIsActive(false)}/>
                        </div>
                    </div>
                    :
                    <div className={styles.inactive}>
                        <h5 className={styles.data}>{data}</h5>
                        <IoPencil className={styles.pencil} onClick={() => setIsActive(true)}/>
                    </div>

            }
        </div>
    );
};

export default Index;