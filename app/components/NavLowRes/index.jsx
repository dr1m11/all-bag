import styles from './NavLowRes.module.scss'
import Link from "next/link";
const NavLowRes = (props) => {

    return (
        <div {...props} className={styles.root}>
            <div className={styles.content}>
                <Link href={'/'} className={styles.link}>Главная</Link>
                <Link href={'/AllCategories'} className={styles.link}>Каталог</Link>
                <Link href={'/AboutUs'} className={styles.link}>О нас</Link>
                <Link href={'/PaymentDelivery'} className={styles.link}>Оплата и доставка</Link>
                <Link className={styles.link} href={'/Confidential'}>Политика конфиденциальности</Link>
                <Link className={styles.link} href={'/Refund'}>Возврат товара</Link>
                <Link className={styles.link} href={'/FAQ'}>FAQ</Link>
                <Link className={styles.link} href={'/Contacts'}>Контакты</Link>
            </div>
        </div>
    );
};

export default NavLowRes;