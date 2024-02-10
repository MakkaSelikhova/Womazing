import Headerline from "../../components/headerline/Headerline";
import styles from "./Brand.module.sass";
import BrandImg from "./brandImg/BrandImg";
import Img from "./photo/idea.png";
import BrandHeaderline from "../../components/brand/BrandHeaderline";
import BrandText from "../../components/brandText/BrandText";
import Img2 from "./photo/magic.png";
import Path from "../../components/path/Path";
import Btn from "../Home/Header/btn/Btn";
const Brand = () => {
  return (
    <div className={styles.container}>
      <div className={styles.brand__main}>
        <Headerline text="О Бренде" />
        <Path />
        <div className={styles.brand__first}>
          <BrandImg backgroundImage={`url(${Img})`} />
          <div className={styles.brand__firstText}>
            <BrandHeaderline text="Идея и женщина" />
            <BrandText
              text1="Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером."
              text2="Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. "
            />
          </div>
        </div>
        <div className={styles.brand__two}>
          <div className={styles.brand__firstText}>
            <BrandHeaderline text="Магия в деталях" />
            <BrandText
              text1="Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей."
              text2="Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. "
            />
          </div>
          <BrandImg backgroundImage={`url(${Img2})`} />
        </div>
        <Btn text="Перейти в магазин" />
      </div>
    </div>
  );
};

export default Brand;
