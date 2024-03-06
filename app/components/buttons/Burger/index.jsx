import styles from './Burger.module.scss'
const Burger = ({isOpen, setNavOpen}) => {

    return (
        <div className={styles.root} onClick={() => setNavOpen()}>
            <div className={`${styles._1} ${isOpen ? styles._1rotate : ''}`}/>
            <div className={styles._2} style={{opacity: isOpen ? 0 : 1}}/>
            <div className={`${styles._3} ${isOpen ? styles._3rotate : ''}`} />
        </div>
    );
};

export default Burger