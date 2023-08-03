import styles from './BrandText.module.sass' 
const BrandText = ({ text1, text2 }) => {
  return (
    <div>
      <p className={styles.brandText}>{text1}</p>
      <p className={styles.brandText}>{text2}</p>
    </div>
  );
};

export default BrandText;
