import styles from "./Header.module.sass";
import Image from "./image/Image";
import Btn from "./btn/Btn";
import HeaderlineText from "./headerlineText/HeaderlineText";
const Header = () => {
  return (
    <div className={styles.header__background}>
      <div className={styles.container}>
      <div className={styles.header__main}>
        <div className={styles.header__left}>
          <HeaderlineText />
          <Btn />
        </div>

        <Image />
      </div>
  </div></div>
  );
};
export default Header;
