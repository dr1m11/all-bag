import styles from './FAQ.module.scss'
import Search from "@/app/components/Search";
import FAQBlock from "@/app/components/FAQBlock";
const Page = () => {

    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <h1 className={styles.main__heading}>Чем мы можем вам помочь?</h1>
                <p className={styles.under__main}>Просмотрите наши часто задаваемые вопросы или введите ключевое слово</p>
                <div className={styles.search__block}>
                    <Search />
                    <div className={styles.search__help}>
                        <button className={styles.help__option}>Что-то</button>
                        <button className={styles.help__option}>Что-то</button>
                        <button className={styles.help__option}>Что-то</button>
                        <button className={styles.help__option}>Что-то</button>
                    </div>
                </div>
            </div>
            <div className={styles.main}>
                <h2 className={styles.faq}>FAQ</h2>
                <FAQBlock />
            </div>
        </div>
    );
};

export default Page;