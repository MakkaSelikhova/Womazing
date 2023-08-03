import styles from './HeaderlineText.module.sass'
import Headerline from '../../../../components/headerline/Headerline';
const HeaderlineText = () => {
  return (
    <div ><Headerline text="Новые поступления
    в этом сезоне"/>
      <p className={styles.headerline__text}>
        Утонченные сочетания и бархатные <br />
        оттенки - вот то, что вы искали в этом
        <br /> сезоне. Время исследовать.
      </p>
    </div>
  );
};

export default HeaderlineText;
