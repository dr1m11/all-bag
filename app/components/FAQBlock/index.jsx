import styles from './FAQBlock.module.scss'
import FAQPopup from "@/app/components/FAQPopup";
const Index = () => {

    const questions = [
        '',
        '',
        '',
        '',
        '',
    ]

    const questions2 = [
        '',
        '',
        '',
        '',
        '',
    ]


    console.log('huy')
    return (
        <div className={styles.root}>
            <div className={styles.column1}>
                {
                    questions.map((item, index) => (
                        <FAQPopup key={index}/>
                    ))
                }
            </div>
            <div className={styles.column2}>
                {
                    questions2.map((item, index) => (
                        <FAQPopup key={index}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Index;