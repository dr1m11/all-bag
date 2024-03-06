import CartOrder from "@/app/components/CartOrder";
import styles from './CartBig.module.scss'
const Index = () => {
    return (
        <div className={styles.products}>
            <table className={styles.cart__table}>
                <thead>
                <tr className={styles.table__heading}>
                    <th>Товар</th>
                    <th>Описание</th>
                    <th>Количество</th>
                    <th>Цена</th>
                </tr>
                </thead>
                <tbody>
                <CartOrder/>
                <CartOrder/>
                <CartOrder/>
                </tbody>
            </table>
        </div>
    );
};

export default Index;