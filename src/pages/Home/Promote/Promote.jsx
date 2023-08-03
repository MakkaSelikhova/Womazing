import Title from "../../../components/title/Title";
import styles from "./Promote.module.sass";
import quality from "./../../../svg/quality .svg"
import speed from "./../../../svg/speed .svg"
import responsibility from "./../../../svg/responsibility .svg"

const Promote = () => {
  const promoteItems = [
    {
      svg: quality,
      title: "Качество",
      text: "Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества",
      id: 0,
    },
    {
      svg: speed,
      title: "Скорость",
      text: "Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах",
      id: 1,
    },
    {
      svg: responsibility,
      title: "Ответственность",
      text: "Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing",
      id: 2,
    },
  ];
  return (
    <div className={styles.container}>
      <Title text="Что для нас важно" />
      <div className={styles.promote__main}>
        {promoteItems.map(({ svg, title, text, id }) => (
          <div key={id} className={styles.promote__item}>
            <img src={svg} className={styles.promote__svg} />
            <h3 className={styles.promote__title}>{title}</h3>
            <p className={styles.promote__text}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promote;
