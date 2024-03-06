'use client'
import styles from './DeliveryBtn.module.scss'
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {changeOrderMethod} from "@/app/store/orderSlice";

const Index = () => {

    const states = useAppSelector(state => state.root.orderReducer)
    const dispatch = useAppDispatch()

    const [chosen, setChosen] = useState(0)
    dispatch(changeOrderMethod(2))

    return (
        <>
            <button className={chosen === 1 ? styles.delivery__btn__selected : styles.delivery__btn} onClick={() => setChosen(1)}>
                <h5 className={styles.delivery__heading}>Курьерская доставка</h5>
                <img className={styles.delivery__img} src={chosen === 1 ? "/img/Ordering/BoxWhite.svg" : "/img/Ordering/Box.svg"} alt={'Box'}/>
            </button>
            <button className={chosen === 2 ? styles.delivery__btn__selected : styles.delivery__btn} onClick={() => setChosen(2)}>
                <h5 className={styles.delivery__heading}>Пункт выдачи</h5>
                <img src={chosen === 2 ? "/img/Ordering/HomeWhite.svg" : "/img/Ordering/Home.svg"} alt={'Home'} className={styles.delivery__img}/>
            </button>
        </>
    );
};

export default Index;