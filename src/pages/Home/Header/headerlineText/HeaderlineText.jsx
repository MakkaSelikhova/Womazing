import styles from './HeaderlineText.module.sass'
const HeaderlineText = () => {
  return (
    <div >
      <p className={styles.headerline__text}>
        Утонченные сочетания и бархатные <br />
        оттенки - вот то, что вы искали в этом
        <br /> сезоне. Время исследовать.
      </p>
    </div>
  );
};

export default HeaderlineText;
