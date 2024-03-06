import styles from './SingleProduct.module.scss'
import useResize from "@/app//hooks/useResize";
import ContentLoader from "react-content-loader";

const SingleProduct = ({image, title, price, isLoading}) => {

    const size = useResize()

    return (
        isLoading ?
            <ContentLoader
                speed={2}
                width={200}
                height={400}
                viewBox="0 0 251 500"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="251" height="351"/>
                <rect x="0" y="367" rx="0" ry="0" width="251" height="36"/>
                <rect x="0" y="419" rx="0" ry="0" width="150" height="19"/>
            </ContentLoader>
            :
            <div className={styles.root}>
                <img src={image} alt={"Bag"}/>
                {size < 1920 ? <div className={styles.collection}>
                    <h4>Коллекция</h4>
                    <div className={styles.colors}>
                        <div className={styles.black}/>
                        <div className={styles.grey}/>
                    </div>
                </div> : ''}
                <h5>{title}</h5>
                <p>{price}</p>
            </div>
    )
};

export default SingleProduct;