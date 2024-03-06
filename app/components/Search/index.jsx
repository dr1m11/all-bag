import styles from './Search.module.scss'
const Index = () => {
    return (
        <div className={styles.search}>
            <input type="search" placeholder={"Поиск..."} className={styles.input}/>
            <img src='/img/Header/Search_alt_light.svg' className={styles.searchBtn} alt={'search'}/>
        </div>
    );
};

export default Index;