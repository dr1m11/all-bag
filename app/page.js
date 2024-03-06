import Header from "./components/Header";
import styles from "./page.module.scss"
import Carousel from "./components/Carousel";
import Celebrities from "./components/Celebrities";
import {celebrities} from "./features/celebrities";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <img src='/img/Main/topImg.svg' alt={"Brown Bag"} className={styles.images1}/>
          <div className={styles.heading__top}>
            <h1>Allbag.ru - это крупномасштабный онлайн-магазин, специализирующийся на продаже премиальных
              сумок
              от ведущих мировых брендов. На нашем сайте представлен широкий ассортимент эксклюзивных
              моделей
              сумок, каждая из которых известна во всем мире и оставила ощутимый след в индустрии</h1>
          </div>
          <img src='/img/Main/niggers.svg' alt={"Girl"} className={styles.images}/>
          <div className={styles.bags}>
            <img src='/img/Main/pinkBag.svg' alt={"Pink bag"}/>
            <img src='/img/Main/blackBag.svg' alt={"Black bag"}/>
          </div>
          <div className={styles.bottom__wrapper}>
            <div className={styles.new__collection}>
              <div className={styles.collection__naming}>
                <h3>Наименование коллекции</h3>
                <p>Новая коллекция</p>
              </div>
              <Carousel/>
            </div>
            <div className={styles.celebrities}>
              {
                celebrities.map(({left, img, name, brand, text}, index) => {
                  return (
                      <Celebrities left={left} img={img} name={name} text={text} brand={brand}
                                   key={index}
                      />
                  )
                })
              }
            </div>
            <div className={styles.bottomImg}>
              <div className={styles.content}>
                <img src='/img/Main/BottomImg.svg' alt={'img'} className={styles.bag__img}/>
                <div className={styles.text}>
                  <h1>ПОЧЕМУ МЫ?</h1>
                  <p>Allbag даёт вам возможность быстро и безопасно приобрести самые известные сумки
                    таких
                    премиальных брендов, как Hermes, Louis Vuitton, Prada и многих других Мы
                    основали
                    этот
                    магазин чтобы сделать ваш шоппинг приятнее, и команда Allbag с большим
                    удовольствием
                    удовлетворит потребности даже самых требовательных и взыскательных ценителей
                    моды!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
