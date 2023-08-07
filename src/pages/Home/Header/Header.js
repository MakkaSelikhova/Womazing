import styles from "./Header.module.sass";
import Image from "./image/Image";
import Btn from "./btn/Btn";
import HeaderlineText from "./headerlineText/HeaderlineText";
import Headerline from "../../../components/headerline/Headerline";
const Header = () => {
  return (
    <div className={styles.header__background}>
      <div className={styles.container}>
        <div className={styles.header__main}>
          <div className={styles.header__left}>
            <Headerline
              text="Новые поступления в этом сезоне"
            />
            <HeaderlineText />
            <Btn />
          </div>

          <Image />
        </div>
      </div>
    </div>
  );
};
export default Header;
